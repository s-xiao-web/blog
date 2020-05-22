import { get } from 'lodash';

export default {

  namespace: 'system',
  
  state: {
    theme: true,
    isSearch: false
  },

  reducers: {
    change: (state, { payload }) => ({...state, ...payload})
  },

  effects: {
    *changeTheme({payload}, { put, select}) {
      const { theme } =yield select(state => ({theme: get(state, 'system.theme')}));
      yield put({type: 'change', payload: { theme: !theme }})
    }
  }
}