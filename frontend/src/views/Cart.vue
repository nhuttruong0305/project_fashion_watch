<script>
export default{
    data(){
        return{
            list_of_products_in_cart: [],
        }
    },

    methods:{

    }
}   
    
</script>

<template>
<!-- template ở đây đã check -->
    <div id="nav_to_home"> <router-link to="/" style="text-decoration: none; color:black;">Trang chủ</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;<span>Giỏ hàng</span></div>
    <div id="container_cart" class="container">
        <div class="row" id="cart_head">
            <div class="d-flex">
                <div class="cart_head_item" style="width: 18%">Ảnh sản phẩm</div>
                <div class="cart_head_item" style="width: 32%">Tên sản phẩm</div>
                <div class="cart_head_item" style="width: 17%">Đơn giá</div>
                <div class="cart_head_item" style="width: 14%">Số lượng</div>
                <div class="cart_head_item" style="width: 14%">Thành tiền</div>
                <div style="margin-left: 20px;text-align: center;">Xóa</div>
            </div>
        </div>
        <div class="row" id="cart_body">
            <!-- Mỗi item trong vòng lặp v-for -->
            <div class="d-flex cart_body_container">
                <div class="cart_body_item" style="width: 18%; padding: 40px 0;"><img class="d-block" style="width: 50%; margin: 0 auto;" src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt=""></div>
                <div class="cart_body_item" style="width: 32%">Black Link</div>
                <div class="cart_body_item" style="width: 17%">3.200.000 đ</div>
                <div class="cart_body_item" style="width: 14%">2</div>
                <div class="cart_body_item" style="width: 14%">6.400.000 đ</div>
                <div style="margin-left: 25px;text-align: center; line-height: 170px;"><i class="fa-solid fa-trash"></i></div>
            </div>
            <!-- Mỗi item trong vòng lặp v-for -->
            <div class="d-flex cart_body_container">
                <div class="cart_body_item" style="width: 18%; padding: 40px 0;"><img class="d-block" style="width: 50%; margin: 0 auto;" src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt=""></div>
                <div class="cart_body_item" style="width: 32%">Black Link</div>
                <div class="cart_body_item" style="width: 17%">3.200.000 đ</div>
                <div class="cart_body_item" style="width: 14%">2</div>
                <div class="cart_body_item" style="width: 14%">6.400.000 đ</div>
                <div style="margin-left: 25px;text-align: center; line-height: 170px;"><i class="fa-solid fa-trash"></i></div>
            </div>
        </div>

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

#cart_head {
    border: 1px ridge rgb(74, 74, 74);
}

.cart_head_item{
    border-right: 1px ridge rgb(74, 74, 74);
    text-align: center;
}

#cart_body{
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
}

</style>