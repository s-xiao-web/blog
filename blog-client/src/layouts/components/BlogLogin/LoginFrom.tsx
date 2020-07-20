import React, { useState } from 'react';
import { Form } from 'antd';

import LoginContext from './LoginContext';
import LoginSubmit from './LoginSubmit';
import LoginItem, { LoginItemProps } from './LoginItem';

import { LoginParamsType } from '@/api/user';

import { ValidateErrorEntity } from 'rc-field-form/lib/interface'

export interface LoginItemFace {
  onSubmit:(props: LoginParamsType) => void;
  onFinishFailed:() => void;
}

interface LoginType extends React.FC<LoginItemFace> {
  UserName: React.FunctionComponent<LoginItemProps>;
  PassWord: React.FunctionComponent<LoginItemProps>;
  LoginSubmit: React.FunctionComponent
}

const LoginForm: LoginType = props => {

  const { children, onSubmit, onFinishFailed } = props;
  const [verifyErrs, setverifyErrs] = useState();
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
        onFinish={values => onSubmit && onSubmit(values as LoginParamsType)}
        onFinishFailed={finishFailed}
        validateMessages={validateMessages}
      >{ children }</Form>
    </LoginContext.Provider>
  )
  
  function finishFailed({ errorFields }: ValidateErrorEntity) {
    setverifyErrs(errorFields);
    onFinishFailed();
  }

}

LoginForm.UserName = LoginItem.UserName;
LoginForm.PassWord = LoginItem.PassWord;
LoginForm.LoginSubmit = LoginSubmit;

export default LoginForm