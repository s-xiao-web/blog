import request from '../common/request';

export const postCreateArticle = data => request.post('/article/create', {data: {comment:data}});
// export const getArticleList = params => request('/article/articleList', {params: {id:5}});

// 添加文章
export const addArticle = data => request.post('/article/addArticle', { data });

// 获取文章列表
export const getArticleList = () => request('/article/getArticleList');

// 删除文章
export const deleteArticle = data => request.post('/article/deleteArticle', { data });