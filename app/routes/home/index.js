module.exports = (app) => {
  const tutorials = require("../../controllers/tutorial.controller.js");
  var router = require("express").Router();
  /**
*  @api {get} /api/tutorials 商品
 * @apiDescription 查询所有 根据shop_name模糊查询
 * @apiName tutorials
 * @apiGroup 接口
 * @apiParam {string} [shop_name] 商品名称
 * @apiSuccess {number} code 返回200为成功
 * @apiSuccess {string} message  响应状态
 * @apiSuccess {object} data 查询的数据
 * @apiSuccessExample {json} 成功回调:
 *  {
 *      code : 200,
 *      message  : "成功",
 *     "data" : {
        "shop_name": "", //商品名称
        "id": "" //id
    }
 *  }
 * @apiVersion 0.0.1
 */
  router.get("/", tutorials.findAll);
  //查询根据id筛选
  //http://localhost:3303/api/tutorials/202203

  router.get("/:id", tutorials.findOne);

  app.use("/api/tutorials", router);
  
};