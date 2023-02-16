/*
 * @Descripttion:sql语句
 * @Author: kongchao
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-16 13:44:36
 */
const sql = require("../../sql.js");
var jsonToUnderline = require('../../util.js').jsonToUnderline

// constructor
const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};
Tutorial.findById = (id, result) => {
  sql.query(`select * from shops WHERE id = ${id}`, (err, res) => {
    if (err) {
      return result(err, null);;
    }else{
      return result(null, {
        code:200,
        message:"查询成功！",
        data:jsonToUnderline(res)
      });
    }
  });
};
Tutorial.getAll = (shop_name, result) => {
  let query = "SELECT * FROM shop";

  if (shop_name) {
    query += ` WHERE shop_name LIKE '%${shop_name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      return result(err, null);;
    }else{
      return result(null, {
        code:200,
        message:"查询成功！",
        data:jsonToUnderline(res)
      });
    }
  });
};
module.exports = Tutorial;
