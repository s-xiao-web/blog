import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
        {/* <span>scroll</span> */}
        {/* <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link> */}
        <a onClick={() => scroll.scrollTo(800)}>Scroll To 100!</a>
      </div>
    </section> 
  )
  
  // function 

}

export default BlogBanner;