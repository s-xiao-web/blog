import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import BlogHeader from './components/BlogHeader';

import { config } from '../config';

import styles from './index.css';

const BasicLayout: React.FC = props => {

  const { menu } = config;
  const [top, SetTop] = useState(0);

  return (
    <Scrollbars
      className={styles.normal}
      onUpdate={handleScroll}
    >
      <BlogHeader menu={menu} scroll={top}></BlogHeader>
      {props.children}
    </Scrollbars>
  );

  function handleScroll({ scrollTop }) {
    SetTop(scrollTop);
  }
};

export default BasicLayout;
