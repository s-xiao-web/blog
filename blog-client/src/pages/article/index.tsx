import React from 'react';
import { Row } from 'antd';

import ArticleItem from './components/ArticleItem'
import BaseLayout from '../components/baseLayout';

const ProjectPage = () => {
  // className={style['article-container']}
  return (
    <BaseLayout>
      <div>
        <Row>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </Row>
      </div>
    </BaseLayout>
  )
}

export default ProjectPage;