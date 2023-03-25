<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import ProductService from '../services/product.service';
import OrderService from '../services/order.service';
export default{
    components:{
        NavAdminPage,
    },

    data(){
        return{
            product_list: [], //danh sách các sản phẩm có trong database
            keyword_to_find_product: '',
            all_order: [], //mảng tất cả các đơn hàng
            array_of_products_sold: [],
        }
    },

    created(){
        this.getAllProduct()
    },

    methods:{
        async getAllProduct(){
            try{
                //Lấy tất cả sản phẩm hiện có trong DB
                const response = await ProductService.getProductByType("all");
                this.product_list = response;

                //Tạo mảng mới, mảng các object chứa 2 thuộc tính: _id của sản phẩm và số lượng đã bán
                this.product_list.forEach((value) => {
                    this.array_of_products_sold.push({
                        _id: value._id,
                        quantity_sold: 0
                    })
                });
                //Lấy tất cả đơn hàng để chạy vòng lặp lấy ra số lượng sản phẩm đã bán
                this.all_order = await OrderService.getAllOrderInDB();
                for(let i = 0; i < this.all_order.length; i++){
                    if(this.all_order[i].status == "Đã nhận hàng"){
                        this.all_order[i].products.forEach((value) => {
                            for(let j = 0; j < this.array_of_products_sold.length; j++){
                                if(value._id == this.array_of_products_sold[j]._id){
                                    this.array_of_products_sold[j].quantity_sold+=value.quantity;
                                }
                            }
                        },)
                    }
                }
            }catch(error){
                alert("Đã xảy ra lỗi khi lấy thông tin sản phẩm");
            }
        },

        getQuantitySold(_id){
            for(let i = 0; i< this.array_of_products_sold.length; i++){
                if(this.array_of_products_sold[i]._id == _id){
                    return this.array_of_products_sold[i].quantity_sold;
                }
            }
        },

        searchProductByKeyword(){
            this.$router.push({ name: 'AdminSearchProduct', query: { keyword: this.keyword_to_find_product }});
        }

    }

}
</script>
<template>
    <div class="container-fluid" style="background-color: rgb(237, 234, 225);padding: 20px;">
        <div class="row">
            <div class="col-md-3" id="nav_between_admin_page">
                <NavAdminPage></NavAdminPage>
            </div>
            <div class="col-md-8 offset-md-1" style="background-color: white;padding: 17px;">
                <h4>Tất cả các thông tin sản phẩm ở đây</h4>
                <button id="btn_add_product"><router-link to="/admin/add_product" style="text-decoration: none;color: black;">Thêm sản phẩm mới</router-link></button>
                <hr>
            </div>
        </div>
        <div class="row" style="background-color: white; margin-top: 20px;">
            <div class="mt-3 text-center">
                <label style="margin-right: 10px;" for="input_product_name">Nhập tên sản phẩm muốn tìm</label>
                <input type="text" id="input_product_name" v-model="keyword_to_find_product" @keyup.enter="searchProductByKeyword()">
                <i class="fa-solid fa-magnifying-glass" id="icon_search" @click="searchProductByKeyword()"></i>
            </div>
            <table class="table table-success table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <!-- <th scope="col">ID</th> -->
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Loại</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Màu</th>
                        <th scope="col">Thương hiệu</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Xuất xứ</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Số lượng trong kho</th>
                        <th scope="col">Số lượng đã bán</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in product_list">
                        <!-- <td>{{ product._id }}</td> -->
                        <td> <router-link :to="{name: 'UpdateProduct', params: {id: `${product._id}`}}">{{ product.productname }}</router-link></td>
                        <td>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}</td>
                        <td>{{ product.type }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{product.color}}</td>
                        <td>{{ product.brand }}</td>
                        <td><img style="width: 100px" :src="product.imageURL" alt=""></td>
                        <td>{{ product.origin }}</td>
                        <td>{{ product.status }}</td>
                        <td>{{ product.amountinstock }}</td>
                        <td>{{ getQuantitySold(product._id) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
#nav_between_admin_page{
    background-color: white;
}

#btn_add_product{
    padding: 10px;
    border-radius: 5px;
    margin-top: 30px;
    background-color: #d1e7dd;
}

#icon_search{
    background-color: #d1e7dd;
    padding: 10px;
    border-radius: 50%;
    margin-left:5px;
}
</style>