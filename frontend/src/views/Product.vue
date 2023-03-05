<script>
import ProductService from '../services/product.service';

export default {

    data() {
        return {
            products: [],
            type_of_product: '',
        }
    },

    // watch: {
    //     type_of_product(newValue, oldValue){
    //         this.getProductByType();
    //     }
    // },

    created() {
        this.getProductByType()
    },

    methods: {
        async getProductByType() {
            const response = await ProductService.getProductByType(this.$route.params.type);
            this.products = response; 
        },

        getTypeProduct(type){
            if(type == "all"){
                return "Tất cả sản phẩm";
            }else if(type == 1){
                return "Đồng hồ nam";
            }else if(type ==2){
                return "Đồng hồ nữ";
            }else{
                return "Phụ kiện"
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
    <div id="breadcrumb_background">
    <p id="title_breadcrumb" class="text-center">{{ getTypeProduct($route.params.type) }}</p>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
            <li class="breadcrumb-item active" aria-current="page"
                style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;{{ getTypeProduct($route.params.type) }}</li>
        </ol>
    </nav>
</div>
<div class="container mt-3">
    <h3 class="text-center" id="title_product"><span>{{ getTypeProduct($route.params.type) }}</span></h3>
    <div id="list_product" class="row mt-5">

        <template v-for="product in products">
            <div class="col-md-3 col-6 list_item_product">
                <router-link :to = "{name: 'DetailProduct', params: {id: `${product._id}`}}"  class="d-block">
                    <img :src="product.imageURL"
                        alt="">
                </router-link>
                <router-link :to = "{name: 'DetailProduct', params: {id: `${product._id}`}}" class="d-block text-center mt-3">{{ product.productname }}</router-link>
                <p class="text-center">{{ product.price }}</p>
            </div>
        </template>
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