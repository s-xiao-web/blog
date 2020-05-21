import React, { useEffect, useRef } from 'react';
import { connect } from 'dva';
import { map, get } from 'lodash';
import classnames from 'classnames';
import { Button } from 'antd';

import { setTheme } from '../../../theme';
import { BlogSearch } from '../BlogSearch';

import style from './index.less';

interface option {
  type: string
}
interface props{
  readonly menu: Array<Object>,
  theme: boolean,
  dispatch: (option:option)=> void
}

const BlogHeader:React.FC<props> = props => {

  const { menu, theme, dispatch, scroll } = props;

  console.log( 'scroll', scroll );

  const currentRef = useRef();

  const icons = classnames({
    iconfont: true,
    'theme-icon': true,
    'icon-baitian': !theme,
    'icon-dark': theme,
  })

  const renderMenuItem = map(menu, item => {
    return (
      <li className={style['menu-item-wrapper']} key={item.name}>
        <span className={style['menu-item']}>{item.name}</span>
      </li>
    )
  });

  const renderIcon = <span className={icons} onClick={changeTheme}></span>

  useEffect(() => scrollTop(scroll), [scroll]);

  return (
    <div className={style['header-container']} ref={currentRef}>
      <div className={style['header-left-wrap']}>
        <span>Artiely</span>
        <span>blog</span>
      </div>
      <div className={style['header-right-wrap']}>
        <ul className={style['menu-wrapper']}>
          { renderMenuItem }
        </ul>
        <BlogSearch />
        { renderIcon }
      </div>
    </div>
  )
  
  function changeTheme() {
    dispatch({ type: 'system/changeTheme' });
  }

  function scrollTop(screenHeight) {
    const ele:any = currentRef.current;
    if (ele) {
      const height = ele.clientHeight;
      if ( screenHeight >= 0 && screenHeight <= height + 10 ) {
        ele.style.top = `-${screenHeight}px`
      } else {
        // ele.style.top = `-${height}px`
      }
    }
  }
}

export default connect(state => ({theme: get(state, 'system.theme')}))(BlogHeader);