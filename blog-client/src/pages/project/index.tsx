import React from 'react';
import { Row } from 'antd';

import ArticleItem from './components/ArticleItem'

import style from './index.less';

const ProjectPage = () => {

  return (
    <div className={style['article-container']}>
      <Row>
        <ArticleItem />
        <ArticleItem />
      </Row>
    </div>
  )
}

export default ProjectPage;