import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/currentUser',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: 'zc'
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    response: {
      code: 0,
      data: 'login success'
    }
  }
] as MockMethod[]
