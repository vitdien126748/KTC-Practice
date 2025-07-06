import styles from "./CheckboxGroup.module.css";

type CheckboxGroupProps = {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    name: string;
    required?: boolean;
};

const CheckboxGroup = ({ options, selected, onChange, name, required = false }: CheckboxGroupProps) => {
    const handleChange = (option: string) => {
        if (selected.includes(option)) {
            onChange(selected.filter((item) => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className={styles.checkboxGroup}>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        name={name}
                        checked={selected.includes(option)}
                        onChange={() => handleChange(option)}
                        required={required && selected.length === 0}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default CheckboxGroup;
