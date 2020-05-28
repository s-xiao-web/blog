import React, { useState, useEffect } from 'react';
import BlogHeader from './components/BlogHeader';

import classnames from 'classnames'

import { config } from '../config';

import { BlogSearch } from './components/BlogSearch'
import BlogProgress from './components/BlogProgress'

require('./index.less')
import styles from './index.less';

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

const BasicLayout: React.FC = props => {

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
    document.body['style'] = isSearch ? 'overflow: hidden; paddingRight: 8px' : ''
  }, [isSearch])

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
        ></BlogHeader>
        {props.children}
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
