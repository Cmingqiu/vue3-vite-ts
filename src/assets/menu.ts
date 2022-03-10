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
    path: '/document',
    icon: 'Document'
  },
  {
    name: 'Guide',
    path: '/guide',
    icon: 'Guide'
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
