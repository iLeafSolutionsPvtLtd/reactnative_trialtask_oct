/**
 * Created by Harish
 * on Aug 27, 2019
 * Entrypoint - Everthing starts from the entrypoint.
 */

import Navigator from './navigation';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import configureStore from './store/configureStore';
import {ActivityIndicator} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
const {persistor, store} = configureStore();

export default class Entrypoint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
