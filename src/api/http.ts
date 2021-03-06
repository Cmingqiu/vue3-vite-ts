import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

axios.interceptors.request.use(
  (config): AxiosRequestConfig => {
    const token = localStorage.getItem('token') || ''
    if (token) {
      ;(config.headers = config.headers || {}).token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((response: AxiosResponse) => {
  const {
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
    return Promise.reject(message)
  }
})

export default axios
