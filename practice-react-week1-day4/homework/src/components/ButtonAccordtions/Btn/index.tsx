import styles from './Btn.module.css'

type BtnProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Btn = ({ label, onClick, isActive }: BtnProps) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>{label}</button>
  )
}

export default Btn;