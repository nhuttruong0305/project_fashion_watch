<script>
import AdminProductCategoryService from '../services/admin_product_category.service';
import NavAdminPage from '../components/NavAdminPage.vue';
import BackToTop from '../components/BackToTop.vue';
export default{
    data(){
        return{
            product_category_name_list: [],//lấy ra danh sách các loại để so sánh có trùng tên khi thêm không
            category_name: '',
            number_type: 0,
        }
    },

    components:{
        NavAdminPage,
        BackToTop
    },

    created(){
        this.getAllProductCategory()
    },

    methods:{
        async getAllProductCategory(){
            try{
                this.product_category_name_list = await AdminProductCategoryService.getAllProductCategory();
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin danh mục sản phẩm");
            }
        },

        async addProductCategory(){
            let isValidProductCategory = true;
            for(let i=0; i<this.product_category_name_list.length; i++){
                if(this.product_category_name_list[i].category_name == this.category_name){
                    isValidProductCategory = false;
                    alert("Đã tồn tại tên loại sản phẩm này, vui lòng nhập lại");
                    break;
                }
            }

            if(isValidProductCategory){
                try{
                    const newProductCategory = await AdminProductCategoryService.addProductCategory({
                        category_name: this.category_name,
                        number_type: this.number_type,
                    })
                    alert("Đã thêm loại sản phẩm thành công");
                    this.$router.push({ name: 'AdminProductCategory' });
                }catch(error){
                    alert("Số định danh đã tồn tại, chọn số định danh khác");
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
            <NavAdminPage></NavAdminPage>
            <!-- Thử tách đoạn này làm component riêng -->
        </div>
        <div class="col-md-8 offset-md-1" id="contain_form_add_category_product">
            <h4>Nhập thông tin loại sản phẩm muốn thêm</h4>
            <form @submit.prevent="addProductCategory()">
                <div class="mb-3">
                    <label for="input_name_category" class="form-label">Nhập tên loại sản phẩm</label>
                    <input style="width:500px;" type="text" class="form-control" id="input_name_category" required v-model="category_name">
                </div>
                <div class="mb-3">
                    <label for="input_identify_number" class="form-label">Nhập số định danh</label>
                    <input style="width:100px;" type="number" class="form-control" id="input_identify_number" min="1" required v-model="number_type">
                </div>
                <button id="btn_add" type="submit">Thêm</button>
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

#contain_form_add_category_product{
    background-color: white;
    padding: 17px;
}

#btn_add{
    background-color: #d1e7dd;
    border-radius: 5px;
}
</style>