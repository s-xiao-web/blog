import request from '../common/request';

// 获取菜单路径：
export const getMenuList = () => request('/category/getMenu');

// 新增菜单路径：
export const addMenuList = data => request.post('/category/addMenu', {data});

// 更新菜单路径：
export const updateMenuList = data => request.post('/category/updateMenu', { data });

// 删除菜单路径：
export const deleteMenuList = data => request.post('/category/deleteMenu', { data });