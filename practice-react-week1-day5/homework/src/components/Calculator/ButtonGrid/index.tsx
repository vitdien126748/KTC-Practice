import styles from "./ButtonGrid.module.css";
import Button from "../Button";

interface ButtonGridProps {
    onInput: (value: string) => void;
}

const ButtonGrid = ({ onInput }: ButtonGridProps) => {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", "C", "=", "+"
    ];

    return (
        <div className={styles.grid}>
            {buttons.map((btn, i) => (
                <Button key={i} label={btn} onClick={onInput} />
            ))}
        </div>
    );
};

export default ButtonGrid;
