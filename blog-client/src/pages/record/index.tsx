import React from 'react';
import { Timeline, Icon } from 'antd';

import style from './index.less';

const RecordPage = () => {

  const renderTimeLineItem = new Array(21).fill(1).map((item, index) => {
    return (
      <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '12px' }} />}>
        <p>2015-09-01</p>
        <p className={style['record-txt']}>Create a services site</p>
      </Timeline.Item>
    )
  })

  return (
    <div className={style["record-page-wrapper"]}>
      <Timeline mode="alternate">
        {renderTimeLineItem}
      </Timeline>
    </div>
  )

}

export default RecordPage;