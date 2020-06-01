import React, { useState, useEffect } from 'react';

import classnames from 'classnames';

import { config } from '../config';

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
  location: PathName,
}
interface PathName {
  pathname:  string,
}

const BasicLayout: React.FC<Props> = props=> {

  const { location: {pathname} } = props;
  const { menu } = config;
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
    document.onmousedown = () => false;
    document.onselectstart = () => false;
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
          menu={menu}
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

export default BasicLayout;
