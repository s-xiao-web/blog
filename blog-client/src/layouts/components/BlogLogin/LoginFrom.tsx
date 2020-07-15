import React, { useState } from 'react';
import { Form } from 'antd'

import LoginContext from './LoginContext.js'

import LoginItem from './LoginItem'

const LoginForm = props => {

  const { children, onFinish, onFinishFailed } = props;

  const [verifyErrs, setverifyErrs] = useState([]);

  const validateMessages = { required: "" };
  
  return (
    <LoginContext.Provider 
      value={{
        verifyErrs,
        changeVerify() {
          setverifyErrs([])
        }
      }}
    >
      <Form 
        onFinish={onFinish}
        onFinishFailed={finishFailed}
        validateMessages={validateMessages}
      >{ children }</Form>
    </LoginContext.Provider>
  )
  
  function finishFailed({ values, errorFields }) {
    setverifyErrs(errorFields)
    onFinishFailed({values, errorFields})
  }

}


LoginForm.UserName = LoginItem.UserName;
LoginForm.PassWord = LoginItem.PassWord;

export default LoginForm