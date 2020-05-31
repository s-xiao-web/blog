import React from 'react';
import { Col } from 'antd';

import style from './ArticleItem.less'

const ArticleItem = () => {
  return (
    <Col span={12}>
      <div className={style['article-item-container']}>
        <ul className={style['item-header']}>
          <li>1</li>
          <li>1</li>
        </ul>
        <ul className={style['item-container']}>
          <li>tulip-scroll</li>
          <li>一个移动端多场景下拉刷新组件</li>
        </ul>
        <ul className={style['item-footer']}>
          <li>vu</li>
          <li>react</li>
          <li>angular</li>
        </ul>
      </div>
    </Col>
  )
}

export default ArticleItem