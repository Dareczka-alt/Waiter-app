import clsx from 'clsx';
import styles from './TableForm.module.scss'
import MyInput from './../MyInput/MyInput';
import { requestTableParams } from '../../redux/tablesRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';





const TableForm = (props) => {
  const id = props.tableId;
  const [status, setStatus] = useState('');
  const [bill, setBill] = useState('');
  const [peopleMax, setPeopleMax] = useState('');
  const [peopleSitting, setPeopleSitting] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(requestTableParams({ id, status, peopleSitting, peopleMax, bill }));
    window.location.href = "http://localhost:3000/";

  }


  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className={styles.title}>Table {`${id}`}</h1>

      <div >
        <label className={styles.paramtitle}>Status:</label>
        <select className={styles.myselect} value={status} onChange={e => setStatus(e.target.value)}>
          <option defaultValue={status}>{`${props.status}`}</option>
          <option value="Busy">Busy</option>
          <option value="Free">Free</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Reserved">Reserved</option>
        </select>
      </div>
      <div>
        <label className={styles.paramtitle}>People:</label> <MyInput max={10} min={0} value={peopleSitting} onChange={e => setPeopleSitting(e.target.value)} />
        <span className={clsx(styles.paramtitle, "m-2")}>/</span>
        <MyInput max={10} min={0} value={peopleMax} onChange={e => setPeopleMax(e.target.value)} />
      </div>
      <div>
        <label className={styles.paramtitle}>Bill:</label><span className={clsx(styles.paramtitle, "p-0, m-0")}>$</span> <MyInput min={0} value={bill} onChange={e => setBill(e.target.value)} />
      </div>

      <button className={clsx("btn-default btn-lg mt-4", styles.mybtn)}>Update</button>
    </form >
  )

}

export default TableForm;