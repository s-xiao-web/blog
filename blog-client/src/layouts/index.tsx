import React, { useState, useRef, useEffect } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem } from 'rebound';

import BlogHeader from './components/BlogHeader';

import { config } from '../config';

import styles from './index.css';

import Scrollbars from './components/htasd'


// const springSystem = new SpringSystem();
// const spring = springSystem.createSpring();

const BasicLayout: React.FC = props => {

  const { menu } = config;
  const [ top, SetTop ] = useState(0);
  const eleRef = useRef()

  // useEffect(() => {
  //   spring.addListener({ onSpringUpdate: handleSpringUpdate });
  //   return () => {
  //     springSystem.removeAllListeners();
  //   }
  // }, [])

  return (
    <Scrollbars
      className={styles.normal}
      onUpdate={handleScroll}
      // thumbMinSize={100}
      ref={eleRef}
    >
      <BlogHeader menu={menu} scroll={top}></BlogHeader>
      {props.children}
      <button onClick={handleMenu}>123123</button>
    </Scrollbars>
  );

  function handleScroll({ scrollTop }) {
    console.log( scrollTop );
    SetTop(scrollTop);
  }

  function handleSpringUpdate() {
    // const scrollbars:any = eleRef.current
    // const val = spring.getCurrentValue();
    // scrollbars.scrollTop(val);
  }

  function handleMenu(t) {
    console.log(t);
    const scrollbars: any = eleRef.current
    const scrollHeight = scrollbars.getScrollHeight();
    console.log( scrollHeight );
    // console.log( document.body.clientHeight   );
    // console.log( scrollHeight );

    scrollbars.scrollTop(660 );

    // console.log(top);
    // const scrollbars: any = eleRef.current
    // // scrollbars.scrollTop(0)
    // const scrollTop = scrollbars.getScrollTop();
    // spring.setCurrentValue(scrollTop).setAtRest();
    // spring.setEndValue(0);

  }
};

export default BasicLayout;
