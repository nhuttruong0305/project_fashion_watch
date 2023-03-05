<script>

</script>

<template>
    <div id="form_search_product_header" class="d-flex align-items-center justify-content-around">
        <input type="text" placeholder="Tìm sản phẩm" name="" id="input_search_header">
        <button id="search_btn_header" class="btn btn-primary">
            <i id="search_icon" class="fas fa-search"></i>
        </button>
    </div>
    <div id="icon_user_header">
        <i id="icon_user" class="fas fa-user"></i>
    </div>
    <div id="icon_shoping_cart_header">
        <i class="fas fa-shopping-bag"></i>
        <span id="count_product_header"> 0 </span>
    </div>
</template>

<style scoped>
#form_search_product_header{
    width: 360px;
}

#search_icon{
    color: black;
}

#input_search_header {
    width: 300px;
    display: inline-block;
    border-radius: 10px;
    height: 35px;
    margin-right: 10px;
}

#search_btn_header {
    border-radius: 50%;
    background-color: #1097cf;
}

#icon_user_header{
    margin:0 20px;
    padding: 0 10px 0 10px;
    border-left: 2px solid black;
    border-right: 2px solid black;
}

#icon_shoping_cart_header{
    position: relative;
}

#count_product_header{
    position: absolute;
    top: -8px;
    right: -13px;
    background-color: #1097cf;
    padding: 1px;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 12px;

}
</style>