<script>
import AuthService from "../services/auth.service";

export default{
    data(){
        return{
            fullname: '',
            email: '',
            phonenumber: '',
            password: ''
        } 
    },
    methods:{
        async register(){    
            try{
                const user = await AuthService.registerAccountUser({
                    fullname: this.fullname, 
                    email: this.email,
                    phonenumber: this.phonenumber,
                    password: this.password,
                });
                console.log(user);
                alert("Đăng ký tài khoản thành công");
                this.$router.push({ name: 'Login' });
            }catch(error){
                alert("Email đã được đăng ký, vui lòng sử dụng email khác");
            }
        }
    }
}
    
</script>

<template>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">ĐĂNG KÝ TÀI KHOẢN</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp; Đăng ký tài khoản</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <h3 id="title_register" class="text-center">ĐĂNG KÝ TÀI KHOẢN</h3>
        <div class="row">
            <div class="col-lg"></div>
            <form @submit.prevent="register()" class="col" id="form_register" style="padding: 20px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"> 
                <div id="nav_form_login" class="row border-bottom">
                    <div class="col text-center nav_login_register border-end"><router-link to="/login" id="switch_login">Đăng nhập</router-link></div> 
                    <div class="col text-center nav_login_register"><a style="color: black; pointer-events: none;">Đăng ký</a></div>
                </div>

                <div class="my-3">
                    <label for="fullname_register" class="form-label">Họ tên</label>
                    <input type="text" name="fullname_register" class="form-control" id="fullname_register" v-model="fullname">
                </div>

                <div class="mb-3">
                    <label for="email_register" class="form-label">Email</label>
                    <input type="email" name="email_register" class="form-control" id="email_register" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                </div>
                <div class="mb-3">
                    <label for="phone_number_register" class="form-label">Số điện thoại</label>
                    <input type="text" name="phone_number_register" class="form-control" id="phone_number_register" v-model="phonenumber">
                </div>
                <div class="mb-3">
                    <label for="password_register" class="form-label">Mật khẩu</label>
                    <input type="password" name="password_register" class="form-control" id="password_register" v-model="password">
                </div>
                <!-- <div class="mb-3">
                    <label for="password_repeat_register" class="form-label">Nhập lại mật khẩu</label>
                    <input type="password" name="password_repeat_register" class="form-control" id="password_repeat_register">
                </div> -->
                <button type="submit" name="btn_register" class="btn btn-primary d-block w-100">Tạo tài khoản</button>
 

            </form>
            <div class="col-lg"></div>
        </div>
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

#title_register{
    font-weight: 700;
    border-bottom: 2px solid #1097cf;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

#nav_form_login{
    padding-bottom: 15px;
}

.nav_login_register a{
    text-decoration: none;
}

#switch_login:hover{
    color: #1097cf;
}

#switch_login{
    color: #999;
}

</style>