const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            require: true,
            unique: true,
        },
        number_type: { //đây là type trong collection products
            type: Number,
            require: true,
            unique: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("ProductCategory", productCategorySchema);