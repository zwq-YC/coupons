
coupons()
function coupons(){
    
    var myDate = new Date()
    var hours = myDate.getHour()
    if (hours == 0){
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=17779560253&userId=1075093', true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = JSON.parse(httpRequest.responseText); // 返回数据转换成json数据

            var data = res.data.msg // 获取返回结果
            console.log('小宝' + data)
            
            // 定义发送推送的url
            var urlBase = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title='

            // 判断结果
            if (data == "成功") {
                var url = urlBase + 'taoSuccess'
                clearInterval(i)
            }else if (data == "当日已领取优惠券") {
                var url = urlBase + 'taoReceived'
                clearInterval(i)
            }else if (data == "来晚了，券已领完") {
                var url = urlBase + 'taoLate'
                clearInterval(i)
            }     
        }
    };
    } else {
        console.log("时间未到")
    }
    
}
var i = setInterval(function(){
    coupons()
}, 10000);



