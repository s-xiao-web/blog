import React, { useState } from 'react';
import { connect } from 'dva';
import { get } from 'lodash';
import { Modal, Button, message, Tooltip } from 'antd';
import { RocketOutlined, CloseCircleOutlined } from '@ant-design/icons';

import XInput from './xInput';

import style from './index.less';

const BlogLogin = props => {

  const { dispatch, visible, onClose } = props;

  const [info, setInfo] = useState({username: '', password: ''});

  return (
    <Modal
      visible={visible}
      footer={null}
      keyboard
      closable={false}
      bodyStyle={{padding: '10px'}}
      afterClose={() => setInfo({})}
    >
      <div className={style['login-wrapper']}>
        <div className={style['header-wrapper']}>
          <h3 className={style['header-title']}>
            <RocketOutlined className={style['icon-line']}/>
            <span>Welcome You</span>
          </h3>
          <CloseCircleOutlined className={style['header-close-icon']} onClick={() => onClose(false)}/>
        </div>
        <ul>
          <li>
            <Tooltip 
              title="prompt text"
              visible
              getPopupContainer={() => }
              >
              <XInput
                label="账号："
                value={info.username}
                placeholder="这里填写登录账号"
                onChange={val => changeInp('username', val)}/>
            </Tooltip>
          </li>
          <li>
            <XInput 
              label="密码"
              value={info.password}
              type="password"
              placeholder="这里填写密码" 
              onChange={val => changeInp('password', val)}/>
          </li>
        </ul>
        <div className={style['btn-wrapper']}>
          <Button block onClick={login}>登录</Button>
        </div>
        <div className={style['tips-wrapper']}>
          <span>温馨提示：登录即是注册</span>
        </div>
      </div>
    </Modal>
  )

  function changeInp(key, val) {
    setInfo({...info, [key]: val})
  }

  function login() {
    dispatch({
      type: 'system/postUserLogin',
      payload: info,
      callback: res => {
        const { data: {code, msg} } = res
        if(code) {
          message.error(res.msg);
        } else {
          onClose(false); 
          message.success('Welcome to you');
        }
      }
    })
  }
}

export default connect(({ system }) => {
  return {}
})(BlogLogin);