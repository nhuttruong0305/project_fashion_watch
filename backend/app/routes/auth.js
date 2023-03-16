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

//Cập nhật mật khẩu
router.route("/updatepassword/:id")
    .put(Auth.updatePassword);

//Lấy danh sách tài khoản người dùng (tất cả hoặc theo email)
router.route("/getaccount/:email")
    .get(Auth.getAccount);

//Xóa tài khoản người dùng
router.route("/delete/:email")
    .delete(Auth.deleteAccount);

module.exports = router;