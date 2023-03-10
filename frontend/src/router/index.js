import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import DetailProduct from "@/views/DetailProduct.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Cart from "@/views/Cart.vue";
import Order from "@/views/Order.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import OrderSuccess from "@/views/OrderSuccess.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        components:{
            default:HomePage,
            footer: Footer,
            header: Header,
        },
    },
    {
        path: "/about",
        name: "About",
        components:{
            default: About,
            footer: Footer,
            header: Header,
        },
    },
    {
        path: "/product/:type",
        name: "Product",
        // component: Product,
        components:{
            default: Product,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/detail/:id",
        name: "DetailProduct",
        components:{
            default: DetailProduct,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/register",
        name: "Register",
        components:{
            default: Register,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/login",
        name: "Login",
        components:{
            default: Login,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/cart",
        name: "Cart",
        components:{
            default: Cart,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/order",
        name: "Order",
        components:{
            default: Order,
            footer: Footer,
            header: Header,
        }, 
        beforeEnter: (to, from, next) => {
            const UserInfo = JSON.parse(localStorage.getItem("UserLogin"));
            const Cart = JSON.parse(localStorage.getItem("Cart"));
            if(UserInfo == null){
                alert("Bạn phải đăng nhập để tiến hành đặt hàng");
                return false;   
            }
            if(Cart == null || Cart.length == 0){
                alert("Bạn chưa có sản phẩm trong giỏ hàng");
                return false;
            }else{
                next();
            }
        }
    },{
        path: "/ordersuccess",
        name: "OrderSuccess",
        components:{
            default: OrderSuccess,
            header: Header,
            footer: Footer,
        } 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;