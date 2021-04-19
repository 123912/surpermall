/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 16:34:58
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-16 18:00:00
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

