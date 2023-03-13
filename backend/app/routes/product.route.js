const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

//Chèn 1 sản phẩm mới vào DB: (đã chạy đúng)
router.route("/")
    .post(productController.createProduct);

//Tìm sản phẩm theo loại (đã chạy đúng)
router.route("/:type")
    .get(productController.findProductByType);

//Tìm thông tin chi tiết sản phẩm theo req.params.id (đã chạy đúng)
router.route("/detail/:id")
    .get(productController.findDetailProduct);

//Tìm sản phẩm theo tên (đã chạy đúng)
router.route("/searchproduct/bykeyword")
    .get(productController.searchProductByKeyword);

//Cập nhật thông tin sản phẩm 
router.route("/update/:id")
    .put(productController.updateProduct);

module.exports = router;