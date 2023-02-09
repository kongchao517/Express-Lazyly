import express from 'express'
import path from  "path"
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser'
//创建数据库连接对象
import mysql from 'mysql'
import {underline2Hump,jsonToUnderline} from './util.js'
import dotenv from 'dotenv'
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// var jsonToUnderline = require("./util").jsonToUnderline;
//获取process.env插件
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`),
});
//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


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
  let sqlQuery =
    "select * from nanshan_economic_small.small_accounting_indices where occur_period = ?";
  conn.query(sqlQuery, occur_period, (err, results) => {
    if (err)
      return res.json({ code: 1, message: "暂无数据", affextedRows: 0 });
    res.json({
      code: 200,
      data: jsonToUnderline(results),
      message:'查询成功！',
      affextedRows: results.affextedRows,
    });
  });

  // res.status(200)
  // res.json(questions)
});

app.route('/', (req, res) => res.send('Hello World!'))

//配置服务端口
var server = app.listen("3303", function () {
  var host = server.address().address;

  var port = server.address().port;

  console.log("Example app listening at http://localhost", host, port);
});
