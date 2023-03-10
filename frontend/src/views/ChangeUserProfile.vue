<script>
import AuthService from "../services/auth.service";
export default{
    data(){
        return{
            fullname: '',
            phonenumber: '',
            _id: ''
        }
    },

    created(){
        this.getUserInfo()
    },

    methods:{
        getUserInfo(){
            const userInfo = JSON.parse(localStorage.getItem("UserLogin"));
            this.fullname = userInfo.fullname;
            this.phonenumber = userInfo.phonenumber;
            this._id = userInfo._id;
        },

        async changeUserProfile(){
            try{
                const response = await AuthService.updateUserProfile({
                    fullname: this.fullname,
                    phonenumber: this.phonenumber,
                },this._id);

                //Cập nhật lại thông tin lên localStorage
                localStorage.setItem('UserLogin', JSON.stringify(response));
                alert('Cập nhật thông tin người dùng thành công');
                this.getUserInfo();
                location.reload();
            }catch(error){
                alert("Có lỗi xảy ra khi cập nhật thông tin người dùng, vui long thử lại");
            }
        }
    },
}
</script>

<template>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">ĐỔI THÔNG TIN NGƯỜI DÙNG</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Đổi thông tin người dùng</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3" id="navigation_in_change_userprofile">
                <div>
                    <router-link to="/userprofile" style="text-decoration: none; color: #1097cf;">Thông tin tài khoản</router-link>
                </div>
                <div class="mt-3">
                    <a>Đổi thông tin người dùng</a>
                </div>
                <div class="mt-3">
                    <a href="" style="text-decoration: none; color: #1097cf;">Đổi mật khẩu</a>
                </div>
            </div>
            <div class="col-md-8 offset-md-1" id="form_change_userprofile">
                <h3 style="color: #1097cf">ĐỔI THÔNG TIN NGƯỜI DÙNG</h3>
                <form @submit.prevent="changeUserProfile()">
                    <div class="mb-3">
                        <label for="input_fullname" class="form-label">Họ và tên:</label>
                        <input type="text" class="form-control" id="input_fullname" v-model="fullname">
                    </div>
                    <div class="mb-3">
                        <label for="input_phonenumber" class="form-label">Số điện thoại</label>
                        <input type="text" class="form-control" id="input_phonenumber" v-model="phonenumber">
                    </div>
                    <button type="submit" class="btn btn-primary">Cập nhật</button>
                </form>
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

#navigation_in_change_userprofile{
    background-color: #f1f1f1;
    padding: 20px;
}

#form_change_userprofile{
    background-color: #f1f1f1;
    padding: 25px;
}
</style>