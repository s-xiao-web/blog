import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

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
        <a onClick={() => handleScroll()}>Scroll To 100!</a>
      </div>
    </section> 
  )

  function handleScroll() {
    scroll.scrollTo(document.documentElement.clientHeight);
  }

}

export default BlogBanner;