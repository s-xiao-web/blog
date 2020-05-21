import React from 'react';
import styles from './index.css';

import BlogBanner from '@/pages/components/home/banner'

export default function() {
  return (
    <div className={styles.normal}>
      <BlogBanner />

      {
        new Array(100).fill(1).map((item, index) => {
          return (
            <h1 key={index}>{index}</h1>
          )
        })
      }

    </div>
  );
}
