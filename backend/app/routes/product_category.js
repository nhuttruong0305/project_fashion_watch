const express = require("express");
const ProductCategoryController = require("../controllers/product_category");

const router = express.Router();

//Thêm loại sản phẩm mới (đã chạy đúng)
router.route("/create")
    .post(ProductCategoryController.createProductCategory);

//Chỉnh sửa thông tin loại sản phẩm (đã chạy đúng)
router.route("/update/:number_type")
    .put(ProductCategoryController.updateProductCategory);

//Lấy thông tin tất cả loại sản phẩm (đã chạy đúng)
router.route("/getAll")
    .get(ProductCategoryController.getAllProductCategory);    

//Lấy thông tin chi tiết 1 loại sản phẩm theo number type (đã chạy đúng)
router.route("/detail/:number_type")
    .get(ProductCategoryController.getDetailProductCategory);

module.exports = router;  