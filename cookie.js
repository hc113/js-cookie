<script>
//设置cookie
    function setcookie(n, v, e) {
        var odate = new Date()
        odate.setDate(odate.getDate()+e)
        document.cookie=n+"="+v+";expires="+odate
    }
    // setcookie("skname","weishiyang",100)

//获取cookie
    function getcookie(n) {
        var carr = document.cookie.split("; ")
        for (var i = 0; i < carr.length; i++) {
            var arr2 = carr[i].split("=")
            //arr2[0] 是 name ; arr2[1] 是 value
            if(arr2[0]==n){
                return arr2[1]
            }
        }
    }
    // console.log(getcookie("user"))

//移除cookie
    function removecookie(n) {
        setcookie(n, 0, -1)
    }
    removecookie("user")
</script>
