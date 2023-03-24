<script>
import ProductService from '../services/product.service';
import ProductCategoryService from '../services/admin_product_category.service';
export default {

    data() {
        return {
            products: [],
            category_name: '',
        }
    },

    watch: {
        '$route': 'getProductByType',
    },

    created() { //đổi lại mounted thử
        this.getProductByType()
    },

    methods: {
        async getProductByType() {
            const response = await ProductService.getProductByType(this.$route.params.type);
            this.products = response;
            //Lấy các loại sản phẩm trong DB
            const category_list = await ProductCategoryService.getAllProductCategory();
            let isAll = true;
            for(let i = 0; i < category_list.length; i++){
                if(this.$route.params.type == category_list[i].number_type){
                    this.category_name = category_list[i].category_name;
                    isAll = false;
                    break;
                }
            }
            if(isAll == true){
                this.category_name="Tất cả sản phẩm";
            }
        },
    }


    // async created(){
    //     try{
    //         const response = await ProductService.getProductByType(this.$route.params.type);
    //         this.products = response;
    //     }catch(error){
    //         console.log("hello");
    //     }
    // }
}

</script>

<template>
<!-- template đã check     -->
<title>Sản phẩm</title>
    <div id="breadcrumb_background">
    <p id="title_breadcrumb" class="text-center">{{ category_name }}</p>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
            <li class="breadcrumb-item active" aria-current="page"
                style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;{{ category_name }}</li>
        </ol>
    </nav>
</div>
<div class="container mt-3">
    <h3 class="text-center" id="title_product"><span>{{ category_name }}</span></h3>
    <div id="list_product" class="row mt-5">

        <template v-for="product in products">
            <div class="col-md-3 col-6 list_item_product" data-aos="flip-left">
                <router-link :to="{name: 'DetailProduct', params: {id: `${product._id}`}}"  class="d-block">
                    <img :src="product.imageURL"
                        alt="">
                </router-link>
                <router-link :to="{name: 'DetailProduct', params: {id: `${product._id}`}}" class="d-block text-center mt-3">{{ product.productname }}</router-link>
                <p class="text-center">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}}</p>
            </div>
        </template>
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

#title_product {
    font-size: 24px;
    font-weight: 600;
    margin: 15px 0;
}

.list_item_product img {
    width: 80%;
    margin: 0 auto;
    display: block;
}

.list_item_product a {
    text-decoration: none;
    color: black;
}

.list_item_product a:hover {
    color: #1097cf;
}

.list_item_product p {
    color: #1097cf;
    font-size: 20px;
    font-weight: 600;
}
</style>