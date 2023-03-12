<script>
import OrderService from '../services/order.service';

export default{
    
    data() {
        return {
            fullname: '',
            email: '',
            phonenumber: '',
            address: '',
            products: [],
            note: '',
            total: 20000,
            payment: '',
            status: 'Chưa xử lý',
        }
    },

    mounted(){
        this.getUserInfo(),
        this.getProductsInCart()
    },

    methods:{
        //Hàm này để lấy thông tin khách hàng và điền vào các input
        getUserInfo(){
            const userInfo = JSON.parse(localStorage.getItem("UserLogin"));
            this.fullname = userInfo.fullname;
            this.email = userInfo.email;
            this.phonenumber = userInfo.phonenumber;
        },

        //Lấy danh sách các sản phẩm trong local Cart và tính tổng của đơn hàng
        getProductsInCart(){
            this.products = JSON.parse(localStorage.getItem("Cart"));
            //Tính tổng tiền đơn hàng (total)
            for(let i = 0; i < this.products.length; i++){
                const total_of_each_product = this.products[i].price*this.products[i].quantity;
                this.total += total_of_each_product;
            }
        },

        //Hàm tạo đơn hàng
        async createOrderForCustomer(){
            try{
                const order = await OrderService.createOrder({
                    fullname: this.fullname,
                    email: this.email,
                    phonenumber: this.phonenumber,
                    address: this.address,
                    products: this.products,
                    note: this.note,
                    total: this.total,
                    payment: this.payment,
                    status: this.status,
                });

                //Lưu thông tin người nhận lên localStorage
                const InfoCustomer = {
                    fullname: this.fullname,
                    phonenumber: this.phonenumber,
                    address: this.address,
                    total: this.total,
                    payment: this.payment,
                    note: this.note,
                }
                localStorage.setItem("InfoCustomer", JSON.stringify(InfoCustomer));
                //Sửa lại code dưới này điều hướng qua trang đặt hàng thành công
                this.$router.push({ name: 'OrderSuccess' });
            }catch(error){
                alert("Đặt hàng thất bại, đã có lỗi xảy ra vui lòng thử lại");
            }
        },
    },   
}


</script>
<template>
    <title>Tiến hành đặt hàng</title>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-8">
            <div class="row">
                <div class="col">
                    <h5>Thông tin nhận hàng</h5>
                    <form @submit.prevent="createOrderForCustomer()">
                        <div class="mb-3">
                            <label for="fullnameOrder" class="form-label">Họ và tên người nhận</label>
                            <input type="text" class="form-control" id="fullnameOrder" required v-model="fullname">
                        </div>
                        <div class="mb-3">
                            <label for="emailOrder" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailOrder" required v-model="email">
                        </div>

                        <div class="mb-3">
                            <label for="phoneNumberOrder" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="phoneNumberOrder" required v-model="phonenumber">
                        </div>

                        <div class="mb-3">
                            <label for="addressOrder" class="form-label">Địa chỉ</label>
                            <input type="text" class="form-control" id="addressOrder" required v-model="address">
                        </div>
                        
                        <div class="mb-3">
                            <label for="comment_order" class="form-label">Ghi chú</label>
                            <textarea class="form-control" id="comment_order" rows="4" placeholder="Bạn có ghi chú gì cần chúng tôi lưu ý khi giao hàng không" v-model="note"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="payment_order" class="form-label">Hình thức thanh toán</label>
                            <select name="payment_order" id="payment_order" class="form-control" required v-model="payment">
                                <option value="Thanh toán tiền mặt" selected>Thanh toán tiền mặt</option>
                                <option value="Chuyển khoản ATM">Chuyển khoản ATM</option>
                                <option value="Thanh toán bằng hình thức cà thẻ">Thanh toán bằng hình thức cà thẻ</option>
                            </select>
                        </div>
                        <div class="mt-5">
                            <button type="submit" id="btn_agree_order">ĐẶT HÀNG NGAY</button>
                        </div>
                        
                    </form>

                </div> 
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Danh sách sản phẩm
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center"></th>
                                <th scope="col" class="text-center">Số lượng</th>
                                <th scope="col" class="text-center">Giá </th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Mỗi thẻ tr bên dưới là 1 sản phẩm -->
                            <tr v-for="product in products">
                                <td style="width: 40%"><img class="img_card_body" :src="product.imageURL" alt=""></td>
                                <td class="amount_card_body">{{ product.quantity }}</td>
                                <td class="price_card_body">{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}</td>
                            </tr>
                            <!-- <tr>
                                <td style="width: 40%"><img class="img_card_body" src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt=""></td>
                                <td class="amount_card_body">1</td>
                                <td class="price_card_body">3.200.000 đ</td>
                            </tr> -->
                        </tbody>
                    </table>
                    <div>
                        <div class="d-flex justify-content-between">
                            <p>Tạm tính</p>
                            <p>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total-20000) }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Phí vận chuyển</p>
                            <p>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(20000)}}</p> 
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <router-link id="back_to_cart" to="/cart"><i class="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;Quay về giỏ hàng</router-link>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</div>
</template>

<style scoped>
.img_card_body{
    width: 70%;
    display: block;
    margin: 0 auto;
}

.price_card_body{
    text-align: center;
}

.amount_card_body{
    text-align: center;
}

#back_to_cart{
    text-decoration: none;
    color: black;
}

#btn_agree_order{
    background-color:bisque;
    border: 0px;
    padding: 10px;
}
</style>