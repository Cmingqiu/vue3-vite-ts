import type { ILoginParams, ILoginResponse } from '@/typings/login'
import { AxiosResponse } from 'axios'
import http from './http'

// 登录
export function loginApi(data: ILoginParams): Promise<ILoginResponse> {
  return http.post('/login', data)
}

// 获取当前用户信息
export function getUser() {
  return http.get('/currentUser')
}

// 获取当前用户的权限路由
export function getUserRoutesApi<T>({ token }: { token: string }) {
  return http.get<T, T>('/user/routes', { params: { token } })
}

// 查询分页列表
/**
 *
 * @param params
 * @returns
 */
interface PageParams {
  page_number: number
  page_size: number
}
export function getPageList(params: PageParams) {
  return http.get<AxiosResponse<ResponseType<{ name: string; id: number }[]>>>('/getPageList', {
    params
  })
}
type ResponseType<T = any> = {
  code: number
  message: string
  data: T
}
