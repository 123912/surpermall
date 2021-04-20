/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-20 20:54:13
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-20 20:54:14
 */
//防抖
export function debounce(func, delay) {
  let timer = null

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}