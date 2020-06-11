import React from 'react';

import style from './index.less';

const BlogBaseLayout = (props) => {

  const { children } = props

  return (
    <div className={style['base-layout-wrapper']}>
      { children }
    </div>
  )
}

export default BlogBaseLayout;