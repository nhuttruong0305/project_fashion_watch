<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import ProductCategoryService from '../services/admin_product_category.service';
import ProductService from '../services/product.service';
import BackToTop from '../components/BackToTop.vue';
export default{
    components:{
        NavAdminPage,
        BackToTop
    },
    data(){
        return{
            category_list: [], //danh sách các loại sản phẩm hiện có
            detail_product: {}, //Thông tin chi tiết sản phẩm hiện tại
            productname: '',
            price: 0,
            type: 0,
            description: '',
            color: '',
            brand: '',
            imageURL: '',
            origin: '',
            status: '',
            amountinstock: 0,
        }
    },

    created(){
        this.getAllProductCategory(),
        this.getDetailProduct()
    },

    methods:{
        async getAllProductCategory(){ //hàm lấy danh sách tất cả các loại sản phẩm
            try{
                this.category_list = await ProductCategoryService.getAllProductCategory();
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin các loại sản phẩm");
            }
        },

        async getDetailProduct(){
            this.detail_product = await ProductService.getDetailProduct(this.$route.params.id);
            this.productname = this.detail_product.productname;
            this.price = this.detail_product.price;
            this.type = this.detail_product.type;
            this.description = this.detail_product.description;
            this.color = this.detail_product.color;
            this.brand = this.detail_product.brand;
            this.imageURL = this.detail_product.imageURL;
            this.origin = this.detail_product.origin;
            this.status = this.detail_product.status;
            this.amountinstock = this.detail_product.amountinstock;
        },

        async updateProduct(){
            const confirm = window.confirm("Bạn có chắc muốn cập nhật thông tin sản phẩm?");
            if(confirm){
                try{
                    const price = parseInt(this.price);
                    const amountinstock = parseInt(this.amountinstock); 
                    const response = await ProductService.updateProduct({
                        productname: this.productname,
                        price: price,
                        type: this.type,
                        description: this.description,
                        color: this.color,
                        brand: this.brand,
                        imageURL: this.imageURL,
                        origin: this.origin,
                        status: this.status,
                        amountinstock: amountinstock,
                    },this.$route.params.id);
                    alert("Cập nhật thông tin sản phẩm thành công");
                }catch(error){
                    alert("Có lỗi xảy ra khi cập nhật thông tin sản phẩm");
                }
            }
        },

        inputOnlyNumber(event){
            if(event.keyCode<48 || event.keyCode>57){
                event.preventDefault();
            }else{
                return true;
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
            <div class="col-md-8 offset-md-1" id="update_product">
                <h4>Cập nhật thông tin sản phẩm</h4>
                <hr>
                <form @submit.prevent="updateProduct()">
                    <div class="mt-3">
                        <label for="input_productname" class="form-label">Tên sản phẩm</label>
                        <input type="text" id="input_productname" class="form-control" required v-model="productname">
                    </div>
                    <div class="mt-3">
                        <label for="input_price" class="form-label">Giá</label>
                        <input type="text" id="input_price" class="form-control" required v-model="price" @keypress="inputOnlyNumber($event)">
                    </div>
                    <div class="mt-3">
                        <label for="input_type" class="form-label">Loại sản phẩm</label>
                        <select id="input_type" class="form-control" required v-model="type">
                            <option v-for="category in category_list" :value="category.number_type">{{ category.category_name }}</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <label for="input_description">Mô tả sản phẩm</label>
                        <textarea class="form-control" id="input_description" rows="4" placeholder="Nhập thông tin mô tả cho sản phẩm" required v-model="description"></textarea>
                    </div>
                    <div class="mt-3">
                        <label for="input_color" class="form-label">Màu sắc</label>
                        <input type="text" id="input_color" class="form-control" required v-model="color">
                    </div>
                    <div class="mt-3">
                        <label for="input_brand" class="form-label">Thương hiệu</label>
                        <input type="text" class="form-control" id="input_brand" required v-model="brand">
                    </div>
                    <div class="mt-3">
                        <label for="input_imageURl" class="form-label">Link hình ảnh minh họa</label>
                        <input type="text" id="input_imageURl" class="form-control" required v-model="imageURL">
                    </div>
                    <div class="mt-3">
                        <label for="input_origin" class="form-label">Xuất xứ</label>
                        <input type="text" id="input_origin" class="form-control" required v-model="origin">
                    </div>
                    <div class="mt-3">
                        <label for="input_status" class="form-label">Trạng thái sản phẩm</label>
                        <select id="input_status" class="form-control" required v-model="status">
                            <option value="Còn kinh doanh">Còn kinh doanh</option>
                            <option value="Ngừng kinh doanh">Ngừng kinh doanh</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <label for="input_amountinstock" class="form-label">Số lượng trong kho</label>
                        <input type="text" id="input_amountinstock" class="form-control" required v-model="amountinstock" @keypress="inputOnlyNumber($event)"> 
                    </div>
                    <button type="submit" id="btn_update_product">Cập nhật</button>
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

#update_product{
    background-color: white;
    padding: 17px;
}

#btn_update_product{
    margin-top: 15px;
    border-radius: 5px;
    background-color: #d1e7dd;
}
</style>