import {  useState } from 'react';

const FormSubmissionAlert = () => {
    const [valueInput, setValueInput] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(valueInput);
        setValueInput("");
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    };
  return (
    <div>
        <input type="text" value={valueInput} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormSubmissionAlert