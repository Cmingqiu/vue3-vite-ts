import { ILoginParams, IResponse } from '@/typings/login'
import http from './http'

// 登录
export function login(data: ILoginParams): Promise<IResponse> {
  return http.post('/login', data)
}

// 获取当前用户
export function getUser() {
  return http.get('/currentUser')
}
