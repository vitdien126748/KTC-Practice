import styles from "./DisplayError.module.css";

type DisplayErrorProps = {
    message?: string;
    className?: string;
};

const DisplayError = ({ message, className = "" }: DisplayErrorProps) => {
    if (!message) return null;
    return <span className={`${styles.error} ${className}`}>{message}</span>;
};

export default DisplayError;
