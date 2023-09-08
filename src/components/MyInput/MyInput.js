import styles from './MyInput.module.scss';

const TextInput = (props) => {
  return <input className={styles.input} value={props.value} onChange={props.onChange} type="number" min={props.min} max={props.max} />
};


export default TextInput;