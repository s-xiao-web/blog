import React from 'react'
import { Button } from 'antd';

import style from './LoginSubmit.less'

const LoginSubmit: React.FC = ({ children }) => {
  return (
    <div className={style['btn-wrapper']}>
      <Button block type="primary" htmlType="submit">{ children }</Button>
    </div>
  )
}

export default LoginSubmit