module.exports = (app) => {
  const tutorials = require("../../controllers/tutorial.controller.js");

  var router = require("express").Router();
  /**
*  @api {get} /api/tutorials 核算分析112111
 * @apiDescription 查询所有 根据industry_name模糊查询
 * @apiName tutorials
 * @apiGroup 小屏端接口
 * @apiParam {string} [industry_name] 行业名称
 * @apiSuccess {number} code 返回200为成功
 * @apiSuccess {string} message  响应状态
 * @apiSuccess {object} data 查询的数据
 * @apiSuccessExample {json} 成功回调:
 *  {
 *      code : 200,
 *      message  : "成功",
 *     "data" : {
        "occur_period": '', //数据期
        "industry_name": "", //行业
        "index_name": "", //指标名称
        "value_ns": "", //南山增速
        "value_sz": "", //深圳增速
        "gap": "", //差值
        "id": "" //id
    }
 *  }
 * @apiVersion 0.0.1
 */
  router.get("/", tutorials.findAll);
  //查询根据occur_period筛选
  //http://localhost:3303/api/tutorials/202203

  router.get("/:occur_period", tutorials.findOne);

  app.use("/api/tutorials", router);
  
};