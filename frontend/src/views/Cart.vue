<script>
export default {
    data() {
        return {
            list_of_products_in_cart: [],
            total_cart: 0
        }
    },

    created() {
        this.getProductInCart();
    },

    methods: {
        getProductInCart() {
            this.list_of_products_in_cart = JSON.parse(localStorage.getItem("Cart"));
            this.total_cart = 0;
            for(let i = 0; i < this.list_of_products_in_cart.length; i++){
                this.total_cart += (this.list_of_products_in_cart[i].quantity*this.list_of_products_in_cart[i].price);
            }
        },

        removeProductInCart(_id) {
            let cart = JSON.parse(localStorage.getItem("Cart"));
            for (let i = 0; i < cart.length; i++) {
                if (cart[i]._id == _id) {
                    cart.splice(i, 1);
                }
            }
            //Set lại Cart lên localStorage
            localStorage.setItem("Cart", JSON.stringify(cart));
            this.getProductInCart();
        },

        adjustProductQuantity(type, _id){
            //Lấy danh sách các sản phẩm từ localStorage về trước
            let cart = JSON.parse(localStorage.getItem("Cart"));
            for(let i = 0; i < cart.length; i++){
                if(cart[i]._id == _id){
                    if(type == "increase"){
                        cart[i].quantity += 1;
                    }else if(type == "decrease"){
                        cart[i].quantity -= 1;
                        if(cart[i].quantity == 0){
                            cart.splice(i, 1);
                        }
                    }
                }
            }
            localStorage.setItem("Cart", JSON.stringify(cart));
            this.getProductInCart();
        }
    }
}

</script>

<template>
    <!-- template ở đây đã check -->
    <div id="nav_to_home"> <router-link to="/" style="text-decoration: none; color:black;">Trang
            chủ</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;<span>Giỏ hàng</span></div>
    <div id="container_cart" class="container">
        <table class="table table-bordered">
            <thead id="cart_head">
                <tr>
                    <th scope="col" class="cart_head_item">Ảnh sản phẩm</th>
                    <th scope="col" class="cart_head_item">Tên sản phẩm</th>
                    <th scope="col" class="cart_head_item">Đơn giá</th>
                    <th scope="col" class="cart_head_item">Số lượng</th>
                    <th scope="col" class="cart_head_item">Thành tiền</th>
                    <th scope="col" class="cart_head_item">Xóa</th>
                </tr>
            </thead>
            <tbody>
                <!-- Mỗi tr là 1 item trong vòng lặp v-for -->
                <tr v-for="product in list_of_products_in_cart" :key="product._id">
                    <td><img class="img_product_in_cart_body" :src="product.imageURL" alt=""></td>
                    <td class="info_product_in_cart_body">{{ product.productname }}</td>
                    <td class="info_product_in_cart_body">{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}</td>
                    <!-- <td style="position: relative; text-align: center; top: 50px;">
                        {{ product.quantity }} 
                        <div class="d-flex flex-column" style="width: 30px; position: absolute; top: -6px; right: 20px;">
                            <button @click="adjustProductQuantity('increase', product._id)" style="border: 1px solid black;">+</button>
                            <button @click="adjustProductQuantity('decrease', product._id)" style="border: 1px solid black;">-</button>
                        </div> 
                    </td> -->

                    <td class="info_product_in_cart_body"> {{ product.quantity }}  </td>
                    <td class="info_product_in_cart_body">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price*product.quantity)}}</td>
                    <td class="info_product_in_cart_body"><i style="cursor: pointer;"
                            @click="removeProductInCart(product._id)" class="fa-solid fa-trash"></i></td>
                </tr>
            </tbody>
        </table>
        
        <div class="d-flex justify-content-between">
            <div><router-link to="/"><button id="btn_continue_buy" class="btn">TIẾP TỤC MUA HÀNG</button></router-link></div>
            <div style="font-size: 22px;">Tổng tiền thanh toán: <span style="color: #1097cf"> {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total_cart) }}</span></div>
        </div>

        <div class="mt-3 d-flex justify-content-end">
            <button class="btn" id="order_button"><router-link id="nav_to_order_page" to="/order">ĐẶT HÀNG NGAY</router-link></button>
        </div>
    </div>
</template>

<style scoped>
/* css ở đây đã check */
#nav_to_home {
    text-align: center;
    margin-top: 50px;
}

#nav_to_home span {
    color: #1097cf;
}

#container_cart {
    padding: 50px 130px 0 130px;
}

.cart_head_item {
    text-align: center;
    font-weight: 400;
}

.img_product_in_cart_body {
    display: block;
    width: 90px;
    margin: 20px auto;
}

.info_product_in_cart_body {
    line-height: 130px;
    text-align: center;
}

#btn_continue_buy{
    background-color: #f3f3f3;
    border-radius: 0px;
}

#btn_continue_buy:hover{
    background-color: #1097cf;
    color: black;
}

#order_button{
    background-color: #1097cf;
    border-radius: 0px;
    width: 300px;
}

#order_button:hover{
    background-color: rgb(139, 139, 56);
}

#nav_to_order_page{
    text-decoration: none;
    color: black;
}
</style>