<script>
import AuthService from "../services/auth.service";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    fullname_register: yup.string().required("Bạn chưa nhập họ và tên"),
    email_register: yup.string().required("Bạn chưa nhập email").email("Email chưa hợp lệ"),
    phone_number_register: yup.string().min(10, "Số điện thoại phải có 10 số").max(10, "Số điện thoại có tối đa 10 số"),
    password_register: yup.string().required("Bạn chưa nhập mật khẩu").min(5, "Mật khẩu tối thiểu 5 kí tự"),
});

export default{
    data(){
        return{
            schema,
            fullname: '',
            email: '',
            phonenumber: '',
            password: '',
        } 
    },

    components:{
        Field, Form, ErrorMessage,
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
                alert("Đăng ký tài khoản thành công");
                this.$router.push({ name: 'Login' });
            }catch(error){
                alert("Email đã được đăng ký, vui lòng sử dụng email khác");
            }
        },

        inputOnlyNumber(event){
            if(event.keyCode<48 || event.keyCode>57){
                event.preventDefault();
            }else{
                return true;
            }
        }
    }
}
    
</script>

<template>
<!-- template đã check     -->
<title>Đăng ký tài khoản</title>
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
            <Form :validation-schema="schema" @submit="register()" class="col" style="padding: 20px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"> 
                <div id="nav_form_login" class="row border-bottom">
                    <div class="col text-center nav_login_register border-end"><router-link to="/login" id="switch_login">Đăng nhập</router-link></div> 
                    <div class="col text-center nav_login_register"><a style="color: black; pointer-events: none;">Đăng ký</a></div>
                </div>

                <div class="my-3">
                    <label for="fullname_register" class="form-label">Họ tên</label>
                    <Field type="text" name="fullname_register" class="form-control" id="fullname_register" v-model="fullname"/>
                    <ErrorMessage style="color:red;" name="fullname_register" />
                </div>

                <div class="mb-3">
                    <label for="email_register" class="form-label">Email</label>
                    <Field type="email" name="email_register" class="form-control" id="email_register" aria-describedby="emailHelp" v-model="email"/>
                    <div id="emailHelp" class="form-text">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                    <ErrorMessage style="color: red" name="email_register" />     
                </div>
                
                <div class="mb-3">
                    <label for="phone_number_register" class="form-label">Số điện thoại</label>
                    <Field type="text" name="phone_number_register" class="form-control" id="phone_number_register" v-model="phonenumber" @keypress="inputOnlyNumber($event)"/>
                    <ErrorMessage style="color:red" name="phone_number_register" />
                </div>
                
                <div class="mb-3">
                    <label for="password_register" class="form-label">Mật khẩu</label>
                    <Field type="password" name="password_register" class="form-control" id="password_register" v-model="password" />
                    <ErrorMessage style="color: red" name="password_register" />
                </div>
                
                <!-- <div class="mb-3">
                    <label for="password_repeat_register" class="form-label">Nhập lại mật khẩu</label>
                    <input type="password" name="password_repeat_register" class="form-control" id="password_repeat_register">
                </div> -->
                <button type="submit" name="btn_register" class="btn btn-primary d-block w-100">Tạo tài khoản</button> 
            </Form>
            <div class="col-lg"></div>
        </div>
    </div>
</template>

<style scoped>
/* css đã check */
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