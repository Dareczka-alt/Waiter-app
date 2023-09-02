import styles from './Navigation.module.scss';
import clsx from 'clsx';


const Navigation = () => {
  return (
    <div className={clsx("d-flex justify-content-between", styles.mynav)}>
      <div className="col-11"><h3><a className={styles.navoption} href="/home">Waiter.app</a></h3></div>
      <div className="col-1 text-center pt-2"><a className={styles.navoption} href="/home">Home</a>
      </div>
    </div >
  );
};

export default Navigation;