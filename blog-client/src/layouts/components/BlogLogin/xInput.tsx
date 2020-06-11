import React from 'react';

import style from './xInput.less'

const Xinpit = props => {

  const {
    label = '',
    placeholder = ''
  } = props;

  return (
    <div className={style['inp-container']}>
      <span className={style['inp-tips']}>{label}</span>
      <input type="text" className={style['inp-ele']} placeholder={placeholder}/>
    </div>
  )
}

export default Xinpit;