import styles from './MyInput.module.scss';

const TextInput = (props) => {
  return <input className={styles.input} value={props.value} onChange={props.onChange} type="text" />
};


export default TextInput;