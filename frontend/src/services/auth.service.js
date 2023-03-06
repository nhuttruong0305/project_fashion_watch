import createApiClient from "./api.service";

class AuthService{
    constructor(baseUrl = "/api/auth"){
        this.api = createApiClient(baseUrl);
    }

    //Đăng ký
    async registerAccountUser(data){
        return (await this.api.post('/register',data)).data;
    }

    //Đăng nhập
    async loginAccountUser(data){
        return (await this.api.post('/login',data)).data;
    }
}

export default new AuthService();