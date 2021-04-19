/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 23:09:15
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-17 22:06:43
 */
import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,  
  })
   //axios拦截器
  instance.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
    },error => {
    // Do something with request error
    return Promise.reject(error);
    })

    //发送真正的网络请求
    return instance(config)
}


