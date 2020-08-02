import assign from 'lodash';

export default {

  state: {},

  reducers: {
    save(state, {payload}) {
      console.log( 'ok， 这个方法执行了' );
      return assign(state, {
        ...state,
        ...payload,
      })
    }
  },

}