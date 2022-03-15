import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IRequestConfig, IRequestInterceptors } from './types'

// 拦截器顺序（洋葱模型）：
// 局部请求拦截器 -> 全局请求拦截器-> 局部响应拦截器-> 全局响应拦截器

class Request {
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: IRequestInterceptors

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: IRequestConfig) => {
        console.log('全局请求拦截器')
        return config
      },
      (err) => {
        Promise.reject(err)
      }
    )

    // 局部请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )
    // 局部响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器')
        return res.data
      },
      (err) => Promise.reject(err)
    )
  }
  request<T>(config: IRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      return this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res)
          }
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }
}

export default Request
