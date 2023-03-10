<script>
import OrderService from "../services/order.service";
export default{
    data(){
        return{
            detailOrder: {},
        } 
    },

    created(){
        this.getDetailOrder()
    },

    methods:{
        async getDetailOrder(){
            const response = await OrderService.getOrderById(this.$route.params.id);
            this.detailOrder = response;
            // console.log(this.detailOrder.products);
        }
    }

}
</script>

<template>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">CHI TIẾT CÁC SẢN PHẨM TRONG ĐƠN HÀNG</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li style="font-weight: 600;" class="breadcrumb-item">
                    <router-link to="/userprofile">Thông tin của tôi</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp; Chi tiết đơn hàng</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div id="id_order">
            Đơn hàng: {{detailOrder._id}}
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in detailOrder.products">
                    <td>{{ product.productname }}</td>
                    <td>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}</td>
                    <td>{{ product.quantity }}</td>
                    <td> {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price*product.quantity)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
#breadcrumb_background {
    background-image: url("../assets/img/breadcrum_bg1.webp");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 203px;
    padding: 60px 0 80px 0;
    margin-bottom: 30px;
}

#title_breadcrumb {
    font-weight: 800;
    color: #fff;
    font-size: 25px;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">" !important;
    color: #fff;
}

#breadcrumb_background a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}

#breadcrumb_background a:hover {
    color: #1097cf;
}

#id_order{
    color: #6c757d;
    font-size: 20px;
}


</style>