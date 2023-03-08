const express = require("express");
const cors = require("cors");
const productRouter = require("./app/routes/product.route");
const ApiError = require("./app/api-error");
const mongoose = require('mongoose');
const config = require("./app/config");
const Auth = require("./app/routes/auth");
const Order = require("./app/routes/order");

const app = express();

app.use(cors());
app.use(express.json());

//Kết nối đến cơ sở dữ liệu
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Kết nối thành công đến cơ sở dữ liệu.");
    }).catch((error) => {
        console.log("Kết nối thất bại");
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to home page" });
});

//route đăng ký đăng nhập
app.use("/api/auth", Auth);

//route cho api sản phẩm
app.use("/api/products", productRouter);

//route cho api order
app.use("/api/orders", Order);

// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;