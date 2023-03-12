<script>
export default{
    data(){
        return {
            fullname: '',
            phonenumber: '',
            address: '',
            products: [],
            note: '',
            total: 0,
            payment: '',
        }
    },

    created(){
        this.getInfoOrder()
    },

    methods:{
        getInfoOrder(){
            const InfoCustomer = JSON.parse(localStorage.getItem("InfoCustomer"));
            const InfoProductInCart = JSON.parse(localStorage.getItem("Cart"));
            this.fullname = InfoCustomer.fullname;
            this.phonenumber = InfoCustomer.phonenumber;
            this.address = InfoCustomer.address;
            this.note = InfoCustomer.note;
            this.payment = InfoCustomer.payment;
            this.total = InfoCustomer.total;
            this.products = InfoProductInCart;
        },

        removeCartAfterOrder(){
            localStorage.removeItem("Cart");
            localStorage.removeItem("InfoCustomer");
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<template>
    <title>Đặt hàng thành công</title>
    <div class="container" style="margin-top: 20px">
        <div class="row">
            <div class="col-3"></div>
            <div id="container_notification" class="col-6">
                <div class="d-flex mt-3 align-items-center justify-content-center" id="top">
                    <img id="order_success_img" src="../assets/img/order_success.png" alt="">
                    <p style="font-size: 20px; margin-left: 10px; color: green; font-weight: 700;">ĐẶT HÀNG THÀNH CÔNG</p>
                </div>
                <div class="mt-3">
                    <p>Cảm ơn anh <strong>{{ fullname }}</strong> đã cho CHASTAIN cơ hội được phục vụ.</p>
                </div>
                <div class="mt-3" id="contain_info_customer">
                    <p><strong>Người nhận hàng:</strong> {{ fullname }}, {{ phonenumber }}</p>
                    <p><strong>Giao đến:</strong> {{ address }}</p>
                    <p><strong>Tổng tiền:</strong> {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}}</p>
                    <p><strong>Hình thức thanh toán</strong>: {{ payment }} </p>
                </div>

                <div class="mt-3 text-center" style="border: 1px dashed orange; padding: 5px; border-radius: 6px; color: orange;">
                    Đơn hàng đang chờ xử lý
                </div>

                <div id="contain_products_in_order">
                    <div><strong>Các sản phẩm</strong></div>
                    <hr>
                    <!-- Mỗi thẻ div bên dưới là 1 sản phẩm -->
                    <template v-for="product in products">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center contain_img_product_in_order">
                                <img class="img_products_in_order" :src="product.imageURL" alt="">
                                <div>{{ product.productname }}</div>
                                <div class="quantity_products_in_order">{{ product.quantity }}</div>
                            </div>
                            <div>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.quantity*product.price) }}</div>
                        </div>
                        <hr>
                    </template>  

                    <div>
                        <button @click="removeCartAfterOrder()" id="btn_continue_buy">
                            TIẾP TỤC MUA HÀNG
                        </button>    
                    </div>
                </div>
            </div>
            <div class="col-6"></div>
        </div>
    </div>
</template>

<style scoped>
#order_success_img {
    width: 50px;
    display: block;
}

#container_notification {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    padding: 20px
}

#top {
    background-color: rgb(229, 250, 229);
    height: 60px;
}

#contain_info_customer {
    background-color: rgb(233, 233, 233);
    padding: 20px;
}

#contain_products_in_order{
    background-color: #e9e9e9;
    padding: 20px;
    margin-top: 10px;
}

.img_products_in_order{
    width: 90px; 
    display: block; 
    margin-right: 35px;
    border-radius: 10px;
}

.contain_img_product_in_order{
    position: relative;
}

.quantity_products_in_order{
    position: absolute;
    top: -5px;
    left: 75px;
    background-color: black;
    width: 20px;
    text-align: center;
    color: white;
    border-radius: 50%;
    font-size: 13px;
}

#btn_continue_buy{
    padding: 5px;
    display: block;
    margin: 0 auto;
    background-color: #1097cf;
    border: 0px;
    color: #fff;
    font-weight: 400;
}

#btn_continue_buy:hover{
    background-color: rgb(238, 255, 0);
}
</style>