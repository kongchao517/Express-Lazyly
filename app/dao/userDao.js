
/*
 * @Descripttion:统一连接数据库
 * @Author: kongchao
 * @Date: 2023-02-10 15:52:26
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-20 17:32:22
 */
const myPool=require("../../sql.js")
module.exports = {
  do(sql, arr, dos) { //dos是回调函数
      console.log(`2.控制器调用Dao层函数像数据库获取数据`)
      myPool.connect(sql, arr, function (err, data) {
          console.log(`4.Dao层处理数据库返回数据函数`,err,data,sql)
          dos(err, data)
      })
  },
}