<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import AuthService from '../services/auth.service';
import BackToTop from '../components/BackToTop.vue';
export default{
    components:{
        NavAdminPage,
        BackToTop
    },

    data(){
        return{
            account_list: [],
            input_email: '',
        }
    },

    created(){
        this.getAccountList()
    },

    methods:{
        async getAccountList(){
            try{
                this.account_list = await AuthService.getAccountByEmail("all");
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin tài khoản");
            }
        },
        
        searchEmail(){
            if(this.input_email != ''){
                this.$router.push({ name: 'AdminSearchAccount', query: { email: this.input_email }});
            }
        },

        async deleteUserAccount(email){
            const confirm = window.confirm("Bạn có chắc muốn xóa tài khoản này?");
            if(confirm){
                try{
                    const account_deleted = await AuthService.deleteAccount(email);
                    alert(`Đã có ${account_deleted.deletedCount} tài khoản được xóa thành công`);
                    const UserLogin = JSON.parse(localStorage.getItem("UserLogin"));
                    if(UserLogin.email == email){
                        localStorage.removeItem("UserLogin");
                    }
                    this.getAccountList();                    
                }catch(error){
                    alert("Có lỗi xảy ra khi xóa tài khoản, vui lòng thử lại sau");
                }
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
                <h4>Thông tin tất cả các tài khoản người dùng có ở đây</h4>
                <hr>
            </div>
        </div>
        <div class="row" style="background-color: white; margin-top: 20px;">
            <div class="mt-3 text-center">
                <label style="margin-right: 10px;" for="input_email">Nhập email để tìm tài khoản muốn tìm</label>
                <input type="email" id="input_email" v-model="input_email" @keyup.enter="searchEmail()">
                <i class="fa-solid fa-magnifying-glass" id="icon_search" @click="searchEmail()"></i>
            </div>

            <table style="width: 70%; margin: 0 auto;" class="table table-success table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Ngày tạo</th>  
                        <th scope="col"></th>  
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="account in account_list">
                        <td>{{ account.fullname }}</td>
                        <td>{{ account.email }}</td>
                        <td>{{ account.phonenumber }}</td>
                        <td>{{ account.createdAt }}</td>
                        <td><i class="fa-solid fa-trash" @click="deleteUserAccount(account.email)"></i></td>
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

.fa-trash{
    color: red;
    text-align: center;
    display: block;
    cursor: pointer;
}
</style>