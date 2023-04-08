<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import OrderService from '../services/order.service';
import BackToTop from '../components/BackToTop.vue';
export default{
    components:{
        NavAdminPage,
        BackToTop
    },
    data(){
        return{
            order_list: [],
            phonenumber_to_find_order: '',
            email_to_find_order: '',
        }
    },

    watch:{
        '$route': 'getOrderList'
    },

    created(){
        this.getOrderList();
    },

    methods:{
        async getOrderList(){
            try{
                this.order_list = await OrderService.getOrderByPhoneNumber(this.$route.query.phonenumber);
            }catch(e){
                alert("Có lỗi xảy ra khi lấy thông tin đơn hàng");
            }
        },

        searchOrderByEmail(){
            if(this.email_to_find_order != ''){
                this.$router.push({ name: 'AdminSearchOrder', query: { email: this.email_to_find_order }});
            }
        },

        searchOrderByPhoneNumber(){
            if(this.phonenumber_to_find_order != ''){
                this.$router.push({ name: 'AdminSearchOrderByPhoneNumber', query: {phonenumber: this.phonenumber_to_find_order }});
            }
        }
    }
}
</script>

<template>
    <div class="container-fluid" style="background-color: rgb(237, 234, 225);padding: 20px;">
        <div class="row">
            <div class="col-md-3" id="nav_between_admin_page">
                <NavAdminPage></NavAdminPage>
            </div>
            <div class="col-md-8 offset-md-1" style="background-color: white;padding: 17px;">
                <h4>Thông tin tất cả các đơn hàng có ở đây</h4>
                <hr>
            </div>
        </div>

        <div class="row" style="background-color: white; margin-top: 20px;">
            <div class="mt-3">
                <table id="table_contain_search_order">
                    <tr>
                        <td><label for="input_email">Nhập email để tìm các đơn hàng của email đó</label></td>
                        <td><input type="text" id="input_email" v-model="email_to_find_order" @keyup.enter="searchOrderByEmail()"></td>
                        <td><i class="fa-solid fa-magnifying-glass" id="icon_search" @click="searchOrderByEmail()"></i></td>
                    </tr>
                    <tr>
                        <td><label for="input_phonenumber">Hoặc nhập số điện thoại để tìm thông tin đơn hàng</label></td>
                        <td><input type="text" id="input_phonenumber" v-model="phonenumber_to_find_order" @keyup.enter="searchOrderByPhoneNumber()"></td>
                        <td><i class="fa-solid fa-magnifying-glass" id="icon_search" @click="searchOrderByPhoneNumber()"></i></td>
                    </tr>
                </table> 
            </div>

            <h4 class="text-center mt-3">Có {{ order_list.length }} kết quả tìm kiếm</h4>
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
                        <td>{{ order.total }}</td>
                        <td>{{ order.payment }}</td>
                        <td>{{ order.note }}</td>
                        <td>{{ order.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <BackToTop></BackToTop>
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

#table_contain_search_order{
    width: 600px;
    display: block;
    margin: 0 auto;
}

#input_email, #input_phonenumber{
    border-radius: 5px;
}

</style>