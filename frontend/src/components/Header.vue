<script>
import ProductCategoryService from "../services/admin_product_category.service";
export default{
    data(){
        return{
            isLogin: false,
            fullname: '',
            keyword_to_find_product: '',
            category_list: [], //danh sách các loại sản phẩm
        }
    },

    // watch: {
    //     '$route': 'checkUserLogin'
    // },

    created(){
        this.checkUserLogin()
    },

    methods: {
        async checkUserLogin(){
            this.category_list = await ProductCategoryService.getAllProductCategory();
            if(localStorage.getItem("UserLogin")){
                this.isLogin = true;
                const userInfo = JSON.parse(localStorage.getItem("UserLogin"));
                this.fullname = userInfo.fullname;
            }else{
                this.isLogin = false;
            }
        },

        logOut(){
            localStorage.removeItem("UserLogin");
            this.checkUserLogin();
            this.$router.push({ name: 'Home' });
        },

        getNumberOfProductInCart(){
            if(JSON.parse(localStorage.getItem("Cart")) != null){
                return JSON.parse(localStorage.getItem("Cart")).length;
            }else{
                return 0;
            }    
        },

        searchProductByKeyword(){
            this.$router.push({ name: 'SearchProduct', query: { keyword: this.keyword_to_find_product }});
        },

        // Đổi màu chữ có page hiện tại trên navbar
        currentPage(){
            let navLink = document.getElementsByClassName('nav-link');
            for(let navLinkItem of navLink){
                navLinkItem.addEventListener('click', function(){
                    for(let navLinkItem2 of navLink){
                        navLinkItem2.classList.remove("current-page");
                    }
                    navLinkItem.classList.add("current-page");
                })
            }  
        },

        //Set màu chữ cho nav-link trang chủ
        navLinkHomePage(){
            if(this.$router.currentRoute._value.name == "Home"){
                let navLink = document.getElementsByClassName('nav-link');
                for(let navLinkItem of navLink){
                        navLinkItem.classList.remove("current-page");
                    }
                navLink[0].classList.add("current-page");
            }
        }
    },
    mounted(){
        this.currentPage()  //Phương thức này được gọi để sau khi vue hiển thị nội dung ra màn hình sẽ gán các sự kiện cho các nút nhấn ở navbar
        this.navLinkHomePage() //Phương thức này để khi truy cập vào trang chủ trong lần đầu sẽ hiện chữ trang chủ màu trắng
        // this.checkUserLogin() hàm này nếu đặt ở đây thì không thể hiện tên người dùng và nút đăng xuất dc, phải để trong updated
    },

    updated(){ //updated này còn có thể update lại số sản phẩm trong giỏ hàng
        // this.currentPage()
        this.navLinkHomePage() //Có updated để có thể bấm về trang chủ từ breadcrumb vẫn có thể làm cho nav-link Trang chủ màu trắng
        this.checkUserLogin() //không có dòng code này thì sau khi đăng nhập, dù có chuyển qua các trang khác thì phần header (chỗ nút đăng nhập đăng ký cũng ko thể đổi thành tên người dùng và nút đăng xuất), phải reset lại trang
        //code dòng 84 tương đương code từ dòng 13 - 15, dùng để sau khi đăng nhập sẽ hiển thị tên người dùng và nút đăng xuất, có thể dùng 1 trong 2 cách
    }
}

</script>

