import React from 'react';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { Form } from 'antd'

import defaultData from './map';
import LoginContext, { LoginContextProps } from './LoginContext';

import styles from '@/assets/style/animate.less';
import style from './LoginItem.less';
// import 'animate.css';

import { FormItemProps } from 'antd/es/form/FormItem';

interface DefaultFaces extends LoginItemType {
  [T:string]: any;
}
export type WrappedLoginItemProps = LoginItemProps;
export type LoginItemKeyType = keyof typeof defaultData;
export interface LoginItemType {
  UserName: React.FC<WrappedLoginItemProps>;
  PassWord: React.FC<WrappedLoginItemProps>;
}
export interface LoginItemProps extends Partial<FormItemProps> {
  style?: React.CSSProperties;
  placeholder?: string;
  buttonText?: React.ReactNode;
  countDown?: number;
  getCaptchaButtonText?: string;
  getCaptchaSecondText?: string;
  type?: string;
  defaultValue?: string;
  customProps?: { [key: string]: unknown };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  rules: any[];
  verifyErrs: LoginContextProps['verifyErrs'];
  changeVerify: LoginContextProps['changeVerify'];
}

const LoginItems: Partial<LoginItemType> = {}

const getFormItemOptions = ({
  onChange,
  defaultValue,
  customProps = {},
  rules,
}: LoginItemProps) => {
  const options: {
    rules?: LoginItemProps['rules'];
    onChange?: LoginItemProps['onChange'];
    initialValue?: LoginItemProps['defaultValue'];
  } = {
    rules: rules || (customProps.rules as LoginItemProps['rules']),
  };
  if (onChange) {
    options.onChange = onChange;
  }
  if (defaultValue) {
    options.initialValue = defaultValue;
  }
  return options;
};

const LoginItem: React.FC<LoginItemProps>= props => {

  const {
    label,
    name,
    rules,
    changeVerify,
    verifyErrs,
    ...restProps
  } = props;

  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  const isAnimate = !!(!isEmpty(verifyErrs) && verifyErrs.find(val => val.name.includes(name)));

  return (
    <Form.Item name={name} {...options}>
      <div onAnimationEnd={changeVerify} className={classnames(styles.animate__animated, style['inp-container'], { [styles.animate__shakeX]: isAnimate })}>
        <span className={style['inp-tips']}>{label}</span>
        <input {...restProps.params} className={style['inp-ele']} />
      </div>
    </Form.Item>
  )
  
}

Object.keys(defaultData).map((key) => {

  const baseProps:any = defaultData[key];

  LoginItems[key] = (props: LoginItemProps) => {

    const mergeProps = {...baseProps, ...props, ...(baseProps.params)}

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

export default LoginItems as LoginItemType;