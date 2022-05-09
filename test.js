
<script src="./jquery/jquery-2.1.1.min.js"></script>
<script src="./jquery/jquery.pagination.js"></script>
<script src="./jquery/jquery-form.min.js"></script>
<script>
xunhuan()
function xunhuan(){
    $.ajax({
        url: "http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=18807065942&userId=1075120",
        type: 'get',
        dataType: 'json',
        data: {},
        success: function (res) {
            var data = res.data.msg
            if(data == "成功"){
                clearInterval(i)
            }
        },
        error: function () {}
    })
    var i = setInterval(function(){
        xunhuan()
    },10000);
}
</script>