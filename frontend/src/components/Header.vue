<script>
export default{
    // methods: {
    //     reloadPage(){
    //         setTimeout(() => {
    //             window.location.reload()},10
    //         );  
    //     },
    // }
}

</script>

<template>
    <header>
    <div id="container_header" class="container">
        <div class="row">
            <div class="col-sm-3">
                <img id="logo_header" src="../assets/img/chaistain_logo.png" alt="Logo">
            </div>
            <div class="col-sm-9">
                <div class="d-flex align-items-center justify-content-end" style="height: 100%;">
                    <!-- <FormSearchProductHeader></FormSearchProductHeader> -->
                    <div id="form_search_product_header" class="d-flex align-items-center justify-content-around">
                    <input type="text" placeholder="Tìm sản phẩm" name="" id="input_search_header">
                    <button id="search_btn_header" class="btn btn-primary">
                        <i id="search_icon" class="fas fa-search"></i>
                    </button>
                </div>
                <div id="icon_user_header">
                    <i id="icon_user" class="fas fa-user"></i>
                    <ul id="login_register_header">
                        <li><a id="login_header">Đăng nhập</a></li>
                        <li><router-link to="/register" id="register_header">Đăng ký</router-link></li>
                    </ul>
                </div>
                <div id="icon_shoping_cart_header">
                    <i class="fas fa-shopping-bag"></i>
                    <span id="count_product_header"> 0 </span>
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
                        <router-link to="/" class="nav-link active" aria-current="page">TRANG CHỦ</router-link>
                    </li>
                    <li class="nav-item dropdown mx-3">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown">
                            SẢN PHẨM
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <!-- <li><router-link :to = "{name: 'Product', params: {type: 'all'}}" @click="reloadPage()" class="dropdown-item" href="#" >Tất cả sản phẩm</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 1}}" @click="reloadPage()" class="dropdown-item" href="#">Đồng hồ nam</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 2}}" @click="reloadPage()" class="dropdown-item" href="#">Đồng hồ nữ</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 3}}" @click="reloadPage()" class="dropdown-item" href="#">Phụ kiện</router-link></li> -->
                        
                            <li><router-link :to = "{name: 'Product', params: {type: 'all'}}" class="dropdown-item" href="#" >Tất cả sản phẩm</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 1}}" class="dropdown-item" href="#">Đồng hồ nam</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 2}}" class="dropdown-item" href="#">Đồng hồ nữ</router-link></li>
                            <li><router-link :to = "{name: 'Product', params: {type: 3}}" class="dropdown-item" href="#">Phụ kiện</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/about" class="nav-link">GIỚI THIỆU</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">TIN TỨC</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">LIÊN HỆ</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
</template>

<style scoped>
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

#icon_user_header{
    margin:0 20px;
    padding: 0 10px 0 10px;
    border-left: 2px solid black;
    border-right: 2px solid black;
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
    padding: 0 15px;
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
}
</style>