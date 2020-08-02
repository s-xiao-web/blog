import request from '../common/request';

// 获取菜单路径：
export const getMenuList = () => request('/category/getMenu');

// 新增菜单路径：
export const addMenuList = data => {
  console.log(data, '这个是请求的data');
  return request.post('/category/addMenu', {data});
}