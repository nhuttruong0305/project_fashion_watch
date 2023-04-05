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
import AdminAddProductCategory from "../views/AdminAddProductCategory.vue";
import UpdateProductCategory from "../views/UpdateProductCategory.vue";
import AdminProduct from "../views/AdminProduct.vue";
import AdminAddProduct from "../views/AdminAddProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";
import AdminSearchProduct from "../views/AdminSearchProduct.vue";
import AdminOrder from "../views/AdminOrder.vue";
import AdminDetailOrder from "../views/AdminDetailOrder.vue";
import AdminSearchOrder from "../views/AdminSearchOrder.vue";
import AdminAccount from "../views/AdminAccount.vue";
import AdminSearchAccount from "../views/AdminSearchAccount.vue";
import AdminSearchOrderByPhoneNumber from "../views/AdminSearchOrderByPhoneNumber.vue";
import News1 from "../views/News1.vue";
import News2 from "../views/News2.vue";
import News3 from "../views/News3.vue";
import News4 from "../views/News4.vue";
import News5 from "../views/News5.vue";
import News6 from "../views/News6.vue";
import News7 from "../views/News7.vue";

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
    {//cần bảo vệ đường dẫn
        path: "/admin/product_category",
        name: "AdminProductCategory",
        components:{
            default: AdminProductCategory,
        }
    },
    {//cần bảo vệ đường dẫn
        path: "/admin/add_product_category",
        name: "AddProductCategory",
        component: AdminAddProductCategory,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/update_product_category/:number_type",
        name: "UpdateProductCategory",
        component: UpdateProductCategory,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/product",
        name: "AdminProduct",
        component: AdminProduct,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/add_product",
        name: "AddProduct",
        component: AdminAddProduct,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/update_product/:id",
        name: "UpdateProduct",
        component: UpdateProduct,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/searchproduct",
        name: "AdminSearchProduct",
        component: AdminSearchProduct,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/order",
        name: "AdminOrder",
        component: AdminOrder,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admindetailorder/:id",
        name: "AdminDetailOrder",
        component: AdminDetailOrder,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/search_order",
        name: "AdminSearchOrder",
        component: AdminSearchOrder,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/account",
        name: "AdminAccount",
        component: AdminAccount,
    },
    {//cần bảo vệ đường dẫn 
        path: "/admin/search_account",
        name: "AdminSearchAccount",
        component: AdminSearchAccount,
    },
    {//cần bảo vệ đường dẫn
        path: "/admin/search_order_by_phonenumber",
        name: "AdminSearchOrderByPhoneNumber",
        component: AdminSearchOrderByPhoneNumber,
    },
    {
        path: "/news/news1",
        name: "News1",
        components:{
            default: News1,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news2",
        name: "News2",
        components:{
            default: News2,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news3",
        name: "News3",
        components:{
            default: News3,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news4",
        name: "News4",
        components:{
            default: News4,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news5",
        name: "News5",
        components:{
            default: News5,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news6",
        name: "News6",
        components:{
            default: News6,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/news/news7",
        name: "News7",
        components:{
            default: News7,
            header: Header,
            footer: Footer, 
        } 
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
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
        //Bạn phải đăng nhập mới vào trang Order được
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

    //Phải đăng nhập với quyền admin mới vào được AdminProductCategory
    if(to.name == "AdminProductCategory"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin mới vào được AddProductCategory
    if(to.name == "AddProductCategory"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin mới vào được UpdateProductCategory
    if(to.name == "UpdateProductCategory"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin mới vào được AdminProduct
    if(to.name == "AdminProduct"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AddProduct
    if(to.name == "AddProduct"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào UpdateProduct
    if(to.name == "UpdateProduct"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AdminSearchProduct
    if(to.name == "AdminSearchProduct"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AdminOrder
    if(to.name == "AdminOrder"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AdminDetailOrder
    if(to.name =="AdminDetailOrder"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AdminSearchOrder
    if(to.name == "AdminSearchOrder"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập với quyền admin để vào AdminAccount
    if(to.name == "AdminAccount"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    //Phải đăng nhập bằng quyền admin để vào AdminSearchAccount
    if(to.name == "AdminSearchAccount"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }

    if(to.name == "AdminSearchOrderByPhoneNumber"){
        if(UserLogin == null || UserLogin.isAdmin == false){
            return '/';
        }
    }
})

export default router;