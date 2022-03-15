import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: unknown) => void

  responseInterceptors?: <T = AxiosResponse>(res: T) => T
  responseInterceptorsCatch?: (err: unknown) => void
}

export interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors
}
