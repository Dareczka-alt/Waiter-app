import initialState from './initialState'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId)

//create action names

const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });


export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  };
};

export const updateTableParams = (newParams) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newParams),
    };
    fetch('http://localhost:3131/tables', options)
      .then(() => dispatch(updateTableParams(newParams)))

  }
}


const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]

    default:
      return state;
  }


};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;