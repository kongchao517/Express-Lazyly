var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var jsonToUnderline = require("./util").jsonToUnderline;
//获取process.env插件
require("dotenv").config({
  path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`),
});
//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/jsoncharset=utf-8");
  next();
});

//创建数据库连接对象
const mysql = require("mysql");
const { host, user, password, database, multipleStatements } = process.env;
const conn = mysql.createConnection({
  host,
  user,
  password,
  database,
  multipleStatements,
});
//开始链接数据库
conn.connect(function (err) {
  if (err) {
    console.log(`mysql连接失败: ${err},正在重新连接!`);
    // setTimeout(function(){autoConnect(connect)},2000) //2s重新连接
  } else {
    console.log("mysql连接成功!");
  }
});

//全部列表查询
app.get("/api/test", function (req, res) {
  const occur_period = req?.query?.occurPeriod || "";
  console.log("req :: ", req);
  let sqlQuery =
    "select * from nanshan_economic_small.small_accounting_indices where occur_period = ?";
  conn.query(sqlQuery, occur_period, (err, results) => {
    console.log("err :: ", err);
    console.log("results :: ", results);
    if (err)
      return res.json({ err_code: 1, message: "暂无数据", affextedRows: 0 });
    res.json({
      err_code: 200,
      message: jsonToUnderline(results),
      affextedRows: results.affextedRows,
    });
  });
  // res.status(200),
  // res.json(questions)
});

//配置服务端口
var server = app.listen("3004", function () {
  var host = server.address().address;

  var port = server.address().port;

  console.log("Example app listening at http://localhost", host, port);
});
