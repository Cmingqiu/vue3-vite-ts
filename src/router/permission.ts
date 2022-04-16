/**
 * 采用后端给全部权限路由表的方式，方便后台动态增删路由和菜单
 * */
import router from '.'

// 无需登录无需权限的路由，可以直接访问
const filterRoutes = ['/login']

router.beforeEach((to, from, next) => {
  document.title = `动态路由${to.meta.title}`
  if (filterRoutes.includes(to.path)) {
    next()
    return
  }
})
