<script>
import OrderService from '../services/order.service';
export default{
    data(){
        return{
            fullname: '',
            email: '',
            phonenumber: '',
            orderList:[],
        } 
    },

    created(){ 
        this.getUserProfileAndOrderList()
    },

    methods:{
        async getUserProfileAndOrderList(){
            const UserProfile = JSON.parse(localStorage.getItem('UserLogin'));
            this.fullname = UserProfile.fullname;
            this.email = UserProfile.email;
            this.phonenumber = UserProfile.phonenumber;

            //Lấy thông tin các đơn hàng của email này
            try{
                const response = await OrderService.getOrderListByEmail(this.email);
                this.orderList = response;
            }catch(error){
                alert("Có lỗi xảy ra khi lấy danh sách đơn hàng");
            }
        }
    }
}
</script>

<template>
    <title>Thông tin tài khoản</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">THÔNG TIN TÀI KHOẢN</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp; Thông tin tài khoản</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div class="row">
            <div id="navigation_in_userprofile" class="col-md-3">
                <div>
                    <a>Thông tin tài khoản</a>
                </div>
                <div class="mt-3">
                    <router-link to="/changeuserprofile" style="text-decoration: none; color: #1097cf;">Đổi thông tin người dùng</router-link>
                </div>
                <div class="mt-3">
                    <router-link to="/changepassword" style="text-decoration: none; color: #1097cf;">Đổi mật khẩu</router-link>
                </div>
            </div>
            <div class="col-md-8 offset-md-1" id="info_user">
                <h3 style="color: #1097cf">THÔNG TIN</h3>
                <div class="row mt-3">
                    <div class="col-md-3">Họ và tên:</div>
                    <div class="col-md-9">{{ fullname }}</div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3">Email:</div>
                    <div class="col-md-9">{{ email }}</div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3">Số điện thoại</div>
                    <div class="col-md-9">{{ phonenumber }}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <h3 class="text-center">CÁC ĐƠN HÀNG ĐÃ ĐẶT</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Mã đơn</th>
                    <th scope="col">Tên người nhận</th>
                    <th scope="col">Địa chỉ nhận</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tổng</th>
                    <th scope="col">Hình thức thanh toán</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orderList">
                    <td><router-link :to="{name: 'DetailOrder', params: {id: `${order._id}`}}"> {{ order._id }}</router-link> </td>
                    <td>{{ order.fullname }}</td>
                    <td>{{ order.address }}</td>
                    <td>{{ order.phonenumber }}</td>
                    <td>{{ order.email }}</td>
                    <td>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total) }}</td>
                    <td>{{ order.payment }}</td>
                    <td>{{ order.status }}</td>
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

#navigation_in_userprofile{
    background-color: #f1f1f1;
    padding: 20px;
}

#info_user{
    background-color: #f1f1f1;
    padding: 25px;
}

</style>