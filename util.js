/*
 * @Descripttion: 返回结果转换
 * @Author: lazyly
 * @Date: 2023-02-16 14:59:08
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-16 15:05:47
 */
// 字符串的下划线格式转驼峰格式，eg：hello_world => helloWorld
function underline2Hump(s) {
  return s.replace(/_(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}

// JSON对象的key值转换为下划线格式
function jsonToUnderline(obj) {
  if (obj instanceof Array) {
    obj.forEach(function(v, i) {
      jsonToUnderline(v)
    })
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function(key) {
      var newKey = underline2Hump(key)
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToUnderline(obj[newKey])
    })
  }
  return obj
}

module.exports = {jsonToUnderline} 

