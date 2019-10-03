/**
 * Created by Harish
 * on Aug 27, 2019
 * ConfigureStore - Store configuring.
 */

import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reduxReset from 'redux-reset';
import rootReducers from '../reducers';
import sagas from '../sagas';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginReducer'],
  blacklist: [], //to remove reducer to persist
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware), reduxReset()];
// const initialState = {};
const persistConfig = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default configureStore;
