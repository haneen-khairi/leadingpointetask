

import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  // your reducers go here
});

const store = createStore(rootReducer);

export default store;