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
import OrderSuccess from "@/views/OrderSuccess.vue";
import UserProfile from "@/views/UserProfile.vue";
import DetailOrder from "@/views/DetailOrder.vue";
import ChangeUserProfile from "@/views/ChangeUserProfile.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import SearchProduct from "@/views/SearchProduct.vue";
import News from "@/views/News.vue";
import Contact from "@/views/Contact.vue";
import AdminProductCategory from "@/views/AdminProductCategory.vue";
import AdminHeader from "../components/AdminHeader.vue";
import AdminFooter from "../components/AdminFooter.vue";
import AdminAddProductCategory from "../views/AdminAddProductCategory.vue";
import UpdateProductCategory from "../views/UpdateProductCategory.vue";
import AdminProduct from "../views/AdminProduct.vue";
import AdminAddProduct from "../views/AdminAddProduct.vue";

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
    { //Cần bảo vệ route
        path: "/order",
        name: "Order",
        components:{
            default: Order,
            footer: Footer,
            header: Header,
        }, 
        // beforeEnter: (to, from, next) => {
        //     const UserInfo = JSON.parse(localStorage.getItem("UserLogin"));
        //     const Cart = JSON.parse(localStorage.getItem("Cart"));
        //     if(UserInfo == null){
        //         alert("Bạn phải đăng nhập để tiến hành đặt hàng");
        //         return false;   
        //     }
        //     if(Cart == null || Cart.length == 0){
        //         alert("Bạn chưa có sản phẩm trong giỏ hàng");
        //         return false;
        //     }else{
        //         next();
        //     }
        // }
    },
    {//Cần bảo vệ route
        path: "/ordersuccess",
        name: "OrderSuccess",
        components:{
            default: OrderSuccess,
            header: Header,
            footer: Footer,
        } 
    },
    {//Cần bảo vệ route
        path: "/userprofile",
        name: "UserProfile",
        components:{
            default: UserProfile,
            header: Header,
            footer: Footer,
        }
    },
    {//Cần bảo vệ route
        path: "/detailorder/:id",
        name: "DetailOrder",
        components:{
            default: DetailOrder,
            header: Header,
            footer: Footer,
        }
    },
    {//Cần bảo vệ route
        path: "/changeuserprofile",
        name: "ChangeUserProfile",
        components:{
            default: ChangeUserProfile,
            header: Header,
            footer: Footer,
        }
    },
    {//Cần bảo vệ route
        path: "/changepassword",
        name: "ChangePassword",
        components:{
            default: ChangePassword,
            header: Header,
            footer: Footer,
        }
    },
    {
        path: "/searchproduct",
        name: "SearchProduct",
        components:{
            default: SearchProduct,
            header: Header,
            footer: Footer,
        }
    },
    {
        path: "/news",
        name: "News",
        components:{
            default: News,
            header: Header,
            footer: Footer, 
        }
    },
    {
        path: "/contact",
        name: "Contact",
        components:{
            default: Contact,
            header: Header,
            footer: Footer,
        }
    },
    {//cần bảo vệ đường dẫn (chưa bảo vệ)
        path: "/admin/product_category",
        name: "AdminProductCategory",
        components:{
            default: AdminProductCategory,
            // header: AdminHeader,
            // footer: AdminFooter,
        }
    },
    {//cần bảo vệ đường dẫn (chưa bảo vệ)
        path: "/admin/add_product_category",
        name: "AddProductCategory",
        component: AdminAddProductCategory,
    },
    {//cần bảo vệ đường dẫn (chưa bảo vệ)
        path: "/admin/update_product_category/:number_type",
        name: "UpdateProductCategory",
        component: UpdateProductCategory,
    },
    {//cần bảo vệ đường dẫn (chưa bảo vệ)
        path: "/admin/product",
        name: "AdminProduct",
        component: AdminProduct,
    },
    {//cần bảo vệ đường dẫn (chưa bảo vệ)
        path: "/admin/add_product",
        name: "AddProduct",
        component: AdminAddProduct,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const UserLogin = JSON.parse(localStorage.getItem("UserLogin"));
    const Cart = JSON.parse(localStorage.getItem("Cart"));
    
    //Người dùng phải đăng nhập và giỏ hàng không được rỗng để vào trang Order
    if(to.name == 'Order'){
        //Bạn phải đăng nhập mới vào trnag Order được
        if(UserLogin == null){
            alert("Bạn phải đăng nhập để tiến hành đặt hàng");
            return '/login';   
        }
        //Giỏ hàng không được rỗng mới vào trang Order được
        if(Cart == null || Cart.length == 0){
            alert("Bạn chưa có sản phẩm trong giỏ hàng");
            return '/product/all';
        }
    }

    //Phải từ trang Order chuyển hướng qua trang OrderSuccess
    if(to.name == 'OrderSuccess' && from.name != 'Order'){
        return '/';
    }
    
    //Phải đăng nhập mới cho vào trang UserProfile
    if(to.name == 'UserProfile' && UserLogin == null){
        return '/';
    }

    //Phải đăng nhập rồi mới vào trang DetailOrder được
    if(to.name == 'DetailOrder' && UserLogin == null){
        return '/';
    }

    //Phải đăng nhập rồi mới cho vào trang ChangeUserProfile
    if(to.name == "ChangeUserProfile" && UserLogin == null){
        return '/';
    }

    //Phải đăng nhập rồi mới cho vào trang đổi mật khẩu
    if(to.name == "ChangePassword" && UserLogin == null){
        return '/';
    }
})

export default router;