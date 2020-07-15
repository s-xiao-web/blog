import React from 'react';

import { RocketOutlined, CloseCircleOutlined } from '@ant-design/icons';

import style from './LoginLayout.less';

const LoginLayout = props => {

  const { dispatch, visible, onClose } = props;

  return (
    <div className={style['login-wrapper']}>
      <div className={style['header-wrapper']}>
        <h3 className={style['header-title']}>
          <RocketOutlined className={style['icon-line']}/>
          <span>Welcome You</span>
        </h3>
        <CloseCircleOutlined className={style['header-close-icon']} onClick={() => onClose(false)}/>
      </div>

      { props.children }
      
      <div className={style['tips-wrapper']}>
        <span>温馨提示：登录即是注册</span>
      </div>
    </div>
  )
  
}

export default LoginLayout