import React, {useEffect, useState} from 'react';

import style from './index.less';

const BlogProgress = () => {

  const [progress, setProgress] = useState({widht: 0});

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className={style['progress']} style={progress}></div>
  )

  function handleScroll() {
    const docEle = document.documentElement || document.body;
    const { scrollHeight, scrollTop, clientHeight, clientWidth } = docEle;
    const progress = Math.floor(( scrollTop / (scrollHeight - clientHeight)) * 100) / 100;
    setProgress({width: progress * clientWidth});
  }
}

export default BlogProgress