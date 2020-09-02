export const routes =  [
  {
    path: '/admin',
    component: '../layouts/AdminLayout',
    routes: [
      {
        name: '菜单配置',
        exact: true,
        path: '/admin/setting/navigation',
        component: './admin/setting/navigation'
      },
      {
        name: '文章列表',
        path: '/admin/operate/list',
        exact: true,
        component: './admin/operate/list',
        routes: [
          {
            name: '文章详情',
            path: '/admin/operate/article',
            component: './admin/operate/article',

          }
        ]
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