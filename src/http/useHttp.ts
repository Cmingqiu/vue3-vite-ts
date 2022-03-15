import Request from '.'

// 封装请求方法
export const useRequest = new Request({
  baseURL: '/test',
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('局部请求拦截器', config)
      return config
    },
    responseInterceptors: (result) => {
      console.log('局部响应拦截器', result)
      return result
    }
  }
})
