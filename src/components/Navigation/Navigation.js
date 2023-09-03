import styles from './Navigation.module.scss';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className="row justify-between px-4 pt-4 ">
        <div className="col-6"><Link to="/" className={styles.navoption}><h3>Waiter.app</h3></Link></div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <NavLink className={styles.navoption} to="/">Home</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;