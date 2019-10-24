import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

import Routes from './src/routes';

const store = configureStore();

const Apps = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default Apps;
