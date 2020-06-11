import React, { useMemo, useRef, useEffect } from 'react';
import { connect } from 'dva';
import { map, get } from 'lodash';
import classnames from 'classnames';
import router from 'umi/router';

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
    currentPath
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

  const renderIcon = <span className={icons} onClick={changeTheme}></span>

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
          <span>图</span>
        </div>
        { renderIcon }
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

export default connect(state => ({isLogin: get(state, 'system.isLogin')}))(BlogHeader);