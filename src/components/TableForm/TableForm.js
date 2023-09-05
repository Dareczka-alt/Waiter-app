import clsx from 'clsx';
import styles from './TableForm.module.scss'
import { useState } from 'react';
import { updateTableParams } from '../../redux/store'
import { useDispatch } from 'react-redux';


const TableForm = () => {

  const dispatch = useDispatch();

  const [status, setStatus] = useState('');
  const [peopleMax, setPeopleMax] = useState('');
  const [peopleSitting, setPeopleSitting] = useState('');
  const [bill, setBill] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTableParams({ status, peopleMax, peopleSitting, bill }));
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div >
        <h3 className="mt-4 pt-4">Status:</h3>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Free">Free</option>
          <option value="Busy">Busy</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Reserved">Reserved</option>
        </select>
      </div>

      <div>
        <h3 className="mt-4 pt-4">People:</h3>
        <input type="text" value={peopleSitting} onChange={e =>
          setPeopleSitting(e.target.value)} /><span>/</span><input type="text" value={peopleMax} onChange={e =>
            setPeopleMax(e.target.value)} />
      </div>

      <div>
        <h3 className="mt-4 pt-4">Bill</h3>
        <span>$</span><input type="text" value={bill} onChange={e =>
          setBill(e.target.value)} />
      </div>

      <button className={clsx("btn-default btn-lg mt-4", styles.mybtn)}>Update</button>


    </form >
  )

}

export default TableForm;