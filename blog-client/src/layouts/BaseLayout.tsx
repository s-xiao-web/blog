import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import classnames from 'classnames';
import { get, eq } from 'lodash';

import { useKeyPress } from '@/hooks/useKeyPress'

import BlogComp from './components/index';
import './index.less';

const { BlogSearch, BlogProgress, BlogFooter, BlogHeader, BlogBaseLayout, BlogLogin } = BlogComp;

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
  location?: PathName;
  menuList?: Array<object>
}
interface PathName {
  pathname:  string,
}

const BasicLayout: React.FC<Props> = props=> {

  console.log(props);

  const {
    location: { pathname },
    menuList,
    dispatch
  } = props;

 

  const [ top, setTop ] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState(data);
  const [visibleDialog, setVisibleDialog] = useState(false)

  const renderChildLayout = eq(pathname, '/') ? props.children : <BlogBaseLayout>{ props.children }</BlogBaseLayout>

  const layout = classnames({
    'layout-container': true,
    'layout-container-more': isSearch
  })


  useKeyPress({
    eventName: 'scroll',
    func: () => setTop(document.documentElement.scrollTop)
  })

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
  }, [dispatch])

  return (
    <div className="layout-wrap">
      <BlogSearch
        esc
        data={searchData}
        isSearch={isSearch}
        onChange={onInpChange}
        onClose={changeClose}
      />
      <div className={layout}>
        <BlogHeader
          menu={menuList}
          scroll={top}
          onClickBtn={changeVisible}
          onToggle={changeState}
          currentPath={pathname}
        ></BlogHeader>
          { renderChildLayout }
        <BlogLogin visible={visibleDialog} onClose={(val:boolean) => setVisibleDialog(val)} />
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

  function changeVisible() {
    setVisibleDialog(true);
  }
  
};

export default connect(state => ({menuList: get(state, 'system.menuList')}))(BasicLayout);
