type Compute<T extends object> = { [P in keyof T]: T[P] }

declare module 'nprogress'

interface ITag {
  name: string
  path: string
  query?: object
  meta: ?IRouteMeta
}

interface ITagStoreState {
  tagList: Array<ITag>
}

// 从服务端获取到的路由表
interface IRouteString {
  name?: string
  path: string
  component: string
  meta?: IRouteMeta
  redirect?: string
  children?: IRoute[]
}

interface IRouteMeta {
  requireAuth?: boolean
  keepAlive?: boolean
  title?: string
  icon?: string
  hidden?: boolean
}
