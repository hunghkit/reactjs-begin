import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './';

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
