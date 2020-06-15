import React from 'react';

import style from './xInput.less'

const Xinpit = props => {

  const {
    label = '',
    placeholder = '',
    type = 'text',
    onChange
  } = props;

  return (
    <div className={style['inp-container']}>
      <span className={style['inp-tips']}>{label}</span>
      <input
        type={type} 
        className={style['inp-ele']} 
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Xinpit;