import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = compose(
  applyMiddleware(thunk, logger),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store);

export default store;

