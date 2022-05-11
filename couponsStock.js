couponsStock()
var url
function couponsStock() {
    // 获取外卖券剩余量
    //https://sctapi.ftqq.com/SCT146464TwyRdv6TrXHCvWRfqORFydBHw.send?title=messagetitle
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://1.13.156.95:8008/product/detail/5660', true);//第二步：打开连接  将请求参数写在url中
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = JSON.parse(httpRequest.responseText);
            stock = res.data.storeInfo.stock // 获取外卖券库存
            console.log(stock)
            // 调用微信推送
            pushWechat()
        }
    };
}

// 微信推送
function pushWechat() {
    var url = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title=couponsStock' + stock
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', url, true);//第二步：打开连接  将请求参数写在url中
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    
}