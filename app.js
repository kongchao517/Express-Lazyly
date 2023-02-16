/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-16 10:14:18
 */
const express=require("express")
const bodyParser=require("body-parser")
const connection =require("./sql.js")
const helmet=require("helmet")
const app = express();
app.use('/', express.static('public/apidoc'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  //防止攻击
  app.disable("x-powered-by");

  next();
});
//开始链接数据库
connection.connect(function (err) {
  if (err) {
    console.log(`mysql连接失败: ${err},正在重新连接!`);
    // setTimeout(function(){autoConnect(connect)},2000) //2s重新连接
  } else {
    console.log("mysql连接成功!");
  }
});
require("./app/routes/index.js")(app);
// 设置 public 文件夹为存放静态文件的目录

//配置服务端口
var server = app.listen("3303", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://localhost", host, port);
});
