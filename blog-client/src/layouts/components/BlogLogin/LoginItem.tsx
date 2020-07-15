import React from 'react';
import { Form } from 'antd'
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import styles from '@/assets/style/animate.less'
import style from './xInput.less'

import LoginContext from './LoginContext'

import 'animate.css'

import defaultData from './map.js'

const LoginItem = props => {

  const {
    label,
    animate,
    name,
    rules,
    changeVerify,
    verifyErrs,
    ...args
  } = props;


  const isAnimate = !!(!isEmpty(verifyErrs) && verifyErrs.find(val => val.name.includes(name)))
  
  return (
    <Form.Item name={name} rules={rules}>
      <div onAnimationEnd={changeVerify} className={classnames(styles.animate__animated, style['inp-container'], { [styles.animate__shakeX]: isAnimate })}>
        <span className={style['inp-tips']}>{label}</span>
        <input {...args.props} className={style['inp-ele']}/>
      </div>
    </Form.Item>
  )
  
}

let LoginItems = {}

Object.keys(defaultData).map((key) => {

  const baseProps = defaultData[key]

  LoginItems[key] = props => {
    const mergeProps = {...baseProps, ...props}
    return (
      <LoginContext.Consumer>
        {
          value => (
            <LoginItem { ...mergeProps} {...value}></LoginItem>
          )
        }
      </LoginContext.Consumer>
    )
  }

})

export default LoginItems