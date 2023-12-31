import { useSelector } from 'react-redux';
import Table from './../Table/Table';
import { getAllTables } from '../../redux/tablesRedux';
import styles from './TableList.module.scss';
import Loading from './../Loading/Loading';




const TableList = () => {

  const tables = useSelector(state => getAllTables(state));


  if (!tables)
    return (
      <Loading />
    )

  else
    return (
      <div>
        <h1 className="ml-3 p-3">All tables</h1>
        <ul className={styles.tablelist}>
          {tables.map(table =>
            <Table
              key={table.id}
              {...table} />)}

        </ul>
      </div>
    );


}

export default TableList;