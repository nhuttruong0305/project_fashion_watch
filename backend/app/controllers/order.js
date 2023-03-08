const OrderModel = require("../models/order");
const ApiError = require("../api-error");

//Tạo đơn hàng (đã chạy đúng)
exports.createOrder = async (req, res, next) => {
    const OrderInfo = new OrderModel(req.body);
    try{
        const newOrder = await OrderInfo.save();
        return res.send(newOrder);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi tạo đơn hàng"));
    }
}

//Lấy tất cả đơn hàng (đã chạy đúng)
exports.getAllOrder = async (req, res, next) => {
    try{
        const order_list = await OrderModel.find();
        return res.send(order_list);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));
    }
}

//Lấy đơn hàng theo mã đơn hàng (đã chạy đúng)
exports.getOrderById = async (req, res, next) => {
    try{
        const detailOrder = await OrderModel.findById(req.params.id);
        return res.send(detailOrder);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));        
    }
}

//Lấy danh sách đơn hàng theo email (đã chạy đúng)
exports.getOrderByEmail = async (req, res, next) => {
    try{
        const list_of_order_by_email = await OrderModel.find({email: req.params.email});
        return res.send(list_of_order_by_email);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));        
    }
}

//Update đơn hàng theo id (đã chạy đúng)
exports.updateOrder = async (req, res, next) => {
    try{
        options = { returnDocument: "after"};
        const order_update = await OrderModel.findByIdAndUpdate(req.params.id, req.body, options);
        return res.send(order_update);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi cập nhật thông tin đơn hàng"));
    }
}