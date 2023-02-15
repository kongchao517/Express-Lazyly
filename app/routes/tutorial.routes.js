/*
 * @Descripttion: 所有接口输出
 * @Author: lazyly
 * @Date: 2023-02-15 14:45:55
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-15 14:57:03
 */
module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();
  //查询所有 根据industry_name模糊查询
  //http://localhost:3303/api/tutorials?industry_name=工业
  router.get("/", tutorials.findAll);
  //查询根据occur_period筛选
  //http://localhost:3303/api/tutorials/202203
  router.get("/:occur_period", tutorials.findOne);

  app.use('/api/tutorials', router);
};
