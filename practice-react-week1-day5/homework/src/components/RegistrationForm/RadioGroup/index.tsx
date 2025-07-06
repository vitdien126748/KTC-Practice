import styles from "./RadioGroup.module.css";

type RadioGroupProps = {
    options: string[];
    selected: string;
    onChange: (selected: string) => void;
    name: string;
    required?: boolean;
};

const RadioGroup = ({ options, selected, onChange, name, required = false }: RadioGroupProps) => (
    <div className={styles.radioGroup}>
        {options.map((option) => (
            <label key={option}>
                <input
                    type="radio"
                    name={name}
                    checked={selected === option}
                    onChange={() => onChange(option)}
                    required={required}
                />
                {option}
            </label>
        ))}
    </div>
);

export default RadioGroup;
