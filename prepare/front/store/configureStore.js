import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunkMiddleWare from 'redux-thunk';

import reducer from '../reducers';
import rootSaga from "../sagas";
/* 
const loggerMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);
  
  // if (typeof action === 'function') {
  //   return action(dispatch, getState);
  // }
  

  return next(action);
};
 */
const configureStore = (context) => {
  console.log(context);

  const sagaMiddleware = createSagaMiddleware();
  //onst middlewares = [thunkMiddleWare, loggerMiddleWare];
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;