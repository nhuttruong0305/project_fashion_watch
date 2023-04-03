<template>        
    <button id="btn_back_to_top" @click="topFunction()"><i id="icon_back_to_top" class="fa-solid fa-up-long"></i></button>
</template>

<script>
    window.onscroll = function() {
        let btn_back_to_top = document.getElementById("btn_back_to_top");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn_back_to_top.style.display = "block";
        } else {
            btn_back_to_top.style.display = "none";
        }
    };

    export default{
        methods:{
            topFunction(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
        }
    }
</script>

<style>
#btn_back_to_top{
    position: fixed;
    display: none;
    bottom: 60px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: #1097cf;
    border: none;
    cursor: pointer;
    border-radius: 8px;
}

#btn_back_to_top:hover{
    background-color: #555;
}

#icon_back_to_top{
    color: white;
    font-size: 25px;
}
</style>