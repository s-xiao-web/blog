import React from 'react';

import DetailsTitle from './components/DetailsTitle';
import DetailsAnchor from './components/DetailsAnchor';
import DetailsReply from './components/DetailsReply';

import style from './index.less';

const DetailsPage = () => {
  return (
    <div className={style["details-page-wrapper"]}>
      <DetailsTitle />
      <DetailsAnchor />
      <p style={{height: '300px', background: 'red'}} id="components-anchor-demo-basic"></p>
      <p style={{height: '300px', background: 'blue'}} id="components-anchor-demo-static"></p>
      <p style={{height: '300px', background: 'yellow'}} id="components-anchor-demo-test"></p>
      <DetailsReply />
    </div>
  )
}

export default DetailsPage;