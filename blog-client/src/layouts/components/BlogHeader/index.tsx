import React, { useMemo, useRef } from 'react';
import { connect } from 'dva';
import { map, get } from 'lodash';
import classnames from 'classnames';
import router from 'umi/router';
import { Avatar, Dropdown, Menu, Icon } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import style from './index.less';


interface option {
  type: string
}
interface props{
  readonly menu: Array<Object>,
  isLogin: boolean,
  dispatch: (option:option)=> void,
  scroll: number
}

const BlogHeader:React.FC<props> = props => {
  
  const { 
    menu, 
    isLogin,
    dispatch, 
    scroll, 
    onToggle,
    onClose,
    currentPath,
    changeVisible,
    onClickBtn,
    token
  } = props;

  const currentRef = useRef();

  const currentScroll = useMemo(() => {
    const ele:any = currentRef.current;
    ele && ( ele.style.top = `-${scroll}px` )
  }, [ scroll ])

  const icons = classnames({
    iconfont: true,
    'theme-icon': true,
    'icon-baitian': !isLogin,
    'icon-dark': isLogin,
  })
  
  const renderMenuItem = map(menu, ({value, path}) => {
    return (
      <li 
        className={classnames('menu-item-wrapper', {
          'nav-active': path === currentPath
        })}
        key={value}
        onClick={() => goToNavPage(path)}
        >
        <span className={style['menu-item']}>{value}</span>
      </li>
    )
  });

  const $userMenu = (
    <Menu>
      <Menu.Item>
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  )
  
  const userDropDown = (
    <Dropdown overlay={$userMenu} placement="bottomCenter">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Avatar size={34} icon={<UserOutlined />} style={{ backgroundColor: '#f56a00' }}/>
      </a>
    </Dropdown>
  )

  const renderIcon = token ? (userDropDown):(<span className={style['login-btn']} onClick={() => onClickBtn()}>Login</span>)

  return (
    <div className={style['header-container']} ref={currentRef} style={{ currentScroll }}>
      <div className={style['header-left-wrap']}>
        <span>Artiely</span>
        <span>blog</span>
      </div>
      <div className={style['header-right-wrap']}>
        <ul className={style['menu-wrapper']}>
          { renderMenuItem }
        </ul>
        <div className={style['search-btn']} onClick={() => onToggle()}>
          <Icon type="search" />
        </div>
        {renderIcon}
      </div>
    </div>
  )
  
  function changeTheme() {
    if ( isLogin ) return
    dispatch({
      type: 'system/visbleLogin',
      payload: !isLogin
    });
  }

  function changeLayout() {
    dispatch({  })
  }

  function goToNavPage(path) {
    router.push(path);
  }
}

export default connect(state => ({
  isLogin: get(state, 'system.isLogin'),
  token: get(state, 'system.token')
}))(BlogHeader);