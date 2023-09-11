import styles from './Table.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';




const Table = (props) => {

  return (
    <div className="container">

      <li className={styles.table}>
        <div className="row justify-contetnt-between align-items-center">
          <h2 className="col-2 m-4">Table {props.id} </h2>
          <p className="col-2 m-5"><span className={styles.status}>Status:</span> {props.status} </p>
          <Link className="col-6" to={'/table/' + props.id} ><button className={clsx("btn-default, btn-lg", styles.btnshow)}>Show more</button></Link>

        </div>
      </li>

    </div>
  );
}

export default Table;