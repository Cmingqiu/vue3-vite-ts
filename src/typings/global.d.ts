type Compute<T extends object> = { [P in keyof T]: T[P] }

interface ITag {
  name: string
  path: string
  query?: object
}

interface IRouteMeta {
  requireAuth?: boolean
  keepAlive?: boolean
  title: string
}
