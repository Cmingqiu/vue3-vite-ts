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
    response: ({ body: { username } }) => {
      if (username !== 'admin' && username !== 'visitor')
        return {
          code: -1,
          message: '登录用户不存在'
        }
      return {
        code: 0,
        message: 'success',
        data: {
          token: `token-${username}-123456`,
          role: username
        }
      }
    }
  }
] as MockMethod[]
