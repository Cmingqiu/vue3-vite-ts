export interface IMenuItem {
  name: string
  path: string
  icon?: string
  children?: Array<IMenuItem>
  hidden?: boolean
}

const menuList: IMenuItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'component'
  },
  {
    name: 'Document',
    path: '/document',
    icon: 'el-icon-Document'
  },
  {
    name: 'Svg',
    path: '/svg',
    icon: 'el-icon-Box'
  },
  {
    name: 'Tsx',
    path: '/tsx',
    icon: 'el-icon-Document'
  },
  {
    name: 'Baidu',
    path: 'https://www.baidu.com/',
    icon: 'el-icon-Link'
    // hidden: true
  },
  {
    name: 'System',
    path: '/system',
    icon: 'el-icon-setting',
    // hidden: true,
    children: [
      {
        name: 'Menu Manage',
        path: '/system/menu-manage'
      },
      {
        name: 'Role Manage',
        path: '/system/role-manage',
        icon: 'el-icon-setting'
      }
    ]
  }
]

export default menuList
