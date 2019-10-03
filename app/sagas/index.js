/**
 * Sagas -  Redux saga class init.
 */

import loginSaga from './loginSaga';

import * as types from '../actions/types';
import {takeEvery, all} from 'redux-saga/effects';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    // takeLatest(types.REGISTER_REQUEST, registerSaga),
  ]);
}
