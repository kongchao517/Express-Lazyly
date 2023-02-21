/*
 * @Descripttion:用户表控制层
 * @Author: kongchao
 * @Date: 2023-02-17 15:17:21
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-20 18:59:51
 * 注意参数和sql语句的？要对应
 */
const userDao = require("../dao/userDao.js");
const jsonResult =require('../../util.js').jsonResult

//common语法 require数组才是异步，
const userSql =require("../sql/user.js")

module.exports = {
	userSelect(req, resp) {
		console.log(`1.控制接收前端请求数据处理`, req.query);
		//多个条件必须传[] 单个string
		let { username, password } = req.query;
		let us = [username, password];
		userDao.do(userSql[0].select, us, function (err, data) {
			console.log(`5.controller层处理数据库返回数据函数`,userSql[0].select);
			jsonResult(data,resp,err)
		});
		console.log(`6.查询中,主线继续执行`);
	},
	userAdd(req, resp) {
		//多个条件必须传[] 单个string
		console.log("增加post",req.query,req.body)
		let { username,password,age,sex } = req.query;
		let us = [username,password,age,sex];
		userDao.do(userSql[0].add, us, function (err, data) {
			jsonResult(data,resp,err)
		});
	},
	userUpdate(req, resp) {
		//多个条件必须传[] 单个string
		let { id,username,password,age,sex } = req.query;
		let us = [username,password,age,sex,id];
		userDao.do(userSql[0].update, us, function (err, data) {
			jsonResult(data,resp,err)
		});
	},
	userDelete(req, resp) {
		//多个条件必须传[] 单个string
		let id =req.query.id
		userDao.do(userSql[0].delete, id, function (err, data) {
			jsonResult(data,resp,err)
		});
	}
};
