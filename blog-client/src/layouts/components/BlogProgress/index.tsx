import React, {useEffect, useState} from 'react';

import style from './index.less';

const BlogProgress = () => {

  useEffect(() => {

    window.addEventListener('scroll', function() {
      console.log( 'gundongtiaogongdongle' );
    })

  }, [])

  return (
    <div className={style['progress']}>
      我是内容
    </div>
  )
}

export default BlogProgress