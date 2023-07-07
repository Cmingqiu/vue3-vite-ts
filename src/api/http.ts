import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

interface AxiosConfig extends AxiosRequestConfig {
  retry?: boolean
  retryTimes?: number
  limitTimes?: number
  delay?: number
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.adapter = retryAdapterEnhancer(axios.defaults.adapter)

axios.interceptors.request.use(
  (config: AxiosConfig): AxiosConfig => {
    const token = localStorage.getItem('token') || ''
    // config.retry = config.retry || true // 默认请求失败重试
    // config.retryTimes = config.retryTimes || 0 //  请求失败重试次数
    // config.limitTimes = config.limitTimes || 5 //  请求失败重试次数上限
    config.delay = config.delay || 1500 //  请求失败重试延迟时间
    if (token) {
      ;(config.headers = config.headers || {}).token = token
    }
    // 判断get请求 防止缓存
    if (/get/i.test(config.method as string)) {
      config.params = config.params || {}
      // 添加时间戳
      config.params.t = new Date().getTime()
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response')
    const {
      config,
      status,
      data: { code, message, data }
    } = response
    if (status !== 200) {
      return Promise.reject(`'响应失败，响应码：${status}！`)
    }

    if (code === 0) {
      return data
    } else {
      ElMessage.error(message)
      // retryHandle(config)
      return Promise.reject(message)
    }
  },
  (error) => {
    // retryHandle(error.config)
    return Promise.reject(error)
  }
)

/**
 * 请求失败重试方式一
 * @param config AxiosConfig
 * @returns Promise<AxiosResponse<any, any>> | undefined
 */
function retryHandle(config: AxiosConfig) {
  if (config.retry && config.retryTimes! < config.limitTimes!) {
    config.retryTimes!++
    return sleep(config.delay!).then(() => axios(config))
  }
}

/**
 * 请求失败重试方式二
 * @param adapter
 * @param options
 * @returns
 */
function retryAdapterEnhancer(adapter: any, options = { times: 5, delay: 1500 }) {
  const { times, delay } = options
  return async (config: any) => {
    const { retryTimes = times, retryDelay = delay } = config
    let __retryCount = 0
    console.log('config')
    const request: any = async () => {
      try {
        const res = await adapter(config)
        return res
      } catch (err) {
        // 判断是否进行重试
        if (!retryTimes || __retryCount >= retryTimes) {
          return Promise.reject(err)
        }
        __retryCount++ // 增加重试次数
        // 延时处理 重新发起请求
        return sleep(retryDelay).then(() => {
          return request()
        })
      }
    }
    return request()
  }
}

/**
 * 延迟方法
 * @param time
 * @returns
 */
function sleep(time: number): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export default axios
