var express=require('express');
// var router = express.Router();
var app =express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const querystring = require("querystring");
 
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
host: '127.0.0.1',//数据库地址
user: 'root',//账号
password: 'root',//密码
database: 'nodeproject',//库名
multipleStatements: true //允许执行多条语句
})
//开始链接数据库
conn.connect(function(err){
    if(err){
        console.log(`mysql连接失败: ${err},正在重新连接!`);
        // setTimeout(function(){autoConnect(connect);},2000); //2s重新连接
    }else{
        console.log("mysql连接成功!");
    }
});


//全部列表查询
app.get('/api/getlist',function(req,res){
    let sqlQuery="select * from user_info";
    conn.query(sqlQuery, (err, results) => {
        if (err) return res.json({ err_code: 1, message: '暂无数据', affextedRows: 0 })
        res.json({ err_code: 200, message: results, affextedRows: results.affextedRows })
    })
    // res.status(200),
    // res.json(questions)
});

//按条件查询
app.get('/api/getlistdetl', (req, res) => {
    const name = req.query.name
    const sqlStr = 'select * from user_info where name=?'
    conn.query(sqlStr, name, (err, results) => {
        if (err) return res.json({ err_code: 1, message: '查无此人', affextedRows: 0 })
        res.json({ err_code: 200, message: results, affextedRows: results.affextedRows })
    })
})

//添加用户数据
app.post('/api/userInfo', (req, res) => {
    const username = req.body.name
    const age = req.body.age
    const sex = req.body.sex
    // const all=querystring.stringify({name:username,age:age,sex:sex})
    console.log(username)
    // const sqlStr = 'INSERT INTO user_info SET ?'
    const sqlStr = 'insert into user_info set ?'
    conn.query(sqlStr, {name:username,age:age,sex:sex}, (err, results) => {
        if (err) return res.json({ err_code: 1, message: err, affectedRows: 0 })
        res.json({ err_code: 0, message: '添加成功', affectedRows: results.affectedRows })
    })
    
})

//用户注册
app.post('/api/user/register',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const repassword = req.body.repassword
    const registerDate=new Date()
    // const sqlStr='INSERT INTO register SET ?'
    const sqlStr='insert into register set ?'
    // const sqlStr1='SELECT * FROM register WHERE username = ?'
    const sqlStr1='select * from register where username = ?'
    conn.query(sqlStr1,username,(err,results)=>{
        if(err) return res.json({err_code:1,message:err,affectedRows:0})
        // 数据不存在 就注册成功
        if (results.length == 0 ) {
            //判断两次密码是否一致
            if(password !=repassword){
                return res.json({err_code:201,message:'两次输入的密码不一致',affectedRows:0})
            }
            // 把新用户插入数据库
            conn.query(sqlStr,{username:username,password:password,repassword:repassword,registerDate:registerDate}, (err, results)=> {
            if(err){
                throw err
            }else{
                // res.end(JSON.stringify({status:'100',msg:'注册成功!'}));
                res.json({err_code:0,message:'注册成功',affectedRows:results.affectedRows})
            }
        })
        } else{ // 数据存在就注册失败
            // res.end(JSON.stringify({status:'101',msg:'该用户名已经被注册'}));
            res.json({err_code:101,message:'该用户名已经被注册',affectedRows:0})    
        }
    })
    // conn.query(sqlStr,{username:username,password:password,repassword:repassword},(err,results)=>{
    //     if(err) return res.json({err_code:1,message:err,affectedRows:0})
    //     res.json({err_code:0,message:'注册成功',affectedRows:results.affectedRows})
    // })
})
//用户登录
app.post('/api/user/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const sqlStr='select * from register where username=? and password=?'
    conn.query(sqlStr,[username,password],(err,results)=>{
        console.log(results)
        if(err) return res.json({err_code:1,message:err,affectedRows:0})
        // if(null != results) return res.json({err_code:401,message:'用户不存在',affectedRows:0})
        if(results.length == 0){
            res.json({err_code:301,message:'用户名或密码错误',affectedRows:0})
        }else{
            res.json({err_code:0,message:'登录成功,正在跳转...',affectedRows:results.affectedRows,user_info:results})
        }
    })
})





//获取商品列表
app.get('/api/goods/goodsList',(req,res)=>{
    const sqlStr='select * from goods_info'
    conn.query(sqlStr,(err,results)=>{
        if(err) return res.json({err_code:1,message:err,affectedRows:0})
        res.json({err_code:0,message:'ok',goodsList:results})
    })
})





//配置服务端口
 
var server = app.listen(3002, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
 
    console.log('Example app listening at http://localhost', host, port);
})
