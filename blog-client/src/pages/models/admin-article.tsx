import extend from 'dva-model-extend';
import { get } from 'lodash';
import base from '@/models/base';

import { addArticle, getArticleList, deleteArticle } from '@/api/article';

export default extend(base, {

  namespace: 'adminArticle',

  state: {
    menu: []
  },

  reducers: {},

  effects: {

    *addArticles({ payload, callBack }, {call, put}) {
      const result = yield call(addArticle, payload);
      callBack(result)
    },

    *deleteArticle({payload, callBack}, {call}) {
      const result = yield call(deleteArticle, payload)
      callBack(result);
    },

    *getList({ payload, callBack }, { call }) {
      const result = yield call(getArticleList);
      callBack(result)
    }

  }
})
