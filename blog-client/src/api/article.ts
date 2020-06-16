import request from '../common/request';

export const postCreateArticle = data => request.post('/article/create', {data: {comment:data}});
export const getArticleList = params => request('/article/articleList', {params: {id:2}});