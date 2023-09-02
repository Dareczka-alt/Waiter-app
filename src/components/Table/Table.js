import styles from './Table.module.scss'
import clsx from 'clsx';

const Table = (props) => {

  return (
    <div className="container">
      <li className={clsx("d-flex justify-space-between p-4 m-4", styles.table)}>
        <h2 className="col-2">Table {props.id} </h2>
        <p className="col-2"><span className={styles.status}>Status:</span> {props.status} </p>
        <div className={clsx("col-8", styles.btncon)}><button className={clsx("btn-default", styles.btnshow)}>Show more</button></div>
      </li>
    </div>
  )
}

export default Table;