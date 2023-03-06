import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import DetailProduct from "@/views/DetailProduct.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

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

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;