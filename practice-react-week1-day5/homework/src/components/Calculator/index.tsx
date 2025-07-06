import styles from "./Calculator.module.css";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [justEvaluated, setJustEvaluated] = useState(false);


    const handleInput = (value: string) => {
        if (value === "=") {
            try {
                setInput(eval(input).toString());
                setJustEvaluated(true);
            } catch {
                setInput("Error");
                setJustEvaluated(true);
            }
        } else if (value === "C") {
            setInput("");
            setJustEvaluated(false);
        } else {
            setInput((prev) => {
                if (justEvaluated && /[0-9.]/.test(value)) {
                    return value;
                }
                return prev + value;
            });
            setJustEvaluated(false);
        }
    };


    return (
        <div className={styles.calculator}>
            <Display value={input} />
            <ButtonGrid onInput={handleInput} />
        </div>
    );
};

export default Calculator;
