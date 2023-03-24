<script>
import ProductService from '../services/product.service';
import ProductCategoryService from "../services/admin_product_category.service";
    export default{
        data() {
            return {
                detailproducts: {},
                quantity: 1,
                category_name: '',
            }
        },

        created() { 
            this.getDetailProduct();
        },

        methods: {
            async getDetailProduct() { //nếu chạy xảy ra lỗi thì có thể bỏ try catch giữ lại phần code trong try
                try{
                    const response = await ProductService.getDetailProduct(this.$route.params.id);
                    this.detailproducts = response;
                    //Lấy các loại sản phẩm ra
                    const category_list = await ProductCategoryService.getAllProductCategory();
                    for(let i = 0; i < category_list.length; i++){
                        if(this.detailproducts.type == category_list[i].number_type){
                            this.category_name = category_list[i].category_name;
                        }
                    }
                }catch(e){
                    alert("Có lỗi xảy ra khi lấy thông tin chi tiết sản phẩm");
                }
            },

            limitedQuantityAdded(){
                const cart = JSON.parse(localStorage.getItem("Cart"));
                if(cart == null || cart.length == 0){
                    return this.detailproducts.amountinstock;
                }
                let isExistInCart = false;
                if(cart != null){
                    for(let i = 0; i < cart.length; i++){
                        if(cart[i]._id == this.detailproducts._id){
                            isExistInCart = true;
                            return this.detailproducts.amountinstock-cart[i].quantity;
                        }
                    }
                    if(isExistInCart == false){
                        return this.detailproducts.amountinstock;
                    }
                }  
            },

            addProductInCart(){
                let cart = [];
                if(JSON.parse(localStorage.getItem("Cart")) == null){
                    cart.push({
                        '_id': this.detailproducts._id,
                        'productname': this.detailproducts.productname,
                        'price': this.detailproducts.price,
                        'imageURL': this.detailproducts.imageURL,
                        'quantity': this.quantity,
                        'max_quantity': this.detailproducts.amountinstock,
                    });
                }else{
                    cart = JSON.parse(localStorage.getItem("Cart"));
                    //Chạy vòng lặp kiểm tra xem sản phẩm có tồn tại trong Cart không
                    let state_of_existence_of_product = false;
                    for(let i = 0; i < cart.length; i++){
                        if(cart[i]._id == this.detailproducts._id){
                            state_of_existence_of_product = true;
                            cart[i].quantity +=this.quantity;
                            break;
                        }
                    }
                    //Nếu sản phẩm chưa có trong cart
                    if(state_of_existence_of_product == false){
                        cart.push({
                            '_id': this.detailproducts._id,
                            'productname': this.detailproducts.productname,
                            'price': this.detailproducts.price,
                            'imageURL': this.detailproducts.imageURL,
                            'quantity': this.quantity,
                            'max_quantity': this.detailproducts.amountinstock,
                        });
                    }
                }
                localStorage.setItem("Cart", JSON.stringify(cart));
                alert("Đã thêm sản phẩm vào giỏ hàng");
                this.$router.push({ name: 'Cart' });
            }
        }
    }
</script>

