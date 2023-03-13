import createApiClient from "./api.service";

class ProductService{
    constructor(baseUrl = "/api/products"){
        this.api = createApiClient(baseUrl);
    }

    //Lấy sản phẩm theo loại sản phẩm (đã chạy đúng)
    async getProductByType(type){
        return (await this.api.get(`/${type}`)).data;
    }

    //Lấy thông tin chi tiết 1 sản phẩm (đã chạy đúng)
    async getDetailProduct(id){
        return (await this.api.get(`/detail/${id}`)).data;
    }

    //Tìm kiếm sản phẩm theo keyword
    async getProductByKeyword(keyword){
        return (await this.api.get(`/searchproduct/bykeyword?keyword=${keyword}`)).data;
    }

    //Tạo mới sản phẩm
    async createProduct(data){
        return (await this.api.post('/',data)).data;
    }

    //Cập nhật thông tin sản phẩm
    async updateProduct(data, id){
        return (await this.api.put(`/update/${id}`,data)).data;
    }
}

export default new ProductService();
//vì ở đây export default là export 1 đối tượng mới luôn nên trong Product.vue không cần tạo đối tượng mới để gọi hàm