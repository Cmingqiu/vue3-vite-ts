import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'guide',
        name: 'Guide',
        component: () => import('@/views/guide.vue')
      },
      {
        path: 'document',
        name: 'Document',
        component: () => import('@/views/document.vue')
      }
    ]
  },
  {
    path:'/system',
    component:Layout,
    children:[
      {
        path: 'menu-manage',
        name: 'MenuManage',
        component: () => import('@/views/system/menu-manage.vue')
      },
      {
        path: 'role-manage',
        name: 'RoleManage',
        component: () => import('@/views/system/role-manage.vue')
      },
      
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
