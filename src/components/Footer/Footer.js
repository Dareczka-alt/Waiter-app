import styles from './Footer.module.scss'
import clsx from 'clsx';

const Footer = () => {
  return (
    <p className={clsx("fixed-bottom", styles.myfooter)}>Copyright &copy; PizzeriaApp 2023</p>
  );

};

export default Footer;