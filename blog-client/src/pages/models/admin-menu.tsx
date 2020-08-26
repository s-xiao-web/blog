import extend from 'dva-model-extend';
import { get } from 'lodash';
import base from '@/models/base';

import { addMenuList, getMenuList, updateMenuList, deleteMenuList } from '@/api/category';

export default extend(base, {

  namespace: 'adminMenu',

  state: {
    menu: []
  },

  reducers: {},

  effects: {

    *getMenu(_, {call, put}) {
      const result = yield call(getMenuList);
      const menu = get(result, 'data', []);
      yield put({type: 'save', payload: { menu }});
    },

    *addMenu({ payload, callback }, {call, put}) {
      const result = yield call(addMenuList, payload);
      yield put({ type: 'getMenu' });
      callback(result);
    },

    *updateMenu({ payload, callback }, { call, put }) {
      const result = yield call(updateMenuList, payload);
      yield put({ type: 'getMenu' });
      callback( result );
    },

    *deleteMenu({ payload, callback }, { call, put }) {
      const result = yield call(deleteMenuList, payload);
      yield put({ type: 'getMenu' });
      callback( result )
    },

    *localUpdateMenu({ payload }, { put }) {

    }
  }
})
