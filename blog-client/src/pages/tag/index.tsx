import React from 'react';


import style from './index.less';

function TagPage() {

  const renderTagItem = new Array(30).fill(1).map((item, index) => {
    return (
      <li className={style['tag-item']} key={index}>
        <span className={style['tag-name']}>React </span>
        <span className={style['tag-num']}> （ {index} ）</span>
      </li>
    )
  })

  return (
    <ul className={style['tag-page-wrapper']}>
      { renderTagItem }
    </ul>
  )

}

export default TagPage;