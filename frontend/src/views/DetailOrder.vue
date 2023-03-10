<script>
import OrderService from "../services/order.service";
export default{
    data(){
        return{
            detailOrder: {},
            disableButton: false
        } 
    },

    created(){
        this.getDetailOrder()
    },

    methods:{
        async getDetailOrder(){
            try{
                const response = await OrderService.getOrderById(this.$route.params.id);
                this.detailOrder = response;

                if(this.detailOrder.status == "Đã hủy"){
                    this.disableButton = true;
                }
            }catch(error){
                alert("Có lỗi xảy ra");
            }
            // console.log(this.detailOrder._id);
            // console.log(this.detailOrder.fullname);
            // console.log(this.detailOrder.email);
            // console.log(this.detailOrder.phonenumber);
            // console.log(this.detailOrder.address);
            // console.log(this.detailOrder.products[0]);
            // console.log(this.detailOrder.products[1]);
            // console.log(this.detailOrder.note);
            // console.log(this.detailOrder.total);
            // console.log(this.detailOrder.payment);
            // console.log(this.detailOrder.status);
        },

        async cancelOrder(){
            try{
                const response = await OrderService.cancelOrderById({
                    fullname: this.detailOrder.fullname,
                    email: this.detailOrder.email,
                    phonenumber: this.detailOrder.phonenumber,
                    address: this.detailOrder.address,
                    products: this.detailOrder.products,
                    note: this.detailOrder.note,
                    total: this.detailOrder.total,
                    payment: this.detailOrder.payment,
                    status: "Đã hủy",
                }, this.detailOrder._id);

                //Chạy vòng lặp cộng các sản phẩm lên
                alert("Đã hủy đơn hàng");
                this.$router.push({ name: 'UserProfile' });
            }catch(error){
                alert("Có lỗi xảy ra khi hủy đơn hàng");
            }
        }
    }
}
</script>

<template>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">CHI TIẾT CÁC SẢN PHẨM TRONG ĐƠN HÀNG</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li style="font-weight: 600;" class="breadcrumb-item">
                    <router-link to="/userprofile">Thông tin của tôi</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp; Chi tiết đơn hàng</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <div id="id_order">
            Đơn hàng: {{detailOrder._id}}
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in detailOrder.products">
                    <td>{{ product.productname }}</td>
                    <td>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}</td>
                    <td>{{ product.quantity }}</td>
                    <td> {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price*product.quantity)}}</td>
                </tr>
                
                <button @click="cancelOrder()" id="btn_cancel_order">Hủy đơn hàng</button>

                <!-- Button -->
                <!-- <button type="button" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" :disabled="disableButton">
                    Hủy đơn hàng
                </button> -->

                <!-- Modal -->
                <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Hủy đơn hàng</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn hủy đơn hàng này chứ
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không hủy</button>
                            <button @click="cancelOrder()" type="button" class="btn btn-primary">Hủy</button>
                        </div>
                        </div>
                    </div>
                </div> -->

            </tbody>
        </table>
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

#id_order{
    color: #6c757d;
    font-size: 20px;
}

#btn_cancel_order{
    margin-top: 10px;
    background-color: #ffc107;
    padding: 10px;
    border: 0px;
    border-radius: 3px;
}

</style>