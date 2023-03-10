const express = require("express");
const Auth = require("../controllers/auth");

const router = express.Router();

//Tạo mới 1 tài khoản
router.route("/register")
    .post(Auth.register);


//Đăng nhập    
router.route("/login")
    .post(Auth.login);

//Cập nhật thông tin tài khoản
router.route("/updateprofile/:id")
    .put(Auth.updateUserProfile);

module.exports = router;