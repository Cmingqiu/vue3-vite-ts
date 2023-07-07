import { MockMethod } from 'vite-plugin-mock'

const LIST = new Array(100).fill(0).map((v, i) => ({ name: `item_${i + 1}`, id: i + 1 }))

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
    /* 模拟请求状态码异常
    rawResponse(req, res) {
      res.statusCode = 401
      res.end()
    } */
    response: ({ body: { username } }) => {
      /*  return {
        code: -1,
        message: '登录用户不存在'
      } */
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
  },
  // 分页列表
  {
    url: '/api/getPageList',
    method: 'GET',
    timeout: 1000,
    response({ query: { page_number = 1, page_size = 10 } }) {
      //接收到是string类型？
      // 转number
      page_number = +page_number
      page_size = +page_size
      // 当前页
      const start = (page_number - 1) * page_size
      const end = start + page_size
      const data = LIST.slice(start, end)

      return {
        code: 0,
        message: 'success',
        data: {
          total: LIST.length, // 总页数
          records: data,
          current: page_number,
          size: page_size
        }
      }
    }
  }
] as MockMethod[]
