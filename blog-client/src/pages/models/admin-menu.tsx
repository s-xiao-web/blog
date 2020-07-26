import extend from 'dva-model-extend';
import base from '@/models/admin-menu';

export default {

  namespace: 'admin-menu',

  state: {

  },

  reducers: {

  },

  effects: {
    *addMenu(payload, {call, put}) {
      console.log('这个effects执行了');
    }
  }
}