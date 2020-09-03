import request from '../common/request';

// 获取标签
export const getLabel = () => request('/label/getLabel');

// 创建标签
export const AddLabel = data => request.post('/label/addLabel', { data });

// 删除标签
export const deleteLable = data => request.post('/label/deleteLabel', { data });