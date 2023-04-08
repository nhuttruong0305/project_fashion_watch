<script>
import ProductCategoryService from '../services/admin_product_category.service';
import NavAdminPage from '../components/NavAdminPage.vue';
import BackToTop from '../components/BackToTop.vue';
export default{
    data(){
        return{
            update_product_category: ''
        }
    },

    components:{
        NavAdminPage,
        BackToTop
    },

    created(){
        this.getDetailCategory()
    },

    methods:{
        async getDetailCategory(){
            try{
                const response = await ProductCategoryService.getDetailCategory(this.$route.params.number_type);
                this.update_product_category = response.category_name;
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin chi tiết loại sản phẩm");
            }
        },

        async updateCategoryName(){
            const confirm = window.confirm("Bạn có chắc muốn cập nhật tên loại sản phẩm");
            if(confirm){
                try{
                    const updateCategory = await ProductCategoryService.updateProductCategory({
                        category_name: this.update_product_category,
                    },this.$route.params.number_type);
                    
                    alert("Cập nhật thành công");
                }catch(error){
                    alert("Tên loại sản phẩm này đã tồn tại, vui lòng chọn tên khác");
                }
            }
        }
    }
}
</script>

<template>
    <div class="container-fluid" style="background-color: rgb(237, 234, 225);padding: 20px;">
        <div class="row">
            <div class="col-md-3" id="nav_between_admin_page">
                <!-- Thử tách đoạn này làm component riêng -->
                <!-- <h4 class="mt-4">Chastain - TRANG QUẢN TRỊ</h4>
                <hr>
                <ul>
                    <li>Quản lý loại sản phẩm</li>
                    <li>Quản lý sản phẩm</li>
                    <li>Quản lý đơn hàng</li>
                </ul> -->
                <NavAdminPage></NavAdminPage>
                <!-- Thử tách đoạn này làm component riêng -->
            </div>
            <div class="col-md-8 offset-md-1" id="update_product_category">
                <h4>Cập nhật tên loại sản phẩm</h4>
                <form @submit.prevent="updateCategoryName()">
                    <div>
                        <label for="input_category_name" class="form-label">Tên loại sản phẩm hiện tại  </label>
                        <input type="text" class="form-control" id="input_category_name" v-model="update_product_category">
                    </div>
                    <button type="submit" id="btn_update_category">Cập nhật</button>
                </form>
            </div>
        </div>
    </div>  
    <BackToTop></BackToTop>
</template>

<style scoped>
#nav_between_admin_page{
    background-color: white;
}

#update_product_category{
    background-color: white;
    padding: 17px;
}

#input_category_name{
    width: 500px;
}

#btn_update_category{
    margin-top: 10px;
    background-color: #d1e7dd;
    border-radius: 5px;
}
</style>