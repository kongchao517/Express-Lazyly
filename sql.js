/*
 * @Descripttion:数据库配置
 * @Author: kongchao
 * @Date: 2023-02-10 15:52:26
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-20 17:16:29
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
const poolCig={host,user,password,database,multipleStatements}

const dbPool = {
  pool: {},
  create() {
      this.pool = mysql.createPool(poolCig) // 创建数据库连接池
  },
  connect(sql, arr, fun) {
    this.pool.getConnection(function (err, connection) {
      connection.query(sql, arr, fun)
      console.log(`3.Dao对数据连接,发送sql语句进行查询`,sql)
      connection.release() //连接清空
      })
  }
}
dbPool.create()
module.exports = dbPool
