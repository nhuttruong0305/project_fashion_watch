<script>
import AdminProductCategoryService from '../services/admin_product_category.service';
import NavAdminPage from '../components/NavAdminPage.vue';
export default {
    data(){
        return{
            product_category_list: [],
        }
    },

    components:{
        NavAdminPage,
    },

    created(){
        this.getAllProductCategory()
    },

    methods:{
        async getAllProductCategory(){
            try{
                this.product_category_list = await AdminProductCategoryService.getAllProductCategory();
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin danh mục sản phẩm");
            }
        }
    },
}
</script>

<template>
<div class="container-fluid" style="background-color: rgb(237, 234, 225);padding: 20px;">
    <div class="row">
        <div class="col-md-3" id="nav_between_admin_page">
            <!-- Thử tách đoạn này làm component riêng -->
            <NavAdminPage></NavAdminPage>
            <!-- Thử tách đoạn này làm component riêng -->
        </div>
        <div class="col-md-8 offset-md-1" id="contain_product_category">
            <h4>Tất cả các loại sản phẩm ở đây</h4>
            <button id="btn_add_product_category"><router-link to="/admin/add_product_category" style="text-decoration: none;color: black;">Thêm loại sản phẩm mới</router-link></button>
            <hr>
        </div>
    </div>

    <div class="row" style="margin-top: 20px;">
        <div class="col-md-4"></div>
        <div class="col-md-8 offset-md-4" style="background-color: white;">
            <table class="table table-success table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Tên loại sản phẩm</th>
                        <th scope="col">Số định danh</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product_category in product_category_list">
                        <td>{{ product_category.category_name }}</td>
                        <td>{{ product_category.number_type}}</td>
                        <td><button><router-link style="color: black; text-decoration: none;" :to="{name: 'UpdateProductCategory', params: {number_type: `${product_category.number_type}`}}">Chỉnh sửa</router-link></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>    
</template>

<style scoped>
#nav_between_admin_page{
    background-color: white;
}

#contain_product_category{
    background-color: white;
    padding: 17px;
}

#btn_add_product_category{
    padding: 10px;
    border-radius: 5px;
    margin-top: 30px;
    background-color: #d1e7dd;
}
</style>