import { useState } from 'react';

const ButtonClickCounter = () => {
  const[count, setCount] = useState(0);
  const handdleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
        <button onClick={handdleClick}>Click me</button>
        <p>Clicked: {count} times</p>
    </div>
  )
}

export default ButtonClickCounter