import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

import XInput from './xInput'

import style from './index.less';

const BlogLogin = () => {

  const [visible, setVisible] = useState(true);

  return (
    <Modal
      visible={visible}
      footer={null}
      closable={false}
      bodyStyle={{padding: '10px'}}      
    >
      <div className={style['login-wrapper']}>
        <h3 className={style['header-wrapper']}>
          <RocketOutlined className={style['icon-line']}/>
          <span>Welcome You</span>
        </h3>
        <ul>
          <li>
            <XInput label="账号：" placeholder="这里填写登录账号" />
          </li>
          <li>
            <XInput label="密码" placeholder="这里填写密码" />
          </li>
        </ul>
        <div className={style['btn-wrapper']}>
          <Button block>登录</Button>
        </div>
        <div className={style['tips-wrapper']}>
          <span>温馨提示：登录即是注册</span>
        </div>
      </div>
    </Modal>
  )
}

export default BlogLogin;