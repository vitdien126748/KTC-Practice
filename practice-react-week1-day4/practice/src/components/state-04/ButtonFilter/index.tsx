import styles from "./ButtonFilter.module.css";

type ButtonFilterProps = {
    label: string;   
    onClick?: () => void;
}

const ButtonFilter = ({ label, onClick }: ButtonFilterProps) => {
  return (
    <button className={styles.buttonFilter} onClick={onClick}>
      {label} ▼
    </button>
  )
}

export default ButtonFilter