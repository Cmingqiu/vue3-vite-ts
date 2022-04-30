import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/currentUser',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          name: 'VUE3 admin'
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    response: {
      code: 0,
      message: 'success',
      data: 'token-admin-123456'
    }
  }
] as MockMethod[]
