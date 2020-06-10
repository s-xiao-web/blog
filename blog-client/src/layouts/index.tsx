import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import classnames from 'classnames';
import { get } from 'lodash';

import BlogComp from './components/index';

import './index.less';

const { BlogSearch, BlogProgress, BlogFooter,  BlogHeader}  = BlogComp;

const data = [
  {
    id: 1,
    label: 'vue'
  },
  {
    id: 2,
    label: 'react'
  }
]

interface Props {
  location: PathName;
  menuList: Array<object>
}
interface PathName {
  pathname:  string,
}

const BasicLayout: React.FC<Props> = props=> {

  const {
    location: { pathname },
    menuList,
    dispatch
  } = props;
  const [ top, setTop ] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState(data);
  
  const layout = classnames({
    'layout-container': true,
    'layout-container-more': isSearch
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTop(document.documentElement.scrollTop);
    })
    return () => window.removeEventListener('scroll', () => null);
  }, [])

  useEffect(() => {
    const bodyStyle = document.body.style
    bodyStyle.overflow  = isSearch ? 'hidden' : ''
    bodyStyle.paddingRight = isSearch ? '8px' : ''
  }, [isSearch])

  useEffect(() => {
    dispatch({
      type: 'system/getMenu',
      callback(){
        console.log( '回调函数' );
      }
    })
  }, [])

  return (
    <div className="layout-wrap">
      <BlogSearch
        esc
        data={searchData}
        onChange={onInpChange}
        isSearch={isSearch}
        onClose={changeClose}
      />
      <div className={layout}>
        <BlogHeader
          menu={menuList}
          scroll={top}
          onToggle={changeState}
          currentPath={pathname}
        ></BlogHeader>
        {props.children}
        <BlogFooter />
      </div>
      <BlogProgress />
    </div>
  );
  
  function changeState() {
    setIsSearch(true)
  }

  function changeClose() {
    setIsSearch(false)
    setSearchData([])
  }
  
  function onInpChange(val) {
    console.log('输入了', val);
  }

};

export default connect(state => ({menuList: get(state, 'system.menuList')}))(BasicLayout);
