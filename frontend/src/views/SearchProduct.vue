<script>
import ProductService from '../services/product.service';
export default{
    data(){
        return{
            product_list: []
        }
    },

    watch:{
        '$route': 'getProductListByKeyword',
    },

    created(){
        this.getProductListByKeyword()
    },

    methods:{
        async getProductListByKeyword(){
            try{
                const response = await ProductService.getProductByKeyword(this.$route.query.keyword);
                this.product_list = response;
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin sản phẩm");
            }
        }
    }
}
</script>
<template>
    <title>Tìm kiếm</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">KẾT QUẢ TÌM KIẾM</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Kết quả tìm kiếm</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <h3>Tìm thấy {{ product_list.length }} kết quả cho "{{ $route.query.keyword }}"</h3>
        <div class="row mt-4">
            <!-- Mỗi thẻ div là 1 sản phẩm -->
            <div class="col-md-3 col-6" v-for="product in product_list">
                <router-link :to="{name: 'DetailProduct', params: {id: `${product._id}`}}" class="d-block">
                    <img class="img_of_product" :src="product.imageURL" alt="">
                </router-link>
                <router-link :to="{name: 'DetailProduct', params: {id: `${product._id}`}}" class="name_of_product">{{product.productname}}</router-link>
                <p class="price_of_product">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#breadcrumb_background{
    background-image: url("../assets/img/breadcrum_bg1.webp");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 203px;
    padding: 60px 0 80px 0;
    margin-bottom: 30px;
}

#title_breadcrumb{
    font-weight: 800;
    color: #fff;
    font-size: 25px;
}

.breadcrumb-item + .breadcrumb-item::before{
    content: ">" !important;
    color: #fff;
 }

#breadcrumb_background a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}

#breadcrumb_background a:hover{
    color: #1097cf;
}
.img_of_product{
    display: block;
    width: 80%;
    margin: 0 auto;
}   

.name_of_product{
    display: block;
    text-decoration: none;
    text-align: center;
    color: black;
    font-size: 22px;
}

.price_of_product{
    text-align: center;
    font-size: 24px;
    color: #1097cf;
}
</style>