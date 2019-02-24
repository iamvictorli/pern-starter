import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import libraryReducer from './reducer/libraryReducer';

export default (initialState = {}) => {
  const rootReducer = combineReducers({ library: libraryReducer });

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
};
