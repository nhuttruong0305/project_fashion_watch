<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import ProductService from '../services/product.service';
export default{
    components:{
        NavAdminPage,
    },

    data(){
        return{
            product_list: [],
        }
    },

    created(){
        this.getProductListByKeyword()
    },  

    methods:{
        async getProductListByKeyword(){
            try{
                this.product_list = await ProductService.getProductByKeyword(this.$route.query.keyword);
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin sản phẩm");
            }
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
                <h4>Thông tin các sản phẩm được tìm thấy</h4>
                <button id="btn_add_product"><router-link to="/admin/add_product" style="text-decoration: none;color: black;">Thêm sản phẩm mới</router-link></button>
                <hr>
            </div>
        </div>

        <div class="row" style="background-color: white; margin-top: 20px;">
            <h3 class="text-center mt-4">Có {{ 3 }} kết quả được tìm thấy</h3>
            <table class="table table-success table-striped mt-3">
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in product_list">
                        <td> <router-link :to="{name: 'UpdateProduct', params: {id: `${product._id}`}}">{{ product.productname }}</router-link></td>
                        <td>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}}</td>
                        <td>{{ product.type }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.color }}</td>
                        <td>{{ product.brand }}</td>
                        <td><img style="width: 100px" :src="product.imageURL" alt=""></td>
                        <td>{{ product.origin }}</td>
                        <td>{{ product.status }}</td>
                        <td>{{ product.amountinstock }}</td>
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
</style>