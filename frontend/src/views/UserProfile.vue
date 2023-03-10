<script>

export default{
    // data(){
    //     return{
    //         fullname: '',
    //         email: '',
    //         phonenumber: '',
    //         password: ''
    //     } 
    // },

    // methods:{

    // }
}
</script>

<template>
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
                    <a href="" style="text-decoration: none; color: #1097cf;">Đổi thông tin người dùng</a>
                </div>
                <div class="mt-3">
                    <a href="" style="text-decoration: none; color: #1097cf;">Đổi mật khẩu</a>
                </div>
            </div>
            <div class="col-md-8 offset-md-1" id="info_user">
                <h3 style="color: #1097cf">THÔNG TIN</h3>
                <div class="row mt-3">
                    <div class="col-md-3">Họ và tên:</div>
                    <div class="col-md-9">Lê Nhựt Trường</div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3">Email:</div>
                    <div class="col-md-9">truong@gmail.com</div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3">Số điện thoại</div>
                    <div class="col-md-9">0966899548</div>
                </div>
            </div>
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

#navigation_in_userprofile{
    background-color: #f1f1f1;
    padding: 20px;
}

#info_user{
    background-color: #f1f1f1;
    padding: 25px;
}

</style>