<script>
import AuthService from "../services/auth.service";
export default{
    data(){
        return{
            _id: '',
            current_password: '',
            new_password: '',
        }
    },

    created(){
        this.getUserInfo()
    },

    methods:{
        getUserInfo(){
            const userInfo = JSON.parse(localStorage.getItem("UserLogin"));
            this._id = userInfo._id;
        },

        async changePassword(){
            const confirm = window.confirm("Bạn có chắc muốn đổi mật khẩu?");
            if(confirm){
                try{
                    const response = await AuthService.updatePassword({
                        current_password: this.current_password,
                        new_password: this.new_password
                    }, this._id);
                    alert('Cập nhật mật khẩu thành công');
                }catch(error){
                    alert("Mật khẩu hiện tại bạn nhập không đúng, vui lòng thử lại");
                }
            }
        }
    },
}    
</script>
<template>
    <title>Đổi mật khẩu</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">ĐỔI MẬT KHẨU</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Đổi mật khẩu</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div class="row">
            <div id="navigation_in_changepassword" class="col-md-3">
                <div>
                    <router-link to="/userprofile" style="text-decoration: none; color: #1097cf;">Thông tin tài khoản</router-link>
                </div>
                <div class="mt-3">
                    <router-link to="/changeuserprofile" style="text-decoration: none; color: #1097cf;">Đổi thông tin người dùng</router-link>
                </div>
                <div class="mt-3">
                    <a>Đổi mật khẩu</a>
                </div>
            </div>

            <div class="col-md-8 offset-md-1" id="form_change_userprofile">
                <h3 style="color: #1097cf">ĐỔI MẬT KHẨU</h3>
                <form @submit.prevent="changePassword()">
                    <div class="mb-3">
                        <label for="input_current_password" class="form-label">Mật khẩu hiện tại:</label>
                        <input type="password" class="form-control" id="input_current_password" v-model="current_password" required>
                    </div>
                    <div class="mb-3">
                        <label for="input_newpassword" class="form-label">Mật khẩu mới:</label>
                        <input type="password" class="form-control" id="input_newpassword" v-model="new_password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Đổi mật khẩu</button>
                </form>
            </div>    
        </div>
    </div>
</template>

<style soped>
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

#navigation_in_changepassword{
    background-color: #f1f1f1;
    padding: 20px;
}

</style>