const ApiError = require("../api-error");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

//Đăng ký tài khoản (đã chạy đúng)
exports.register = async (req, res, next) => { 
    try{
        //hash password do người dùng nhập vào
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

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