<template>
<!-- template đã check, nhớ bổ sung trang liên hệ và tin tức     -->
    <header>
    <div id="container_header" class="container">
        <div class="row">
            <div class="col-sm-3">
                <router-link to="/"><img id="logo_header" src="../assets/img/chaistain_logo.png" alt="Logo"></router-link>
            </div>
            <div class="col-sm-9">
                <div class="d-flex align-items-center justify-content-end" style="height: 100%;">
                    <!-- <FormSearchProductHeader></FormSearchProductHeader> -->
                    <div id="form_search_product_header" class="d-flex align-items-center justify-content-around">
                    <input type="text" placeholder="Tìm sản phẩm" id="input_search_header" v-model="keyword_to_find_product" @keyup.enter="searchProductByKeyword()">
                    <button id="search_btn_header" class="btn btn-primary" @click="searchProductByKeyword()">
                        <i id="search_icon" class="fas fa-search"></i>
                    </button>
                </div>
                <div id="icon_user_header">
                    <i id="icon_user" class="fas fa-user"></i>

                    <ul v-if="isLogin == false" id="login_register_header">
                        <li><router-link to="/login" id="login_header">Đăng nhập</router-link></li>
                        <li><router-link to="/register" id="register_header">Đăng ký</router-link></li>
                    </ul>
                    <!-- Nếu đã đăng nhập thì hiện 2 dòng dưới -->
                    <ul v-else id="login_register_header">
                        <li><router-link to="/userprofile" id="login_header">{{ fullname }}</router-link></li>
                        <li><a id="register_header" @click="logOut()">Đăng xuất</a></li>
                    </ul>

                </div>
                <div id="icon_shoping_cart_header">
                    <router-link to="/cart" id="icon_cart_header" class="fas fa-shopping-bag"></router-link>
                    <span id="count_product_header"> {{ getNumberOfProductInCart() }} </span>
                </div>
                <!-- form search ở trên -->
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="cover_nav">
        <nav class="navbar navbar-expand-lg container">
            <button id="btn_toogle" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav w-100 justify-content-center">
                    <li class="nav-item mx-3">
                        <router-link to="/" class="nav-link">TRANG CHỦ</router-link>
                    </li>
                    <li class="nav-item dropdown mx-3">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown">
                            SẢN PHẨM
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link :to = "{name: 'Product', params: {type: 'all'}}" class="dropdown-item" href="#" >Tất cả sản phẩm</router-link></li>
                            <li v-for="category in category_list"><router-link :to = "{name: 'Product', params: {type: `${category.number_type}`}}" class="dropdown-item" href="#" >{{ category.category_name }}</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/about" class="nav-link">GIỚI THIỆU</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/news" class="nav-link">TIN TỨC</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/contact" class="nav-link">LIÊN HỆ</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
</template>

<style scoped>
/* css đã check */
#cover_nav {
    margin-top: 27px;
    background-color: #1097cf;
}

#logo_header {
    width: 230px;
    height: 80px;
    margin: 0 auto;
    display: block;
}

#container_header {
    padding-top: 20px;
    padding-right: 30px;
}

/* css form search */
#form_search_product_header{
    width: 360px;
}

#search_icon{
    color: black;
}

#input_search_header {
    width: 300px;
    display: inline-block;
    border-radius: 10px;
    height: 35px;
    margin-right: 10px;
}

#search_btn_header {
    border-radius: 50%;
    background-color: #1097cf;
}

#icon_shoping_cart_header{
    position: relative;
}

#count_product_header{
    position: absolute;
    top: -8px;
    right: -13px;
    background-color: #1097cf;
    padding: 1px;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 12px;
}


#icon_user_header{
    border-left: 2px solid #5a5353;
    border-right: 2px solid #5a5353;
    margin:0 20px;
    padding: 0 10px 0 10px;
    position: relative;
}

#login_register_header{
    display: none;
    position: absolute;
    border: 1px solid black;
    padding: 10px 30px 10px 15px;
    width: 150px;
    left:-2px;
    top: 24px;
    z-index: 999;
    background-color: #fff;
}

#icon_user:hover{
    color: #1097cf;
    cursor: pointer;
}

#icon_user_header:hover #login_register_header{
    display: block;
}

#login_register_header li{
    list-style: none;
}

#login_register_header a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}

#icon_cart_header{
    color: #1097cf;
}

#btn_toogle{
    margin: 0 auto;
}

.nav-link{
    color: black;
}

.current-page{
    color: white;
}
</style>