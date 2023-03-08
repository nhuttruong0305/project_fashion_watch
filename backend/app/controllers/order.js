const OrderModel = require("../models/order");
const ApiError = require("../api-error");
const ProductModel = require("../models/product");

//Tạo đơn hàng 
exports.createOrder = async (req, res, next) => {
    const OrderInfo = new OrderModel(req.body);
    try{
        const newOrder = await OrderInfo.save();

        //Chạy vòng lặp trừ amountinstock trong products ra
        //Đầu tiên lấy thông tin các sản phẩm sẽ được thêm vào order ra (ở đây chính là cart)
        const list_products_in_cart = req.body.products;

        for(let i = 0; i < list_products_in_cart.length; i++){

            //Lấy thông tin sản phẩm hiện tại ra (tất cả thông tin luôn)
            const infoProduct = await ProductModel.findById(list_products_in_cart[i]._id);
            
            const options = { returnDocument: "after"};
            //Dữ liệu sẽ được cập nhật
            const updateData = {
                productname: infoProduct.productname,
                price: infoProduct.price,
                type: infoProduct.type,
                description: infoProduct.description,
                color: infoProduct.color,
                brand: infoProduct.brand,
                imageURL: infoProduct.imageURL,
                origin: infoProduct.origin,
                amountinstock: infoProduct.amountinstock-list_products_in_cart[i].quantity,
            }

            const productUpdate = await ProductModel.findByIdAndUpdate(list_products_in_cart[i]._id, updateData, options);
        }
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

//Update đơn hàng theo id
exports.updateOrder = async (req, res, next) => {
    try{
        const options = { returnDocument: "after"};
        const order_update = await OrderModel.findByIdAndUpdate(req.params.id, req.body, options);
        return res.send(order_update);
    }catch(error){
        return next(new ApiError(500, "Có lỗi xảy ra khi cập nhật thông tin đơn hàng"));
    }
}