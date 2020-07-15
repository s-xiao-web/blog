import React from 'react';

import { connect, Dispatch } from 'dva';
import { Modal, message } from 'antd';

import LoginForm from './LoginFrom'
import LoginSubmit from './LoginSubmit'
import LoginLayout from './LoginLayout'

const { UserName, PassWord } = LoginForm;

interface LoginProps {
  dispatch: Dispatch,
  visible: boolean,
  onClose: ( e:boolean ) => void
}

const BlogLogin:React.FC<LoginProps> = (props: LoginProps) => {

  const { dispatch, visible, onClose } = props;

  return (
    <Modal
      visible={visible}
      footer={null}
      keyboard
      closable={false}
      bodyStyle={{padding: '10px'}}
    >
      <LoginLayout>
        <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed}>

          <UserName
            label="账号："
            name='username'
            rules={[{ required: true }]}
          ></UserName>

          <PassWord
            label="密码："
            name='password'
            rules={[{ required: true }]}
          ></PassWord>

          <LoginSubmit />

        </LoginForm>
      </LoginLayout>
    </Modal>
  )
  
  function onFinish(val) {
    dispatch({
      type: 'system/postUserLogin',
      payload: val,
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

  function onFinishFailed() {
    message.warning('喂喂，是不是少写了点东西？')
  }

}

export default connect(({ system }) => {})(BlogLogin);