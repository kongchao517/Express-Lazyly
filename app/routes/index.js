/*
 * @Descripttion: 公共接口暴露
 * @Author: lazyly
 * @Date: 2023-02-15 14:45:55
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-16 10:53:07
 */
module.exports = (app) => {
  require("../../app/routes/home/index.js")(app);
};
