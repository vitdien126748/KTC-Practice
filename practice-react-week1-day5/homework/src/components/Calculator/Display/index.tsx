import styles from "./Display.module.css";

interface DisplayProps {
    value: string;
}

const Display = ({ value }: DisplayProps) => {
    return <div className={styles.display}>{value || "0"}</div>;
};

export default Display;
