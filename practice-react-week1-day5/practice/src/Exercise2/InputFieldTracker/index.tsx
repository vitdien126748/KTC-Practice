import { useState } from 'react';

const InputFieldTracker = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
  return (
    <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>You Typed: {inputValue ? inputValue : "nothing"} </p>
    </div>
  )
}

export default InputFieldTracker