<template>
    <title>Tin tức</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">TIN TỨC</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Tin tức</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <h3 id="title_news">TIN TỨC</h3>
        <div class="row">
            <div class="col-md-6">
                <router-link to="news/news1"><img id="img_top_news" src="../assets/img/news/t1.webp" alt=""></router-link>
            </div>
            <div class="col-md-6">
                <router-link to="news/news1" class="link_news">Cách chọn mua dây da đồng hồ theo phong thủy mà bạn nên biết</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">1/4/2023</span>
                </div>
                <div class="news_content_summary">
                    Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình elip tượng trưng cho hành kim, bạn nên chọn những kiểu hình mặt đồng hồ này để tương hợp với bản mệnh. Dây đeo màu nâu, vàng, vàng bò tượng trưng cho hành thổ (Thổ sinh Kim) sẽ rất hợp với người mệnh Kim. Đeo dây màu nâu man...
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news2"><img class="img_other_news" src="../assets/img/news/t2.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news2" class="link_news">Cách phối dây da đơn giản mà cực kỳ hiệu quả</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">9/3/2023</span>
                </div>
                <div class="news_content_summary">
                    Phối màu đồng bộ với mặt đồng hồ hoặc phù hợp với một chi tiết nhỏ của đồng hồ Hiện nay trên thị trường có rất n...
                </div>
            </div>

            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news3"><img class="img_other_news" src="../assets/img/news/t3.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news3" class="link_news">Hướng dẫn cách lên dây cót đồng hồ cơ đúng cách</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">9/2/2023</span>
                </div>
                <div class="news_content_summary">
                    Phân loại đồng hồ dựa trên cách lên dây cót Có 2 loại đồng hồ cơ: Đồng hồ cơ lên dây cót bằng tay (Hand winding)...
                </div>
            </div>

            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news4"><img class="img_other_news" src="../assets/img/news/t4.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news4" class="link_news">Mẹo nhỏ giúp bạn bảo quản và sử dụng đồng hồ đeo tay đúng cách</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">9/4/2023</span>
                </div>
                <div class="news_content_summary">
                    Để ý giới hạn chịu nước của đồng hồ Mỗi chiếc đồng hồ đều có giới hạn chịu nước khác nhau được ghi chú trên mặ...
                </div>
            </div>

            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news5"><img class="img_other_news" src="../assets/img/news/t5.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news5" class="link_news">Cách chỉnh ngày giờ trên đồng hồ 6 kim 3 nút đơn giản</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">1/4/2023</span>
                </div>
                <div class="news_content_summary">
                    Để biết cách điều chỉnh đồng hồ 6 kim 3 nút, trước tiên phải tìm hiểu về chức năng của các thang đo và 3 nút chính ...
                </div>
            </div>

            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news6"><img class="img_other_news" src="../assets/img/news/t6.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news6" class="link_news">Cách làm mềm dây da đồng hồ, dễ chịu khi đeo</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">3/3/2023</span>
                </div>
                <div class="news_content_summary">
                    Sử dụng phương pháp thủ công Bạn dùng tay nắm chặt dây đồng hồ ở một bên và uốn cong nó qua lại một cách chắc ...
                </div>
            </div>

            <div class="col-sm-6 col-md-4 mt-3">
                <div>
                    <router-link to="/news/news7"><img class="img_other_news" src="../assets/img/news/t7.webp" alt=""></router-link>
                </div>
                <router-link to="/news/news7" class="link_news">Hướng dẫn cách dùng đồng hồ G-shock để tìm điện thoại</router-link>
                <div>
                    <span class="watch_news">Watch</span><i class="fa-regular fa-clock"></i><span style="margin-left:15px;">3/2/2023</span>
                </div>
                <div class="news_content_summary">
                    Cách dùng đồng hồ G-shock để tìm điện thoại Kết nối đồng hồ với điện thoại Bước 1 : Để sử dụng Bluetooth trê...
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
#title_news{
    font-weight: 700;
    border-bottom: 2px solid #1097cf;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

#img_top_news{
    
    width: 90%;
}

.link_news{
    font-size: 22px;
    text-decoration: none;
    color: black;
    display: block;
    margin-bottom: 10px;
}

.link_news:hover{
    color: #1097cf;
}

.watch_news{
    padding: 5px;
    background-color: #1097cf;
    color: white;
    font-weight: 600;
    margin-right: 15px;
}

.news_content_summary{
    font-size: 18px;
    margin-top: 18px;
}

.img_other_news{
    width: 90%;
    display: block;
    margin: 0 auto;
}
</style>