<template>
<!-- template ở đây đã check -->
    <title>Chi tiết sản phẩm</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">CHI TIẾT SẢN PHẨM</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li style="font-weight: 600;" class="breadcrumb-item">
                    <router-link :to="{name: 'Product', params: {type: `${detailproducts.type}`}}">{{ category_name }}</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;{{ detailproducts.productname }}</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-3">
                <img id="img_detail_product"
                    :src="detailproducts.imageURL"
                    alt="">
            </div>
            <div id="contain_detail_product" class="col-md-6 mb-3">
                <h2 id="name_of_detail_product">
                    {{detailproducts.productname}}
                </h2>
                <p id="brand_of_detail_product">
                    {{detailproducts.brand}}
                </p>
                <i class="far fa-clock"></i>
                <hr>
                <p id="price_of_detail_product" class="text-center"><span>
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(detailproducts.price)}}
                    </span></p>
                <p>
                    {{detailproducts.description}}
                </p>

                <p v-if="detailproducts.status == 'Ngừng kinh doanh'" id="stop_business">Ngừng kinh doanh</p>
                <p v-else-if="detailproducts.amountinstock!=0" id="stocking">Còn {{ detailproducts.amountinstock }} sản phẩm &nbsp;&nbsp;<span><i class="fa-solid fa-check-double"></i></span></p>
                <p v-else-if="detailproducts.amountinstock==0" id="out_of_stock">Hết hàng&nbsp;&nbsp;<span><i class="fa-solid fa-xmark"></i></span></p>

                <div class="row mt-5">
                    <div class="col-3">
                        <label for="amount_product_detail_product"
                            style="color: #1097cf; font-size: 16px; font-weight: 600;">Số lượng</label>
                    </div>
                    <div class="col-9">
                        <input type="number" id="amount_product_detail_product" class="col-7 mx-sm-3" min="1" :max="limitedQuantityAdded()"
                            name="quantity" v-model="quantity">
                    </div>
                    <button @click="addProductInCart()" :disabled="limitedQuantityAdded()==0 || detailproducts.status == 'Ngừng kinh doanh'" id="btn_add_into_cart" name="btn_add_into_cart" class="btn">Thêm vào giỏ
                        hàng</button>
                </div>
                <hr>
                <div id="service_detail_product" class="row">
                    <div class="col-md-6 mt-3">
                        <img src="https://bizweb.dktcdn.net/100/438/171/themes/836357/assets/icon_service_product_1.svg?1665539904835"
                            alt="">
                        <span>Giao hàng toàn quốc</span>
                    </div>
                    <div class="col-md-6 mt-3">
                        <img src="https://bizweb.dktcdn.net/100/438/171/themes/836357/assets/icon_service_product_2.svg?1665539904835"
                            alt="">
                        <span>Thanh toán nhiều hình thức</span>
                    </div>
                    <div class="col-md-6 mt-3">
                        <img src="https://bizweb.dktcdn.net/100/438/171/themes/836357/assets/icon_service_product_3.svg?1665539904835"
                            alt="">
                        <span>Cam kết đổi trả hàng miễn phí</span>
                    </div>
                    <div class="col-md-6 mt-3">
                        <img src="https://bizweb.dktcdn.net/100/438/171/themes/836357/assets/icon_service_product_4.svg?1665539904835"
                            alt="">
                        <span>Hàng chính hãng/Bảo hành 1 năm</span>
                    </div>
                </div>
            </div>
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

#img_detail_product {
    width: 80%;
    height: unset;
    display: block;
    margin: 20px auto;
}

#contain_detail_product{
    background-color: #f3f3f3;
    padding: 25px 15px;
}

#brand_of_detail_product{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 15px;
}

#price_of_detail_product{
    background-color: #1097cf;
    width: 200px;
    transform: skew(10deg);
    font-size: 30px;
}

#price_of_detail_product span{
    transform: skew(-10deg);
    display: block;
    font-weight: 600;
    color: #fff;
}
.product_availability_status{
    font-size: 25px;
    font-weight: 600;
    color: #1097cf;
}

#stocking{
    font-size: 25px;
    font-weight: 600;
    color: #1097cf;
}

#out_of_stock{
    font-size: 25px;
    font-weight: 600;
    color: orange;
}

#stop_business{
    font-size: 25px;
    font-weight: 600;
    color: red;
}

#amount_product_detail_product{
    width: 80px;
    border: 1px solid #1097cf;
    border-radius: 4px;
}

#btn_add_into_cart{
    background-color: #1097cf;
    margin-left: 15px;
    margin-top: 25px;
    width: 200px;
    color: #fff;
    font-weight: 600;
    border-radius: 0px;
}

#service_detail_product img{
    margin-right: 10px;
}

</style>