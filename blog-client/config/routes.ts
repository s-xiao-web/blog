export const routes =  [
  {
    path: '/admin',
    component: '../layouts/AdminLayout',
    routes: [
      {
        path: '/admin',
        component: './editor'
      },
      {
        path: '/admin/setting',
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