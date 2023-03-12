import createApiClient from "./api.service";

class ProductCategoryService{
    constructor(baseUrl = "/api/product_category"){
        this.api = createApiClient(baseUrl);
    }

    //Lấy thông tin tất cả loại sản phẩm (đã chạy đúng)
    async getAllProductCategory(){
        return (await this.api.get('/getAll')).data;
    }

    //Thêm loại sản phẩm mới (đã chạy đúng)
    async addProductCategory(data){
        return (await this.api.post('/create',data)).data;
    }
}

export default new ProductCategoryService();