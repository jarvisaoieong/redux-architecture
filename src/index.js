import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './helpers/createStore';
import {App, reducer, init} from 'modules/app';

const store = createStore(reducer, init());

render(
  <Provider store={store}>
    <App />
  </Provider>
,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('modules/app', () => {
    const {reducer: nextReducer} = require('modules/app');
    store.replaceReducer(nextReducer);
  });
}
