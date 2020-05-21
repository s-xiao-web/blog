import React, { useMemo, useRef } from 'react';
import { connect } from 'dva';
import { map, get } from 'lodash';
import classnames from 'classnames';


import { setTheme } from '../../../theme';
import { BlogSearch } from '../BlogSearch';

import style from './index.less';

interface option {
  type: string
}
interface props{
  readonly menu: Array<Object>,
  theme: boolean,
  dispatch: (option:option)=> void,
  scroll: number
}

const BlogHeader:React.FC<props> = props => {

  const { menu, theme, dispatch, scroll } = props;

  const currentRef = useRef();

  const currentScroll = useMemo(() => {
    const ele:any = currentRef.current;
    ele && ( ele.style.top = `-${scroll}px` )
  }, [ scroll ])

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

  // useEffect(() => scrollTop(scroll), [scroll]);

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
        <BlogSearch />
        { renderIcon }
      </div>
    </div>
  )
  
  function changeTheme() {
    dispatch({ type: 'system/changeTheme' });
  }

  function scrollTop(screenHeight) {
    
  }
}

export default connect(state => ({theme: get(state, 'system.theme')}))(BlogHeader);