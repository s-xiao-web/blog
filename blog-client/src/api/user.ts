import request from '../common/request';

// 获取菜单路径：
export const postUserLogin = data => request.post('/user/login', {data});