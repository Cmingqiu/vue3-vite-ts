/**
 * 路由钩子
 *  登录鉴权
 *  路由鉴权： 采用后端给全部权限路由表的方式，方便后台动态增删路由和菜单
 * */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '.'
import { getUserRoutesApi } from '@/api/request'
import Layout from '@/views/layout/index.vue'
import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'

NProgress.configure({ showSpinner: false })

const modules = import.meta.glob('../views/**/*.(vue|jsx)') //fast-glob匹配规则
// 无需登录即可查看的页面
const noNeedPermissionRoutes = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  document.title = `${to.meta?.title}`
  if (!noNeedPermissionRoutes.includes(to.path)) {
    // 取localStorage中是否有token，判断是否已经登录
    const token = localStorage.getItem('token')
    if (token) {
      // 是否有路由缓存
      const routesStorage = JSON.parse(localStorage.getItem('routesStorage') || 'null')
      let routes = []
      if (routesStorage) {
        routes = routesStorage
      } else {
        // 查询当前用户角色的路由表
        routes = await getUserRoutesApi<IRouteString[]>({ token })
        localStorage.setItem('routesStorage', JSON.stringify(routes))
      }
      if (router.options.routes.length === 1) {
        routes = handleRoutes(routes)
        routes.forEach((route: RouteRecordRaw) => {
          router.options.routes.push(route)
          router.addRoute(route)
        })
        router.addRoute({
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: () => import('@/views/404.vue'),
          meta: { hidden: true }
        })
        next({ ...to, replace: true })
      } else next()
    } else {
      next({ path: '/login' }) // next('/login')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

// 递归遍历路由 转换为组件对象和路径
function handleRoutes(routes: any) {
  if (!routes?.length) return []
  routes.map((route: any) => {
    if (route.component) route.component = handleComponent(route.component)
    if (route.children?.length) return handleRoutes(route.children)
  })
  return routes
}

function handleComponent(component: string): Component {
  return component === 'Layout'
    ? Layout
    : modules[`..${component}`] /* () => import('@/views/' + component) */
}
