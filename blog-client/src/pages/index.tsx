import React from 'react';
import { Row } from 'antd';
import style from './index.less';

import BlogBanner from '@/pages/components/home/banner'
import ArticleItem from '@/pages/components/home/ArticleItem'
export default function() {
  return (
    <div className={style.normal}>
      <BlogBanner />
      <div className={style["content-wrapper"]}>
        {/* <Row gutter={[50, 50]}> */}
        <div className={style['list-wrapper']}>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </div>
      
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
