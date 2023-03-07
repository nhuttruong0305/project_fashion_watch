<script>
export default{
    data(){
        return{
            list_of_products_in_cart: [],
        }
    },

    created() {
        this.getProductInCart();
    },

    methods:{
        getProductInCart(){
            this.list_of_products_in_cart = JSON.parse(localStorage.getItem("Cart"));
        },

        removeProductInCart(_id){
            let cart = JSON.parse(localStorage.getItem("Cart"));
            for(let i = 0; i < cart.length; i++){
                if(cart[i]._id == _id){
                    cart.splice(i, 1);
                }
            }
            //Set lại Cart lên localStorage
            localStorage.setItem("Cart", JSON.stringify(cart));
            this.getProductInCart();
        }
    }
}   
    
</script>

<template>
<!-- template ở đây đã check -->
    <div id="nav_to_home"> <router-link to="/" style="text-decoration: none; color:black;">Trang chủ</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;<span>Giỏ hàng</span></div>
    <div id="container_cart" class="container">
        <!-- <div class="row" id="cart_head">
            <div class="d-flex">
                <div class="cart_head_item" style="width: 18%">Ảnh sản phẩm</div>
                <div class="cart_head_item" style="width: 32%">Tên sản phẩm</div>
                <div class="cart_head_item" style="width: 17%">Đơn giá</div>
                <div class="cart_head_item" style="width: 14%">Số lượng</div>
                <div class="cart_head_item" style="width: 14%">Thành tiền</div>
                <div style="margin-left: 20px;text-align: center;">Xóa</div>
            </div>
        </div> -->
        <!-- <div class="row" id="cart_body"> -->
            <!-- Mỗi item trong vòng lặp v-for -->
            <!-- <div v-for="product in list_of_products_in_cart" :key="product._id" class="d-flex cart_body_container">
                <div class="cart_body_item" style="width: 18%; padding: 40px 0;"><img class="d-block" style="width: 50%; margin: 0 auto;" :src="product.imageURL" alt=""></div>
                <div class="cart_body_item" style="width: 32%">{{ product.productname }}</div>
                <div class="cart_body_item" style="width: 17%">{{ product.price }}</div>
                <div class="cart_body_item" style="width: 14%">{{ product.quantity }}</div>
                <div class="cart_body_item" style="width: 14%">{{ product.price*product.quantity }}</div>
                <div style="margin-left: 25px;text-align: center; line-height: 170px;"><i style="cursor: pointer;" @click="removeProductInCart(product._id)" class="fa-solid fa-trash"></i></div>
            </div> -->

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Ảnh sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

        <!-- </div> -->
    </div>
</template>

<style scoped>
/* css ở đây đã check */
#nav_to_home{
    text-align: center;
    margin-top: 50px;
}

#nav_to_home span{
    color: #1097cf;
}

#container_cart{
    padding: 50px 100px 0 100px;
}



/* #cart_head {
    border: 1px ridge rgb(74, 74, 74);
}

.cart_head_item{
    border-right: 1px ridge rgb(74, 74, 74);
    text-align: center;
} */

/* #cart_body{
    border-right: 1px ridge rgb(74, 74, 74);
    border-left: 1px ridge rgb(74, 74, 74);
}

.cart_body_item{
    text-align: center;
    line-height: 170px;
    border-right: 1px ridge rgb(74,74,74);
}

.cart_body_container{
    border-bottom: 1px ridge rgb(74, 74, 74);
} */

</style>