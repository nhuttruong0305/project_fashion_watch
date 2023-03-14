<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import OrderService from '../services/order.service';
export default{
    components:{
        NavAdminPage,
    },  

    data(){
        return{
            order_list: [],
        }
    },

    created(){
        this.getAllOrder()
    },

    methods:{
        async getAllOrder(){
            try{
                this.order_list = await OrderService.getAllOrderInDB();
            }catch(error){  
                alert("Có lỗi xảy ra khi lấy thông tin các đơn hàng");
            }
        }
    }
}
</script>

<template>
    <div class="container-fluid" style="background-color: rgb(237, 234, 225);padding: 20px;">
        <div class="row">
            <div class="col-md-3" id="nav_between_admin_page">
                <!-- Thử tách đoạn này làm component riêng -->
                <NavAdminPage></NavAdminPage>
                <!-- Thử tách đoạn này làm component riêng -->
            </div>
            <div class="col-md-8 offset-md-1" style="background-color: white;padding: 17px;">
                <h4>Thông tin tất cả các đơn hàng có ở đây</h4>
                <hr>
            </div>
        </div>
        <div class="row" style="background-color: white; margin-top: 20px;">
            <div class="mt-3 text-center">
                <label style="margin-right: 10px;" for="input_email">Nhập email để tìm các đơn hàng của email đó</label>
                <input type="text" id="input_email">
                <i class="fa-solid fa-magnifying-glass" id="icon_search"></i>
            </div>
            
            <table class="table table-success table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Tên người nhận</th>
                        <th scope="col">Địa chỉ nhận</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tổng</th>
                        <th scope="col">Hình thức thanh toán</th>
                        <th scope="col">Ghi chú</th>
                        <th scope="col">Trạng thái</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in order_list">
                        <td><router-link :to="{name: 'AdminDetailOrder', params: {id: `${order._id}`}}">{{ order._id }}</router-link></td>
                        <td>{{ order.fullname }}</td>
                        <td>{{ order.address }}</td>
                        <td>{{ order.phonenumber }}</td>
                        <td>{{ order.email }}</td>
                        <td>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total) }}</td>
                        <td>{{ order.payment }}</td>
                        <td>{{ order.note }}</td>
                        <td>{{ order.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
#nav_between_admin_page{
    background-color: white;
}

#icon_search{
    background-color: #d1e7dd;
    padding: 10px;
    border-radius: 50%;
    margin-left:5px;
}
</style>