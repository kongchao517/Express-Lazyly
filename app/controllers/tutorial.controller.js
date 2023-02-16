
/*
 * @Descripttion:控制层-可根据req判断参数和err返回状态
 * @Author: kongchao
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-15 14:53:18
 */
const Tutorial = require("../models/tutorial.model.js");
exports.findAll = (req, res) => {
  const shop_name = req.query.shop_name;

  Tutorial.getAll(shop_name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "服务器错误！"
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "服务器错误！"
      });
    else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
