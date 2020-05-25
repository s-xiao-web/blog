import React from 'react';
import classnames from 'classnames';

import style from './search-item.less';

const SerachItem = props => {

  const { value, children, onChange, isActive } = props

  return (
    <li className={
      classnames(style['search-item'], {
        active: isActive
      })
    } onClick={clickItem}>{ children }</li>
  )
  
  function clickItem() {
    onChange({ value, label:children })
  }

}

export default SerachItem;