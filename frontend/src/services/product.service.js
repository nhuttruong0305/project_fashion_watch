import createApiClient from "./api.service";

class ProductService{
    constructor(baseUrl = "/api/products"){
        this.api = createApiClient(baseUrl);
    }

    //Lấy sản phẩm theo loại sản phẩm 
    async getProductByType(type){
        return (await this.api.get(`/${type}`)).data;
    }

    //Lấy thông tin chi tiết sản phẩm
    async getDetailProduct(id){
        return (await this.api.get(`/detail/id`)).data;
    }
}

export default new ProductService();