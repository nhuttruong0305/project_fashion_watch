<template>
    <h4 class="mt-4">Chastain - TRANG QUẢN TRỊ</h4>
    <hr>
    <ul>
        <li><router-link class="nav_admin" to="/admin/product_category">Quản lý loại sản phẩm</router-link></li>
        <li><router-link class="nav_admin" to="/admin/product">Quản lý sản phẩm</router-link></li>
        <li><router-link class="nav_admin" to="/admin/order">Quản lý đơn hàng</router-link></li>
    </ul>
</template>

<style scoped>
.nav_admin{
    color: black;
    text-decoration: none;
}

.nav_admin:hover{
    color: #20744e;
}

</style>