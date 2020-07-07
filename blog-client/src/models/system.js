import { get } from 'lodash';

import LocalUtil from '../utils/localstorage'

import { getMenuList } from '../api/category';
import { postUserLogin } from '../api/user';



export default {

  namespace: 'system',
  
  state: {
    theme: true,
    isSearch: false,
    isLogin: false,
    menuList: [],
    token: LocalUtil.getLocal('token') || ''
  },

  reducers: {
    save: (state, { payload }) => ({...state, ...payload})
  },

  effects: {
    *changeTheme(_, { put, select}) {
      const { theme } =yield select(state => ({theme: get(state, 'system.theme')}));
      yield put({type: 'save', payload: { theme: !theme }})
    },

    *visbleLogin(payload, { put, select }) {
      yield put({type: 'save', payload: { isLogin: payload }});
    },

    *getMenu({callback}, { call, put }) {
      const result = yield call(getMenuList);
      const menuList = result.data;
      yield put({type: 'save', payload: { menuList }});
    },

    *postUserLogin({ payload, callback }, { call, put }) {
      const result = yield call(postUserLogin, payload);
      const { code } = result.data;
      if (!code) {
        const token = result.data.token;
        LocalUtil.setLocal('token', token);
        yield put({type: 'save', payload: { token }});
      }
      callback(result)
    }
  }
}