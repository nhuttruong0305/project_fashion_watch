<template>
<!-- template đã check, nhớ bổ sung link trang góp ý     -->
    <div id="top_footer">
        <div class="container">
            <div class="row">
                <div class="col-6 col-lg-3">
                    <img src="../assets/img/footer/brand1.webp" alt="Orient">                	
                </div>
                <div class="col-6 col-lg-3">
                    <img src="../assets/img/footer/brand2.webp" alt="">
                </div>
                <div class="col-6 col-lg-3">
                    <img src="../assets/img/footer/brand3.webp" alt="">
                </div>
                <div class="col-6 col-lg-3">
                    <img src="../assets/img/footer/brand4.webp" alt="">
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div id="describe_footer" class="row align-items-center">
                <div class="col-md-3">
                    <img src="../assets/img/chaistain_logo.png" alt="">
                </div>
                <p class="col-md-9">Ngành công nghiệp đồng hồ đeo tay phát triển cùng với sự phát triển mạnh mẽ của khoa học kỹ thuật. Những chiếc đồng hồ điện tử, đồng hồ năng lượng mặt trời được cải tiến liên tục cùng với mức giá bình dân</p>
            </div>
            <hr>
            
        </div>
        <div id="main_footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <h4 class="main_footer_title mb-4">LIÊN HỆ VỚI CHASTAIN</h4>
                        <p><strong>Địa chỉ:</strong> Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                        <p><strong>Điện thoại: </strong>1900 1505</p>
                        <p><strong>Email: </strong>chastain@gmail.com</p>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <h4 class="main_footer_title mb-4">VỀ CHÚNG TÔI</h4>
                        <p><router-link to="/about" style="text-decoration: none; color: #fff;">Giới thiệu</router-link></p>
                        <p><router-link to="/contact" style="text-decoration: none; color: #fff;">Gửi góp ý, khiếu nại</router-link></p>
                        <!-- bổ sung chỗ này khi thêm trang góp ý -->
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <h4 class="main_footer_title mb-4">HỖ TRỢ KHÁCH HÀNG</h4>
                        <p><strong>Gọi mua: </strong>1900 1505 <span>(7:30 - 22:00)</span></p>
                        <p><strong>Kỹ thuật: </strong>1900 0305 <span>(7:30 - 22:00)</span></p>
                        <p><strong>Bảo hành: </strong>1900 1704 <span>(8:00 - 21:30)</span></p>
                        <p><strong>Khiếu nại: </strong>1900 0403 <span>(8:00 - 21:00)</span></p>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <h4 class="main_footer_title mb-4">KẾT NỐI VỚI CHÚNG TÔI</h4>
                        <p id="social_network">
                            <a href=""><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href=""><i class="fab fa-twitter fa-lg"></i></a>
                            <a href=""><i class="fab fa-youtube fa-lg"></i></a>
                            <a href=""><i class="fab fa-instagram fa-lg"></i></a>
                        </p>
                        <h4 class="main_footer_title">PHƯƠNG THỨC THANH TOÁN</h4>
                        <img src="../assets/img/footer/payment_1.svg" alt="" style="margin:0 5px 5px 0;">
                        <img src="../assets/img/footer/payment_2.svg" alt="" style="margin:0 5px 5px 0;">
                        <img src="../assets/img/footer/payment_3.svg" alt="" style="margin:0 5px 5px 0;">
                        <img src="../assets/img/footer/payment_4.svg" alt="" style="margin:0 5px 5px 0;">
                        <img src="../assets/img/footer/payment_5.svg" alt="" style="margin:0 5px 5px 0;">
                        <img src="../assets/img/footer/payment_6.svg" alt="" style="margin:0 5px 5px 0;">
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright_footer">
            <p class="container">Copyright © 2022, Chastain Powered by B1910015</p>
        </div>
    </footer>

</template>

<style scoped>
/* css ở đây đã check */
#top_footer{
    background-color: #f5f5f5;
    padding: 10px 0px 10px 0px;
    /* the distance between footer and main here */
    margin-top: 35px; 
}
footer{
    background-color: #fff;
    padding-top: 40px;
}

#describe_footer div{
    border-right: 2px solid rgb(130, 123, 123);
}

#describe_footer img{
    height: auto;
    width: 100%;
    margin: 5px auto 20px auto;
}

@media only screen and (max-width:768px) {
    #describe_footer div{
        border-right: 0px;
    }
}

#main_footer{
    background-color: #251e23;
    color: #f5f5f5;
    padding-top: 30px;
    font-size: 14px;
}

.main_footer_title{
    color: #1097cf;
    font-size: 16px;
}

#social_network a{
    color: #f5f5f5;
    margin-right: 5px;
    font-size:20px;
}

#social_network a:hover{
    color: #1097cf;
}

#copyright_footer{
    background-color: #1097cf;
    padding:15px 0;
    height: 57px;
}

</style>

