import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

export default function configureStore(initState) {
  
  let store = createStoreWithMiddleware(rootReducer, initState);
  
  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  
  return store;
}