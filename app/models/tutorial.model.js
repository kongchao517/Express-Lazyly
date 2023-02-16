/*
 * @Descripttion:sql语句
 * @Author: lazyly
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: lazyly
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
Tutorial.findById = (occur_period, result) => {
  sql.query(`select * from nanshan_economic_small.small_accounting_indices WHERE occur_period = ${occur_period}`, (err, res) => {
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
Tutorial.getAll = (industry_name, result) => {
  let query = "SELECT * FROM nanshan_economic_small.small_accounting_indices";

  if (industry_name) {
    query += ` WHERE industry_name LIKE '%${industry_name}%'`;
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
