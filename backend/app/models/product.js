const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productname: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        type: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        color: {
            type: String,
            require: true,
        },
        brand: {
            type: String,
            require: true,
        },
        imageURL: {
            type: String,
            require: true,
        },
        origin: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            require: true,
            default: "Còn kinh doanh",
        },
        amountinstock: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);