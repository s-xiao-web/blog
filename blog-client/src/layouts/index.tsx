import React, { useState, useRef, useEffect } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import ReactDOM from 'react-dom';
import { SpringSystem } from 'rebound';
import BScroll from '@better-scroll/core'
import BlogHeader from './components/BlogHeader';

import classnames from 'classnames'

import { config } from '../config';

import { BlogSearch } from './components/BlogSearch'

require('./index.less')
import styles from './index.less';
const BasicLayout: React.FC = props => {

  const { menu } = config;
  const [ top, SetTop ] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const eleRef = useRef()

  const layout = classnames({
    'layout-container': true,
    'layout-container-more': isSearch
  })

  return (
    <div>
      <BlogSearch isSearch={ isSearch }/>
      <div className={layout}>
        <BlogHeader menu={menu} scroll={top}></BlogHeader>
        {props.children}
      </div>
    </div>
  );

};

export default BasicLayout;
