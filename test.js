quan()
function quan(){
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=18807065942&userId=1075120', true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = JSON.parse(httpRequest.responseText);
            // var json = httpRequest.responseText;//获取到json字符串，还需解析
            var data = res.data.msg // 获取“当日已领取优惠券”
            console.log(data)
            if (data == "当日已领取优惠券" || data == "来晚了，券已领完") {
                var url = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title=success'
                var http = new XMLHttpRequest();//第一步：建立所需的对象
                http.open('POST', url, true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
                http.send();//第三步：发送请求  将请求参数写在URL中
                clearInterval(i)
            }
        }
    };
}
var i = setInterval(function(){
    quan()
}, 10000);
