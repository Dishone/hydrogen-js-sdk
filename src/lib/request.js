// const Bmob = require('./bmob')
const utils = require('./utils')

let request
// //获取当前应用类型
const type = utils.getAppType()
console.log('type',type)
// h5
if (type == 'h5') {
  request = require('./axiosRequest')
} else if (type == 'wx') {
  // 小程序
  request = require('./wxRequest')
} else if (type == 'hap') {
  //快应用功能
}

module.exports = request
