<<<<<<< HEAD
import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers'

const cnofigureStore = () => {
    const store = createStore(reducer);
    store.dispatch( {
        type: 'CHANGE_NICKNAME',
        data: 'boogicho',
    })
    return store;

};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_DENV === 'development',
});
=======
import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = (context) => {
  console.log(context);
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
>>>>>>> 31f11a1593a0a7b4556cb798fe197b8fed24dce7

export default wrapper;