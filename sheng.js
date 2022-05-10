sheng()
var url
function sheng() {
    // 获取外卖券剩余量
    //https://sctapi.ftqq.com/SCT146464TwyRdv6TrXHCvWRfqORFydBHw.send?title=messagetitle
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://1.13.156.95:8008/product/detail/5660', true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = JSON.parse(httpRequest.responseText);
            // var json = httpRequest.responseText;//获取到json字符串，还需解析
            stock = res.data.storeInfo.stock // 获取“当日已领取优惠券”
            console.log(stock)
            tuisong()
        }
    };
}

function tuisong() {
    var url = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title=' + stock
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', url, true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
}