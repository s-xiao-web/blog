import React from 'react';

import { BlogHeader } from './components/BlogHeader';

import { config } from '@/config';

import styles from './index.css';

const BasicLayout: React.FC = props => {

  const { menu } = config

  return (
    <div className={styles.normal}>
      <BlogHeader data={menu}></BlogHeader>
      {props.children}
    </div>
  );
};

export default BasicLayout;
