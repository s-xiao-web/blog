import request from '../common/request';

export interface LoginParamsType {
  username: string;
  password: string;
}

// 用户登录：
export const postUserLogin = (data:LoginParamsType) => request.post('/user/login', { data });