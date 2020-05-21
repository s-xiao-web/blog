import React from 'react';

import style from './index.less';

const BlogBanner = () => {

  return (
    <section className={style['banner-container']}>
      <div className={style['banner-text']}>
        <span>Miracles sometimes occur</span>
        <span>but one has to work terribly for them</span>
      </div>
      <div className={style['banner-btn']}>
        <span> ^ </span>
        <span>scroll</span>
      </div>
    </section> 
  )

}

export default BlogBanner;