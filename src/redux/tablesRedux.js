//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.filter(table => table.id === tableId)


// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE_PARAMS = createActionName('UPDATE_TABLE_PARAMS');




export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTableParams = payload => ({ type: UPDATE_TABLE_PARAMS, payload });


export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  };
};

export const requestTableParams = (newParams) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newParams }),
    };

    fetch(`http://localhost:3131/tables/${newParams.id}`, options)
      .then(() => dispatch(updateTableParams(newParams)))
  }
}



// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_TABLE_PARAMS:
      return statePart.map((table) => table.id === action.payload.id ? { ...table, ...action.payload } : table);
      ;

    default:
      return statePart;
  };
};
export default tablesReducer;