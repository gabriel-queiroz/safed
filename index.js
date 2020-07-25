import { AppRegistry } from 'react-native';
import React from 'react';
import AppDefault from './src';
import { Provider } from 'react-redux';
import store from './src/store';
import { name as appName } from './app.json';

const App = () => (
  <Provider store={store}>
    <AppDefault />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
