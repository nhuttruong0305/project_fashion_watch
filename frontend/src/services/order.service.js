import createApiClient from "./api.service";

class OrderService{
    constructor(baseUrl = "/api/orders"){
        this.api = createApiClient(baseUrl);
    }

    //Tạo đơn hàng
    async createOrder(data){
        return (await this.api.post('/create',data)).data;
    }
}

export default new OrderService();