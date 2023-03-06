<script>
import AuthService from '../services/auth.service';

export default{
    data(){
        return{
            email: '',
            password: '',
        }
    },

    methods: {
        async login(){
            try{
                const user = await AuthService.loginAccountUser({
                    email: this.email,
                    password: this.password,
                });

                //Lưu thông tin đăng nhập lên localStorage
                localStorage.setItem('UserLogin', JSON.stringify(user));

                //Thông báo cho người dùng đã đăng nhập thành công
                alert("Đăng nhập thành công, hãy mua hàng đi nào !!!");

                //Chuyển hướng qua trang chủ
                this.$router.push({ name: 'Home' });
            }catch(error){
                alert("Đăng nhập thất bại, hãy thử lại");
            }
        },
    }
}

</script>

<template>
    <!-- template đã check -->
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">ĐĂNG NHẬP</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp; Đăng nhập</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <h3 id="title_login" class="text-center">ĐĂNG NHẬP</h3>

        <div class="row">
            <div class="col-lg"></div>

            <form @submit.prevent="login()" class="col" id="form_login">
                <div id="nav_form_login" class="row border-bottom">
                    <div class="col text-center nav_login_register border-end"><a style="color: black; pointer-events: none;">Đăng nhập</a></div>
                    <div class="col text-center nav_login_register"><router-link to="/register" id="switch_register">Đăng ký</router-link></div>
                </div>

                <div class="my-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" name="email_login" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                </div>
                <div id="emailHelp" class="form-text">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                    <input type="password" name="password_login" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>

                <button type="submit" name="btn_login" class="btn btn-primary d-block w-100">Đăng nhập</button>
                <p id="note_login">Chastain cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
                
            </form>

            <div class="col-lg"></div>
        </div>
    </div>


</template>

<style scoped>

/* css ở đây đã check */

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

#title_login{
    font-weight: 700;
    border-bottom: 2px solid #1097cf;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

#form_login{
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#nav_form_login{
    padding-bottom: 15px;
}

.nav_login_register a{
    text-decoration: none;
}

#switch_register{
    color: #999;
}

#switch_register:hover{
    color: #1097cf;
}

#note_login{
    text-align: center;
    color: black;
    margin-top: 20px;
}
</style>