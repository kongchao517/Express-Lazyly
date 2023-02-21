const express = require("express");
const userCtrl = require("../../controller/userCtrl.js");
const userRouter = express.Router(); // 创建路由对象
/**
  * @api {get} /api/user/getUser 查询用户信息
  * @apiDescription 查询所有 username、password
  * @apiName getUser
  * @apiGroup 用户接口
  * @apiParam {string} [username] 用户名称
  * @apiParam {number} [password] 用户密码
  * @apiSuccess {number} code 返回200为成功
  * @apiSuccess {string} message  响应状态
  * @apiSuccess {object} data 查询的数据
  * @apiSuccessExample {json} 成功回调
  *  {
  *      code : 200,
  *      message  : "成功",
  *     "data" : {
        "id": '', //id
        "username": "", //用户名称
        "password": "", //密码
        "sex": "", //性别
        "age": "" //年龄
    }
  *  }
  */

userRouter.get("/api/user/getUser", userCtrl.userSelect);

/**
  * @api {post} /api/user/addUser 新增用户信息
  * @apiDescription 新增 username、password、sex、age
  * @apiName addUser
  * @apiGroup 用户接口
  * @apiParam {string} [username] 用户名称
  * @apiParam {number} [password] 用户密码
  * @apiParam {string} [sex] 用户性别
  * @apiParam {number} [age] 用户年龄
  * @apiSuccess {number} code 返回200为成功
  * @apiSuccess {string} message  响应状态
  * @apiSuccess {object} data 查询的数据
  * @apiSuccessExample {json} 成功回调
  *  {
  *      code : 200,
  *      message  : "成功",
  *     "data" : {
        "id": '', //id
        "username": "", //用户名称
        "password": "", //密码
        "sex": "", //性别
        "age": "" //年龄
    }
  *  }
  */

userRouter.post("/api/user/addUser", userCtrl.userAdd);

/**
  * @api {get} /api/user/updateUser 修改用户信息
  * @apiDescription 修改 username、password、sex、age
  * @apiName updateUser
  * @apiGroup 用户接口
  * @apiParam {number} [id] 用户id
  * @apiParam {string} [username] 用户名称
  * @apiParam {number} [password] 用户密码
  * @apiParam {string} [sex] 用户性别
  * @apiParam {number} [age] 用户年龄
  * @apiSuccess {number} code 返回200为成功
  * @apiSuccess {string} message  响应状态
  * @apiSuccess {object} data 查询的数据
  * @apiSuccessExample {json} 成功回调
  *  {
  *      code : 200,
  *      message  : "成功",
  *     "data" : {
        "id": '', //id
        "username": "", //用户名称
        "password": "", //密码
        "sex": "", //性别
        "age": "" //年龄
    }
  *  }
  */

userRouter.get("/api/user/updateUser", userCtrl.userUpdate);

/**
  * @api {get} /api/user/deleteUser 删除用户信息
  * @apiDescription 根据id删除
  * @apiName deleteUser
  * @apiGroup 用户接口
  * @apiParam {number} [id] 用户id
  * @apiSuccess {number} code 返回200为成功
  * @apiSuccess {string} message  响应状态
  * @apiSuccess {object} data 查询的数据
  * @apiSuccessExample {json} 成功回调
  *  {
  *      code : 200,
  *      message  : "成功",
  *     "data" : {
    }
  *  }
  */

userRouter.get("/api/user/deleteUser", userCtrl.userDelete);
// 对外暴露模块
module.exports = userRouter;
