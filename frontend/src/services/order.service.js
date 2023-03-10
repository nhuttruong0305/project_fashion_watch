import createApiClient from "./api.service";

class OrderService{
    constructor(baseUrl = "/api/orders"){
        this.api = createApiClient(baseUrl);
    }

    //Tạo đơn hàng
    async createOrder(data){
        return (await this.api.post('/create',data)).data;
    }

    //Lấy thông tin đơn hàng theo email
    async getOrderListByEmail(email){
        return (await this.api.get(`/email/${email}`)).data;
    }
}

export default new OrderService();