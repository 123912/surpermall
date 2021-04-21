/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-21 11:02:43
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-21 11:11:39
 */
import {request} from './request'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}