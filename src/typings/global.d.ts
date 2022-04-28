type Compute<T extends object> = { [P in keyof T]: T[P] }

declare module 'nprogress'

interface ITag {
  name: string
  path: string
  query?: object
}

interface ITagStoreState {
  tagList: Array<ITag>
}

interface IRouteMeta {
  requireAuth?: boolean
  keepAlive?: boolean
  title: string
}
