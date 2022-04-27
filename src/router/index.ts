import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

// 静态路由
const staticRoutes: RouteRecordRaw[] = [
  /* {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { requireAuth: true, keepAlive: false, icon: 'component', title: 'dashboard' },
        component: () => import('@/views/dashboard.vue')
      }
    ]
  }, */
  {
    path: '/login',
    name: 'Login',
    meta: { requireAuth: true, keepAlive: false, hidden: true, title: 'login' },
    component: () => import('@/views/login/index.vue')
  }
]

const noChildRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: { requireAuth: true, keepAlive: false, icon: 'component', title: 'dashboard' },
    component: () => import('@/views/dashboard.vue')
  },
  {
    path: 'document',
    name: 'Document',
    meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'document' },
    component: () => import('@/views/document.vue')
  },
  {
    path: 'svg',
    name: 'Svg',
    meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Box', title: 'svg' },
    component: () => import('@/views/svg.vue')
  },
  {
    path: 'tsx',
    name: 'Tsx',
    meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'tsx' },
    component: () => import('@/views/tsx.jsx')
  },
  {
    path: 'h5input',
    name: 'H5input',
    meta: { requireAuth: true, keepAlive: false, title: 'h5input' },
    component: () => import('@/views/h5input.vue')
  }
].map((r) => ({
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [r]
}))

const asyncRoutes: RouteRecordRaw[] = [
  ...noChildRoutes,
  // 外链菜单的path必须以/开头
  {
    path: '/https://www.baidu.com',
    meta: { icon: 'el-icon-Link', title: 'External Link' },
    redirect: '/'
  },
  {
    path: '/system',
    redirect: '/system/menu-manage',
    component: Layout,
    meta: { title: 'system', icon: 'el-icon-setting' },
    children: [
      {
        path: 'menu-manage',
        name: 'MenuManage',
        meta: { requireAuth: true, keepAlive: false, title: 'menu-manage' },
        component: () => import('@/views/system/menu-manage.vue')
      },
      {
        path: 'role-manage',
        name: 'RoleManage',
        meta: {
          requireAuth: true,
          keepAlive: false,
          icon: 'el-icon-setting',
          title: 'role-manage'
        },
        component: () => import('@/views/system/role-manage.vue')
      }
    ]
  },
  // 404一定放在要在最后面
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/404.vue'),
    meta: { hidden: true }
    /* component: Layout,
       children: [
      {
        path: '',
        name: 'notFound',
        meta: { requireAuth: true, keepAlive: false, hidden: true, title: '404' },
        component: () => import('@/views/404.vue')
      }
    ] */
  }
]

export const routes = [...staticRoutes, ...asyncRoutes]
const router = createRouter({
  // 部署到GitHub Page只能使用hash路由
  history: createWebHashHistory(import.meta.env.BASE_URL), //由base配置项决定。
  routes
})

export default router
