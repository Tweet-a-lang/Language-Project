import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';


const config = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(config, reducers);


export default function configureStore () {
  let store = createStore(reducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);

  return { persistor, store };
}

