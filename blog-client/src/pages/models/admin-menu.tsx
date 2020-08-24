import extend from 'dva-model-extend';
import { get } from 'lodash';
import base from '@/models/base';

import { addMenuList, getMenuList, updateMenuList, deleteMenuList } from '@/api/category';

export default  {

  namespace: 'adminMenu',

  state: {
    menu: []
  },

  reducers: {
    save(state, { payload }) {
      console.log('上面的方法', payload);
    }
  },

  effects: {

    *getMenu(_, {call, put}) {
      const result = yield call(getMenuList);
      const menu = get(result, 'result.data', []);
      put({type: 'save', payload: {menu}})
    },

    *addMenu({ payload, callback }, {call, put}) {
      const result = yield call(addMenuList, payload);
      yield put({ type: 'getMenu' });
      callback(result);
    },

    *updateMenu({ payload, callback }, { call }) {
      const result = yield call(updateMenuList, payload);
      callback( result );
    },

    *deleteMenu({ payload, callback }, { call }) {
      const result = yield call(deleteMenuList, payload);
      callback( result )
    }
  }
}
