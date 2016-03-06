import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './helpers/createStore';
import {reducer, init} from 'modules/app';

const store = createStore(reducer, init());

const render = () => {
  const {App} = require('modules/app');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
    document.getElementById('app')
  );
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('modules/app', () => {
    const {reducer: nextReducer} = require('modules/app');
    store.replaceReducer(nextReducer);
    render();
  });
}
