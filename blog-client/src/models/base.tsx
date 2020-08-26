import assign from 'lodash';

export default {

  namespace: 'baseModel',

  state: {},

  reducers: {
    save:(state, { payload }) => ({ ...state, ...payload })
  }
}
