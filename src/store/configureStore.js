import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers, install} from '@jarvisaoieong/redux-loop';
import createLogger from '@jarvisaoieong/redux-logger';

import * as reducers from '../reducers';

export default function configureStore({initialState}) {
  const reducer = combineReducers(reducers);

  const store = createStore(reducer, initialState, compose(
    install(),
    applyMiddleware(createLogger({collapsed: true}))
  ));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers(nextReducers);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
