import { useParams, Navigate } from 'react-router';
import { getAllTables, getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import TableForm from './../TableForm/TableForm';

const SingleTable = () => {
  const { tableId } = useParams();
  const tables = useSelector(getAllTables);
  const tableData = useSelector(state => getTableById(state, tableId))

  if (!tableData)
    return (<Navigate to="/" />
    )
  return (
    <div>
      {tables.filter(table => table.id === tableId).map(table =>
        <TableForm
          key={table.id}
          tableId={table.id}
          status={table.status}
          peopleAmount={table.peopleAmount}
          maxPeopleAmount={table.maxPeopleAmount}
          bill={table.bill} />

      )}
    </div>

  )
}

export default SingleTable;