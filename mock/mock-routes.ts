import { MockMethod } from 'vite-plugin-mock'

function createMockRoutes() {
  const noChildRoutes = [
    {
      path: 'dashboard',
      name: 'Dashboard',
      meta: { requireAuth: true, keepAlive: false, icon: 'component', title: 'dashboard' },
      component: 'dashboard.vue'
    },
    {
      path: 'document',
      name: 'Document',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'document' },
      component: 'document.vue'
    },
    {
      path: 'svg',
      name: 'Svg',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Box', title: 'svg' },
      component: 'svg.vue'
    },
    {
      path: 'tsx',
      name: 'Tsx',
      meta: { requireAuth: true, keepAlive: false, icon: 'el-icon-Document', title: 'tsx' },
      component: 'tsx.jsx'
    },
    {
      path: 'h5input',
      name: 'H5input',
      meta: { requireAuth: true, keepAlive: false, title: 'h5input' },
      component: 'h5input.vue'
    }
  ].map((r) => ({
    path: '/',
    component: 'Layout',
    redirect: '/dashboard',
    children: [r]
  }))

  const asyncRoutes = [
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
      component: 'Layout',
      meta: { title: 'system', icon: 'el-icon-setting' },
      children: [
        {
          path: 'menu-manage',
          name: 'MenuManage',
          meta: { requireAuth: true, keepAlive: false, title: 'menu-manage' },
          component: 'system/menu-manage.vue'
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
          component: 'system/role-manage.vue'
        }
      ]
    }
  ]
  return asyncRoutes
}

export default [
  {
    url: '/api/user/routes',
    method: 'get',
    response: ({ query }) => ({
      code: 0,
      message: 'success',
      data: createMockRoutes()
    })
  }
] as MockMethod[]
