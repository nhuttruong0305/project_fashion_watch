<template>
<title>Liên hệ</title>
    <div id="breadcrumb_background">
        <p id="title_breadcrumb" class="text-center">LIÊN HỆ</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>&nbsp;
                <li class="breadcrumb-item active" aria-current="page"
                    style="color: #1097cf; font-weight: 600; font-size: 16px;">&nbsp;Liên hệ</li>
            </ol>
        </nav>
    </div>       
    
    <div class="container">
        <h3 class="title_contact">Bản đồ cửa hàng</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841518408643!2d105.76842661461575!3d10.029933692830687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1678602061811!5m2!1svi!2s" 
            width="1294" 
            height="450" 
            style="border:0;" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <h3 class="title_contact mt-5">Thông tin liên hệ</h3>
        <div class="row">
            <div class="col-md-6">
                <h5 style="border: 3px solid #1097cf; width: 320px;text-align: center;padding: 10px;">Liên hệ với chúng tôi thông qua</h5>
                <form>
                    <div class="mb-3">
                        <label for="name_contact_info_contact" class="form-label">Họ tên*</label>
                        <input type="text" id="name_contact_info_contact" name="name_contact_info_contact" placeholder="Nhập họ tên" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="email_contact_info_contact" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="email_contact_info_contact" name="email_contact_info_contact" aria-describedby="emailHelp" placeholder="Nhập email của bạn" required>
                        <div id="emailHelp" class="form-text">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                    </div>
                    <div class="mb-3">
                        <label for="sdt_contact_info_contact" class="form-label">Số điện thoại*</label>
                        <input type="text" id="sdt_contact_info_contact" name="sdt_contact_info_contact" placeholder="Nhập số điện thoại" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="content_contact_info_contact" class="form-label">Nội dung</label>
                        <textarea class="form-control" id="content_contact_info_contact" name="content_contact_info_contact" rows="4" placeholder="...." required></textarea>
                    </div>
                    <button type="submit" name="submit_contact_info_contact" id="submit_contact_info_contact" class="btn btn-primary">Gửi thông tin liên hệ</button>
                </form>
            </div>
            <div class="col-md-5 offset-md-1">
                <h5 style="border: 3px solid #1097cf; width: 320px;text-align: center;padding: 10px;">Cửa hàng đồng hồ Chastain</h5>
                <div class="d-flex mt-3 align-items-center">
                    <div class="icon_contact"><i class="fa-solid fa-location-dot"></i></div>
                    <div style="font-size: 20px;">Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</div>
                </div>
                <div class="d-flex mt-4 align-items-center">
                    <div class="icon_contact"><i class="fa-solid fa-phone-volume"></i></div>
                    <div style="font-size: 20px;color: #1097cf;">1900 6789</div>
                </div>
                <div class="d-flex mt-4 align-items-center">
                    <div class="icon_contact"><i class="fa-solid fa-envelope-circle-check"></i></div>
                    <div style="font-size: 20px;color: #1097cf;">chastain@gmail.com</div>
                </div>
                <div class="d-flex mt-4">
                    <div style="width: 40px;" class="icon_contact"><i class="fa-regular fa-clock"></i></div>
                    <div style="font-size: 20px;">Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến Chủ nhật</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title_contact{
    padding-bottom: 13px;
    border-bottom: 2px solid #1097cf;
    font-weight: 700;
}

.icon_contact{
    background-color: #1097cf;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 8px;
}
</style>