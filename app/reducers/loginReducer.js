/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  token: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state) {
    return {
      ...state,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      token: action.response.UserToken,
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
      token: '',
    };
  },
  [types.USER_LOGOUT](state) {
    return {
      ...state,
      token: '',
    };
  },
});
