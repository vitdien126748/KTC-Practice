import React from "react";
import styles from "./InputField.module.css";

type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    placeholder?: string;
};

const InputField = ({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
    required = false,
    placeholder = ""
}: InputFieldProps) => (
    <div>
        <label className={styles.label} htmlFor={name}>{label}{required && ' *'}</label>
        <input
            className={error ? `${styles.input} ${styles.inputError}` : styles.input}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            placeholder={placeholder}
            autoComplete="off"
        />
    </div>
);

export default InputField;
