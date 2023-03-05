<script>
import FormSearchProductHeader from "../components/FormSearchProductHeader.vue";
export default {
    components: {
        FormSearchProductHeader,
    }
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
                    <FormSearchProductHeader></FormSearchProductHeader>
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
</style>