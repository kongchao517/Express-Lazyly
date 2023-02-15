/*
 * @Descripttion:连接数据库
 * @Author: lazyly
 * @Date: 2023-02-10 15:52:26
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-15 14:30:35
 */
const path = require("path");
//创建数据库连接对象
const mysql = require("mysql");
//获取process.env插件

require("dotenv").config()
require("dotenv").config({
  path: path.resolve(__dirname, `./env/${process.env.NODE_ENV}.env`),
});

const { host, user, password, database, multipleStatements } = process.env;
const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
  multipleStatements,
});

module.exports = connection;
