import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../state/index';

function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configureStore();
