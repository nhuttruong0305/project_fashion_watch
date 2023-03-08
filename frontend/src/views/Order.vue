<script>
export default{
    
}

</script>
<template>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-8">
            <div class="row">
                <div class="col">
                    <h5>Thông tin nhận hàng</h5>
                    <form>
                        <div class="mb-3">
                            <label for="fullnameOrder" class="form-label">Họ và tên người nhận</label>
                            <input type="text" class="form-control" id="fullnameOrder" required>
                        </div>
                        <div class="mb-3">
                            <label for="emailOrder" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailOrder" required>
                        </div>

                        <div class="mb-3">
                            <label for="phoneNumberOrder" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="phoneNumberOrder" required>
                        </div>

                        <div class="mb-3">
                            <label for="addressOrder" class="form-label">Địa chỉ</label>
                            <input type="text" class="form-control" id="addressOrder" required>
                        </div>
                        
                        <div class="mb-3">
                            <label for="comment_order" class="form-label">Comments</label>
                            <textarea class="form-control" id="comment_order" rows="4" placeholder="Bạn có ghi chú gì cần chúng tôi lưu ý không"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="payment_order" class="form-label">Hình thức thanh toán</label>
                            <select name="payment_order" id="payment_order" class="form-control" required>
                                <option value="Thanh toán tiền mặt" selected>Thanh toán tiền mặt</option>
                                <option value="Chuyển khoản ATM">Chuyển khoản ATM</option>
                                <option value="Thanh toán bằng hình thức cà thẻ">Thanh toán bằng hình thức cà thẻ</option>
                            </select>
                        </div>
                    </form>

                </div> 
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Danh sách sản phẩm
                </div>
                <div class="card-body">
                    
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center"></th>
                                <th scope="col" class="text-center">Số lượng</th>
                                <th scope="col" class="text-center">Giá </th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Mỗi thẻ tr bên dưới là 1 sản phẩm -->
                            <tr>
                                <td style="width: 40%"><img class="img_card_body" src="https://bizweb.dktcdn.net/100/438/171/products/sp10-c071025e-52d6-4c86-8e35-21f600ee136b.jpg?v=1632724245347" alt=""></td>
                                <td class="amount_card_body">1</td>
                                <td class="price_card_body">3.200.000 đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    </div>
</div>
</template>

<style scoped>
.img_card_body{
    width: 70%;
    display: block;
    margin: 0 auto;
}

.price_card_body{
    text-align: center;
}

.amount_card_body{
    text-align: center;
}

</style>