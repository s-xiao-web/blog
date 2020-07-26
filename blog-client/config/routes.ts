export const routes =  [
  {
    name: '欢迎',
    path: '/admin',
    component: '../layouts/AdminLayout',
    routes: [
      {
        name: '编辑文章',
        path: '/admin',
        component: './editor'
      },
      {
        name: '心态菜单',
        path: '/admin/setting/navigation',
        component: './admin/setting/navigation'
      }
    ]
  },
  {
    path: '/',
    component: '../layouts/BaseLayout',
    routes: [
      {
        path: '/',
        component: './index'
      }
    ]
  },
  {
    component: './404',
  }
]