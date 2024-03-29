import { MockMethod } from 'vite-plugin-mock'

function createAdminMockRoutes() {
  const noChildRoutes = [
    {
      path: 'document',
      name: 'Document',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'document' },
      component: '/views/document.vue'
    },
    {
      path: 'svg',
      name: 'Svg',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Box', title: 'svg' },
      component: '/views/svg.vue'
    },
    {
      path: 'tsx',
      name: 'Tsx',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'tsx' },
      component: '/views/tsx.jsx'
    },
    {
      path: 'h5input',
      name: 'H5input',
      meta: { requireAuth: true, keepAlive: false, title: 'h5input' },
      component: '/views/h5input.vue'
    },
    {
      path: 'animation',
      name: 'Animation',
      meta: { requireAuth: true, keepAlive: false, title: 'animation' },
      component: '/views/animation.vue'
    }
  ].map((r) => ({
    path: '/',
    component: 'Layout',
    redirect: '/home',
    children: [r]
  }))

  // 嵌套路由
  const hasChildRoutes = [
    {
      path: '/system',
      redirect: '/system/menu-manage',
      component: 'Layout',
      meta: { title: 'system', icon: 'el-icon-setting' },
      children: [
        {
          path: 'menu-manage',
          name: 'MenuManage',
          meta: { requireAuth: true, keepAlive: false, title: 'menu-manage' },
          component: '/views/system/menu-manage.vue'
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
          component: '/views/system/role-manage.vue'
        }
      ]
    },
    {
      path: '/case',
      redirect: '/case/virtual-scroll',
      component: 'Layout',
      meta: { title: '案例', icon: 'el-icon-setting' },
      children: [
        {
          path: 'virtual-scroll-1',
          name: 'VirtualScroll-1',
          meta: { requireAuth: true, keepAlive: false, title: 'virtual-scroll-1' },
          component: '/views/case/virtual-scroll-1.vue'
        },
        {
          path: 'virtual-scroll-2',
          name: 'VirtualScroll-2',
          meta: { requireAuth: true, keepAlive: false, title: 'virtual-scroll-2' },
          component: '/views/case/virtual-scroll-2.vue'
        },
        {
          path: 'virtual-scroll-3',
          name: 'VirtualScroll-3',
          meta: { requireAuth: true, keepAlive: false, title: 'virtual-scroll-3' },
          component: '/views/case/virtual-scroll-3.vue'
        }
      ]
    }
  ]

  const asyncRoutes = [
    ...noChildRoutes,
    // 外链菜单的path必须以/开头
    {
      path: '/https://www.baidu.com',
      meta: { icon: 'el-icon-Link', title: 'External Link' },
      redirect: '/'
    },
    ...hasChildRoutes
  ]
  return asyncRoutes
}

function createVisitorMockRoutes() {
  return [
    {
      path: '/',
      component: 'Layout',
      children: [
        {
          path: 'visitor',
          name: 'Visitor',
          meta: { requireAuth: true, keepAlive: false, icon: 'component', title: '游客专属页面' },
          component: '/views/visitor.vue'
        }
      ]
    }
  ]
}

export default [
  {
    url: '/api/user/routes',
    method: 'get',
    response: ({ query: { token } }: { query: { token: string } }) => {
      return {
        code: 0,
        message: 'success',
        data: token.includes('admin') ? createAdminMockRoutes() : createVisitorMockRoutes()
      }
    }
  }
] as MockMethod[]
