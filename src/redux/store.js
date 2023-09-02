import initialState from './initialState'
import { createStore } from 'redux';

//selectors
export const getAllTables = (state) => state.tables;

const reducer = (state, action) => {
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;