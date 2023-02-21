/*
 * @Descripttion:
 * @Author: kongchao
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-20 18:44:18
 */
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const router = require("./app/Routers/index.js");
const app = express();
app.use("/apidoc", express.static("public/apidoc"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//设置跨域访问
app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By", " 3.2.1");
	res.header("Content-Type", "application/json;charset=utf-8");
	res.header("Content-Type", "application/x-www-form-urlencoded");
	//防止攻击
	app.disable("x-powered-by");

	next();
});
app.use(router);


//配置服务端口
var server = app.listen("3304", function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://localhost", host, port);
});
