import styles from './Button.module.css'

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({ label, onClick, isActive }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>{label}</button>
  )
}

export default Button