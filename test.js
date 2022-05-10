
    script.type="text/javascript";  
    script.src="./jquery/jquery-2.1.1.min.js";       
    quan()
    function quan(){
        $.ajax({
        url: "http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=18807065942&userId=1075120",
        type: 'get',
        dataType: 'json',
        data: {},
        success: function(res) {
            var data = res.data.msg
            console.log(data)
            if (data == "当日已领取优惠券") {
                clearInterval(i)
                
            }
        },
        error: function() {}
        })
    }
    var i = setInterval("quan()", 10000);
