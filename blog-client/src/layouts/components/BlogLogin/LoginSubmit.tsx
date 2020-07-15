import React from 'react'
import { Button } from 'antd';

import style from './LoginSubmit.less'

const LoginSubmit = () => {
  return (
    <div className={style['btn-wrapper']}>
      <Button block type="primary" htmlType="submit">登录</Button>
    </div>
  )
}

export default LoginSubmit