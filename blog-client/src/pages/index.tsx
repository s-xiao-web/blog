import React from 'react';
import { Row, Pagination } from 'antd';
import style from './index.less';

import { PageLoading } from '@ant-design/pro-layout';

import BlogBanner from '@/pages/components/home/banner'
import ArticleItem from '@/pages/components/home/ArticleItem'
export default function() {
  return (
    <div className={style.normal}>
      {/* <PageLoading /> */}
      <BlogBanner />
      <div className={style["content-wrapper"]}>
        <Row>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </Row>
        <div className="pagination-wrapper">
          <Pagination
            defaultCurrent={1}
            total={50}
            hideOnSinglePage
          />
        </div>
      </div>
    </div>
  );
}
