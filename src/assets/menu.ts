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
    icon: 'setting'
  },
  {
    name: 'Document',
    path: '/document',
    icon: 'Document'
  },
  {
    name: 'Guide',
    path: '/guide',
    icon: 'Guide'
  },
  {
    name: 'Baidu',
    path: 'https://www.baidu.com/',
    icon: 'Link'
    // hidden: true
  },
  {
    name: 'System',
    path: '/system',
    icon: 'setting',
    // hidden: true,
    children: [
      {
        name: 'Menu Manage',
        path: '/system/menu-manage'
      },
      {
        name: 'Role Manage',
        path: '/system/role-manage',
        icon: 'setting'
      }
    ]
  }
]

export default menuList
