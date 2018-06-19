let express =  require('express');
let cookieParser = require('cookie-parser');
let app = express();

app.use(cookieParser());

/* 首页 */
app.get("/",function(req,res){
    res.send('Hello World');
});

/* 设置cookie 最早设置的会被获取到 */
app.get("/setByNoDomain",function(req,res){
    res.cookie("bar","1234567");
    res.redirect("/");
});
app.get("/setByDomain",function(req,res){
     res.cookie("bar","123456",{
         domain: 'www.foo.com',
         maxAge:7*24*60*60*1000
     });
    res.redirect("/");
});

/* 删除cookie */
app.get("/delByNoDomain",function(req,res){
    res.clearCookie("bar");
    res.redirect("/");
});
app.get("/delByDomain",function(req,res){
    res.clearCookie("bar",{domain: 'www.foo.com'});
    res.redirect("/");
});

/* 获取cookie */
app.get("/get",function(req,res){
    console.log('Cookies: ', req.cookies)
    res.send(req.cookies);
});

app.listen('3333');
console.log('listening port:3333...') 