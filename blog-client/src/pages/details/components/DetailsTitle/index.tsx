import React from 'react';

import img from '../../../../assets/20200429100126.png'

import style from './index.less';

const DetailsTitle = () => {
  return (
    <div className={style["title-wrapper"]}>
      <div className={style["details-cover"]}>
        <img src={ img } alt="" className={style['cover-img']}/>
      </div>
      <ul className={style['details-info']}>
        <li>
          <span>主题：</span>
          <span>vuepress-plugin-auto-front-matter</span>
        </li>
        <li>
          <span>作者：</span>
          <span>Artiely</span>
        </li>
        <li>
          <span>标签：</span>
          <span>#vur #react</span>
        </li>
        <li>
          <span>时间：</span>
          <span>2020-03-09</span>
        </li>
        <li>
          <span>地点：</span>
          <span>Chimd</span>
        </li>
        <li>
          <span>文字：</span>
          <span>101</span>
        </li>
        <li>
          <span>阅读：</span>
          <span>1 min read</span>
        </li>
      </ul>
    </div>
  )
}

export default DetailsTitle;