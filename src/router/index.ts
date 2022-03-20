import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { requireAuth: true, keepAlive: false, title: 'dashboard' },
        component: () => import('@/views/dashboard.vue')
      }
    ]
  }
]

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'document',
        name: 'Document',
        meta: { requireAuth: true, keepAlive: false, title: 'document' },
        component: () => import('@/views/document.vue')
      },
      {
        path: 'svg',
        name: 'Svg',
        meta: { requireAuth: true, keepAlive: false, title: 'svg' },
        component: () => import('@/views/svg.vue')
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    meta: { title: 'system' },
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
        meta: { requireAuth: true, keepAlive: false, title: 'role-manage' },
        component: () => import('@/views/system/role-manage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requireAuth: true, keepAlive: false, title: 'login' },
    component: () => import('@/views/login/index.vue')
  },
  // 404一定放在要在最后面
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Layout,
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        meta: { requireAuth: true, keepAlive: false, title: '404' },
        component: () => import('@/views/404.vue')
      }
    ]
  }
]

export const routes = [...constantRoutes, ...asyncRoutes]
const router = createRouter({
  history: createWebHashHistory('/vue3-vite-ts'),
  routes
})

export default router
