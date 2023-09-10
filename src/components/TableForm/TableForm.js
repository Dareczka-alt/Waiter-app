import clsx from 'clsx';
import styles from './TableForm.module.scss'
import MyInput from './../MyInput/MyInput';
import { requestTableParams } from '../../redux/tablesRedux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';





const TableForm = (props) => {
  const id = props.tableId;
  const [status, setStatus] = useState(props.status);
  const [bill, setBill] = useState(props.bill);
  const [peopleMax, setPeopleMax] = useState(props.peopleMax);
  const [peopleSitting, setPeopleSitting] = useState(props.peopleSitting);


  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(requestTableParams({ id, status, peopleSitting, peopleMax, bill }));
    window.location.href = "http://localhost:3000/";
  }


  useEffect(() => {
    if (status === "Free" || status === "Cleaning") {
      setPeopleMax(0);
      setPeopleSitting(0)
    }
    if (status === "Busy") {
      setBill(0)
    }

  }, [status]);

  useEffect(() => {
    if (peopleMax > 10 || peopleSitting < 0) {
      setPeopleMax(props.peopleMax);

    }
    if (peopleSitting > 10 || peopleSitting < 0) {
      setPeopleSitting(props.peopleSitting);

    }
  }, [props, peopleSitting, peopleMax]);

  const otherForm = () => {
    return (<form className="container" onSubmit={handleSubmit}>
      <h1 className={styles.title}>Table {`${id}`}</h1>

      <div >
        <label className={styles.paramtitle}>Status:</label>
        <select className={styles.myselect} name="Status" value={status} onChange={e => setStatus(e.target.value)}>
          <option defaultValue={status}>{`${props.status}`}</option>
          <option value="Busy">Busy</option>
          <option value="Free">Free</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Reserved">Reserved</option>
        </select>
      </div>
      <div>
        <label className={styles.paramtitle}>People:</label> <MyInput value={peopleSitting} onChange={e => setPeopleSitting(e.target.value)} />
        <span className={clsx(styles.paramtitle, "m-2")}>/</span>
        <MyInput value={peopleMax} onChange={e => setPeopleMax(e.target.value)} />
      </div>
      <button className={clsx("btn-default btn-lg mt-4", styles.mybtn)}>Update</button>
    </form >)
  }

  if (status === "Cleaning" || status === "Free")
    return (otherForm())
  else
    return (
      <form className="container" onSubmit={handleSubmit}>
        <h1 className={styles.title}>Table {`${id}`}</h1>

        <div >
          <label className={styles.paramtitle}>Status:</label>
          <select className={styles.myselect} name="Status" value={status} onChange={e => setStatus(e.target.value)}>
            <option defaultValue={status}>{`${props.status}`}</option>
            <option value="Busy">Busy</option>
            <option value="Free">Free</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>
        <div>
          <label className={styles.paramtitle}>People:</label> <MyInput value={peopleSitting} onChange={e => setPeopleSitting(e.target.value)} />
          <span className={clsx(styles.paramtitle, "m-2")}>/</span>
          <MyInput value={peopleMax} onChange={e => setPeopleMax(e.target.value)} />
        </div>
        <div>
          <label className={styles.paramtitle}>Bill:</label><span className={clsx(styles.paramtitle, "p-0, m-0")}>$</span> <MyInput value={bill} onChange={e => setBill(e.target.value)} />
        </div>

        <button className={clsx("btn-default btn-lg mt-4", styles.mybtn)}>Update</button>
      </form >
    )

}

export default TableForm;