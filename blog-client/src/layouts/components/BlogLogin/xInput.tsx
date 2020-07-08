import React from 'react';
import classnames from 'classnames';

// import 'animate.css';
import styles from '@/assets/style/animate.less'
import style from './xInput.less'

import 'animate.css'

// console.log(styles);

const Xinpit = props => {

  const {
    label = '',
    placeholder = '',
    types = 'text',
    value = '',
    onChange,
    animate,
    onAnimateEnd
  } = props;

  return (
 

   <div onAnimationEnd={animateEnd} className={classnames(styles.animate__animated, style['inp-container'], { [styles.animate__shakeX]: !value && animate })}>
      <span className={style['inp-tips']}>{label}</span>
      <input
        type={types}
        className={style['inp-ele']}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )

    function animateEnd(e) {
      console.log('动画执行完成了', e);
      onAnimateEnd()
    }

}

export default Xinpit;