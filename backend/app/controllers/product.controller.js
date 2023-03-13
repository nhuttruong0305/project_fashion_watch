const ProductModel = require("../models/product");
const ApiError = require("../api-error");

//Chèn 1 sản phẩm vào DB (đã chạy đúng)
exports.createProduct = async (req, res, next) => {
    const productInfo = new ProductModel(req.body); //biến chưa thông tin sản phẩm từ req.body
    try{
        const newProduct = await productInfo.save();
        return res.send(newProduct); //Không cần return cũng được
    }catch(err){
        // return res.status(501).send(err);
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));
    }
}

//Tìm kiếm sản phẩm theo loại hoặc tất cả sản phẩm (đã chạy đúng)
exports.findProductByType = async (req, res, next) => {
    try{
        const type_of_product = req.params.type;
        if(type_of_product != "all"){
            const list_of_product = await ProductModel.find({type: type_of_product});
            return res.send(list_of_product);   //Không cần return cũng được
        }else{
            const list_of_product = await ProductModel.find();
            return res.send(list_of_product);   //Không cần return cũng được
        }

    }catch(err){
        // return res.status(501).send(err);
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));
    }
}

//Hiển thị chi tiết sản phẩm (đã chạy đúng)
exports.findDetailProduct = async (req, res, next) => {
    try{
        const id_of_product = req.params.id;
        const detail_of_product = await ProductModel.findById(id_of_product);
        return res.send(detail_of_product); //Không cần return cũng được
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}

//Tìm sản phẩm theo tên qua keyword (đã chạy đúng)
exports.searchProductByKeyword = async (req, res, next) => { 
    try{
        const keyword = req.query.keyword;
        const list_of_product = await ProductModel.find({ productname: { $regex: `${keyword}`, $options: 'i'}});
        return res.send(list_of_product);
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}

//Cập nhật thông tin 1 sản phẩm (đã chạy đúng)
exports.updateProduct = async (req, res, next) => {
    try{
        const updateDoc = req.body;
        const options = {returnDocument: "after"};
        const update = await ProductModel.findByIdAndUpdate(req.params.id, updateDoc, options);
        return res.send(update);
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi cập nhật thông tin sản phẩm"));  //Không cần return cũng được
    }
}