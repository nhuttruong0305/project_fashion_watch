const ApiError = require("../api-error");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

//Đăng ký tài khoản (đã chạy đúng)
exports.register = async (req, res, next) => { 
    try{
        //hash password do người dùng nhập vào
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

        //Tìm kiếm xem có email bị trùng không
        const emailExist = await UserModel.findOne({email: req.body.email});
        if(emailExist){
            return next(new ApiError(400,"Email đã tồn tại, hãy dùng email khác"));
        }

        //tạo user
        const newUser = await new UserModel({
            fullname: req.body.fullname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: hashed,
        });

        // Lưu vào DB
        const user = await newUser.save();
        return res.send(user);//trả về thông tin user vừa tạo
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi đăng ký tài khoản"));
    }
};
 
//Đăng nhập  (đã chạy đúng)
exports.login = async (req, res, next) => {
    try{
        //Tìm user khớp với email nhập vào
        const user = await UserModel.findOne({email: req.body.email});
        if(!user){
            //Nếu không tìm thấy user
            return next(new ApiError(400,"Email chưa được đăng ký"));
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        
        //Nếu password không đúng
        if(!validPassword){
            return next(new ApiError(400,"Sai mật khẩu"));
        }

        //Nếu cả email và password đúng
        if(user && validPassword){
            return res.send(user);
        }

    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi đăng nhập"));
    }
};

//Cập nhật thông tin tài khoản (đã chạy đúng)
exports.updateUserProfile = async (req, res, next) => {
    try{
        const options = {returnDocument: "after"};
        const updateDoc = {
            fullname: req.body.fullname,
            phonenumber: req.body.phonenumber,
        }

        const userProfileUpdate = await UserModel.findByIdAndUpdate(req.params.id, updateDoc, options);
        return res.send(userProfileUpdate);
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi cập nhật thông tin tài khoản"));
    }
}

//Cập nhật mật khẩu (đã chạy đúng)
exports.updatePassword = async (req, res, next) => {
    try{
        const current_password = req.body.current_password;
        const user_info = await UserModel.findById(req.params.id);
        const validPassword = await bcrypt.compare(current_password, user_info.password);

        if(validPassword){
            const new_password = req.body.new_password;
            
            //hash password do người dùng nhập vào
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(new_password, salt);
            
            //Tiến hành cập nhật vào CSDL
            const options = {returnDocument: "after"};
            const updateDoc = {
                password: hashed,
            };
            const update_password = await UserModel.findByIdAndUpdate(req.params.id, updateDoc, options);
            return res.send(update_password);
        }else{
            return next(new ApiError(400,"Mật khẩu hiện tại bạn nhập không đúng"));    
        }
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi đổi mật khẩu"));
    }
}

//Lấy danh sách tài khoản người dùng (tất cả hoặc 1 tài khoản cụ thể theo email)
exports.getAccount = async (req, res, next) => {
    try{    
        const inputEmail = req.params.email;
        if(inputEmail == "all"){
            const userAccount = await UserModel.find({isAdmin: false});
            return res.send(userAccount);
        }else{
            const userAccount = await UserModel.findOne({email: inputEmail});
            return res.send(userAccount);
        }
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin tài khoản người dùng"));
    }
}

//Xóa tài khoản người dùng khỏi DB
exports.deleteAccount = async (req, res, next) => {
    try{
        const deleteAccount = await UserModel.deleteOne({email: req.params.email});
        return res.send(deleteAccount);
        // res.status(400).json("Xóa thành công");
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi xóa tài khoản người dùng"));
    }
}