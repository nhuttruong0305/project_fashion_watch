<script>
import NavAdminPage from '../components/NavAdminPage.vue';
import ProductCategoryService from '../services/admin_product_category.service';
import ProductService from '../services/product.service';
export default{
    components:{
        NavAdminPage,
    },

    data(){
        return{
            category_list: [], //danh sách tất cả các loại sản phẩm trong DB
            productname: '',
            price: 0,
            type: 0,
            description: '',
            color: '',
            brand: '',
            imageURL: '',
            origin: '',
            amountinstock: 0,
        }
    },

    created(){
        this.getAllProductCategory()
    },

    methods:{
        async getAllProductCategory(){ //hàm lấy danh sách tất cả các loại sản phẩm trong giỏ hàng
            try{
                this.category_list = await ProductCategoryService.getAllProductCategory();
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin các loại sản phẩm");
            }
        },

        async addNewProduct(){
            const confirm = window.confirm("Bạn có chắc muốn thêm sản phẩm này không?");
            if(confirm){
                try{
                    const price = parseInt(this.price);
                    const amountinstock = parseInt(this.amountinstock); 
                    const response = await ProductService.createProduct({
                        productname: this.productname,
                        price: price,
                        type: this.type,
                        description: this.description,
                        color: this.color,
                        brand: this.brand,
                        imageURL: this.imageURL,
                        origin: this.origin,
                        amountinstock: amountinstock,
                    });
                    alert("Đã thêm sản phẩm mới thành công");
                }catch(error){
                    alert("Có lỗi xảy ra khi thêm sản phẩm");
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
                <NavAdminPage></NavAdminPage>
            </div>

            <div class="col-md-8 offset-md-1" id="contain_form_add_product">
                <h4>Nhập thông tin sản phẩm muốn thêm</h4>
                <form @submit.prevent="addNewProduct()">
                    <div class="mt-3">
                        <label for="input_productname" class="form-label">Tên sản phẩm</label>
                        <input type="text" id="input_productname" class="form-control" required v-model="productname">
                    </div>
                    <div class="mt-3">
                        <label for="input_price" class="form-label">Giá</label>
                        <input type="text" id="input_price" class="form-control" required v-model="price">
                    </div>
                    
                    <div class="mt-3">
                        <label for="input_type" class="form-label">Loại sản phẩm</label>
                        <select id="input_type" class="form-control" required v-model="type">
                            <!-- <option value="Thanh toán tiền mặt" selected>Thanh toán tiền mặt</option>
                            <option value="Chuyển khoản ATM">Chuyển khoản ATM</option>
                            <option value="Thanh toán bằng hình thức cà thẻ">Thanh toán bằng hình thức cà thẻ</option> -->
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
                        <label for="input_amountinstock" class="form-label">Số lượng trong kho</label>
                        <input type="text" id="input_amountinstock" class="form-control" required v-model="amountinstock"> 
                    </div>
                    <button class="mt-4" id="btn_add_product" type="submit">Thêm sản phẩm</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#nav_between_admin_page{
    background-color: white;
}

#contain_form_add_product{
    background-color: white;
    padding: 17px;
}

#btn_add_product{
    border-radius: 5px;
}
</style>