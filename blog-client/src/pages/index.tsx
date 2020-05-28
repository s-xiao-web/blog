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
        <Row >
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </Row>
      </div>
    </div>
  );
}
