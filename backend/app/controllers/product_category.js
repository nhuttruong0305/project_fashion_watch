const ApiError = require("../api-error");
const ProductCategoryModel = require("../models/product_category");

//Thêm loại sản phẩm mới (đã chạy đúng)
exports.createProductCategory = async (req, res, next) => {
    const category_product_info = new ProductCategoryModel(req.body);
    try{
        const product_categories_exists = await ProductCategoryModel.find();
        for(let i = 0; i < product_categories_exists.length; i++){
            if(req.body.number_type == product_categories_exists[i].number_type){
                return next(new ApiError(400, "Số định danh loại đã trùng, vui lòng chọn số khác"));
            }
        }
        const new_product_category = await category_product_info.save();
        return res.send(new_product_category);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi thêm loại sản phẩm"));
    }
}

//Chỉnh sửa thông tin loại sản phẩm (đã chạy đúng)
exports.updateProductCategory = async (req, res, next) => {
    try{
        //Đầu tiên tìm trong tất cả các loại sản phẩm có tên trùng không
        const product_categories_exists = await ProductCategoryModel.find();
        for(let i = 0; i < product_categories_exists.length; i++){
            if(req.body.category_name == product_categories_exists[i].category_name){
                return next(new ApiError(400, "Tên loại sản phẩm này đã tồn tại, vui lòng chọn tên khác"));
            }
        }
        const options = {returnDocument: "after"};
        const updateDoc = {
            category_name: req.body.category_name,
        };
        const productCategoryUpdate = await ProductCategoryModel.findOneAndUpdate({number_type: req.params.number_type}, updateDoc, options);
        return res.send(productCategoryUpdate);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi chỉnh sửa thông tin loại sản phẩm"));
    }
}

//Lấy thông tin tất cả loại sản phẩm (đã chạy đúng)
exports.getAllProductCategory = async (req, res, next) => {
    try{
        const product_category_list = await ProductCategoryModel.find();
        return res.send(product_category_list);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin loại sản phẩm"));
    }
}

//Lấy thông tin chi tiết 1 loại sản phẩm (đã chạy đúng)
exports.getDetailProductCategory = async (req, res, next) => {
    try{
        const detailProductCategory = await ProductCategoryModel.findOne({number_type: req.params.number_type});
        return res.send(detailProductCategory);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin loại sản phẩm"));
    }
}