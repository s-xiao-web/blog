import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

import style from './index.less';

const DetailsAncher = () => {
  return ( 
    <div className={style['anchor-wrapper']}>
      <Anchor
      // targetOffset={window.innerHeight / 2}
      //   onClick={e => e.preventDefault()}
      >
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#components-anchor-demo-test" title="Basic demo with Target" />
        {/* <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link> */}
      </Anchor>
    </div>
  )
}

export default DetailsAncher;