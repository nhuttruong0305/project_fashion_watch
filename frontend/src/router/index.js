import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import DetailProduct from "@/views/DetailProduct.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Cart from "@/views/Cart.vue";
import Order from "@/views/Order.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/product/:type",
        name: "Product",
        component: Product,
    },
    {
        path: "/detail/:id",
        name: "DetailProduct",
        component: DetailProduct
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
        beforeEnter: (to, from, next) => {
            const UserInfo = JSON.parse(localStorage.getItem("UserLogin"));
            const Cart = JSON.parse(localStorage.getItem("Cart"));
            if(UserInfo == null){
                alert("Bạn phải đăng nhập để tiến hành đặt hàng");
                return false;   
            }
            console.log(Cart);
            if(Cart == null || Cart.length == 0){
                alert("Bạn chưa có sản phẩm trong giỏ hàng");
                return false;
            }else{
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;