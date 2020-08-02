import extend from 'dva-model-extend';
import base from '@/models/base';

import { addMenuList, getMenuList } from '@/api/category';

export default extend(base, {

  namespace: 'admin-menu',

  state: {
    menu: []
  },

  reducers: {
  
  },

  effects: {
    *getMenu(_, {call, put}) {
      const menu = yield call(getMenuList);
      put({type: 'save', payload: {menu}})
    },
    *addMenu({ payload }, {call, put}) {
      // put({type: 'save', payload: '我是传递的参数'})
      const result = yield call(addMenuList, payload)
    }
  }
})
