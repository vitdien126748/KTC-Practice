import styles from "./Button.module.css";

interface ButtonProps {
    label: string;
    onClick: (value: string) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={() => onClick(label)}>
            {label}
        </button>
    );
};

export default Button;
