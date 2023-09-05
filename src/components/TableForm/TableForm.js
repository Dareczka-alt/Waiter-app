import clsx from 'clsx';
import styles from './TableForm.module.scss'
import { useState } from 'react';
import TextInput from './../TextInput/TextInput';





const TableForm = (props) => {

  const [status, setStatus] = useState('');
  const [peopleMax, setPeopleMax] = useState('');
  const [peopleSitting, setPeopleSitting] = useState('');
  const [bill, setBill] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="mt-4">Table {props.id}</h1>
      <div >
        <label className={styles.paramtitle}>Status:</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Free">Free</option>
          <option value="Busy">Busy</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Reserved">Reserved</option>
        </select>
      </div>

      <div>
        <label className={styles.paramtitle}>People:</label> <TextInput value={peopleSitting} onChange={e => setPeopleSitting(e.target.value)} />
        <span>/</span>
        <TextInput value={peopleMax} onChange={e => setPeopleMax(e.target.value)} />
      </div>

      <div>
        <label className={styles.paramtitle}>Bill:</label><span className="ml-4">$</span> <TextInput value={bill} onChange={e => setBill(e.target.value)} />
      </div>

      <button className={clsx("btn-default btn-lg mt-4", styles.mybtn)}>Update</button>


    </form >
  )

}

export default TableForm;