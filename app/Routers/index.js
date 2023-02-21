/*
 * @Descripttion: 公共接口暴露
 * @Author: kongchao
 * @Date: 2023-02-15 14:45:55
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-20 18:23:54
 */

const userRouter = require("./user/index.js");
//解构方式会丢失function
// const router = {...userRouter }
const router =Object.assign(userRouter)
//404处理
router.use((req, res, next) => {
	res.status(404).send({
        code:404,
        msg:'404 - NOT Found',
        data:[]
      });
});
//在所有组件挂在之后处理错误中间件
router.use((err, req, res, next) => {
	console.log('err-req------>', req.method, req.url);
	console.log('err-info----->', err)
	res.status(500).send({
        code:500,
        msg:'服务器貌似有些问题了'+err.message,
        data:[]
      });
});
module.exports=router