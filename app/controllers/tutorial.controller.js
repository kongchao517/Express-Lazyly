
/*
 * @Descripttion:控制层-可根据req判断参数和err返回状态
 * @Author: kongchao
 * @Date: 2023-02-08 16:15:03
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-15 14:53:18
 */
const Tutorial = require("../models/tutorial.model.js");
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const industry_name = req.query.industry_name;

  Tutorial.getAll(industry_name, (err, data) => {
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
  Tutorial.findById(req.params.occur_period, (err, data) => {
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
