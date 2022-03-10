interface IMenuItem {
  name: string
  path: string
  icon?: string
  children?: Array<IMenuItem>
}

const menuList: IMenuItem[] = [
  {
    name: 'dashboard',
    path: '/',
    icon: 'setting'
  },
  {
    name: 'Document',
    path: '/document'
  },
  {
    name: 'Guide',
    path: '/guide'
  },
  {
    name: 'System',
    path: '/system',
    icon: 'setting',
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
