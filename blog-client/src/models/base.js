import { assign } from 'lodash';

export default {

  save(state, { payload }) {
    return assign(state, {
        ...state,
        ...payload,
      }
    )
  }

}