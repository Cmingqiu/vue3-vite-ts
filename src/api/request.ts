import { ILoginParams, IResponse } from '@/typings/login'
import http from './http'

// 登录
export function login(data: ILoginParams): Promise<IResponse> {
  return http.post('/login', data)
}

// 获取当前用户信息
export function getUser() {
  return http.get('/currentUser')
}

// 获取当前用户的权限路由
export function getUserRoutes<T>({ token }: { token: string }) {
  return http.get<T, T>('/user/routes', { params: { token } })
}
