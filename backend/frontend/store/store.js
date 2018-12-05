import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import { logger } from 'redux';

const configureStore = () => createStore(
  rootReducer, applyMiddleware(thunk, logger)
);

export default configureStore;
