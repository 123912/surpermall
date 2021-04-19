/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 23:20:05
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-16 23:36:07
 */
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
  
}
