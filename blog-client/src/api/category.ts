import request from '../common/request';

// 获取菜单路径：
export const getMenuList = () => request('/category/getMenu');