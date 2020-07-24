import React from 'react';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { SmileOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';

import style from './AdminLayout.less'

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  setting: <SettingOutlined />
};

const defaultMenus = [
  {
    path: '/',
    name: '基本设置',
    icon: 'setting',
    children: [
      {
        path: '/welcome',
        name: '导航菜单',
      }
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    icon: 'heart',
  },
];

const AdminLayout = props => {

  console.log(props);

const loopMenuItem = (menus) => 
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon],
    children: children && loopMenuItem(children),
  }));

  const renderMenuHeader = (
    <div className={style['menu-header-wrap']}>
      <div className={style['user-portait']}></div>
      <div className={style['user-nickname']}>嘻嘻哈哈</div>
    </div>
  )

  return (
    <ProLayout
      style={{
        height: '100vh',
      }}
      location={{
        pathname: '/welcome',
      }}
      collapsedButtonRender={false}
      headerRender={false}
      menuDataRender={() => loopMenuItem(defaultMenus)}
      menuHeaderRender={() => renderMenuHeader}
    >
      { props.children }
    </ProLayout>
  )
}

export default AdminLayout;