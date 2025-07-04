import { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        Toggle switch
      </button>
        <p>
            State: {isToggled ? "ON" : "OFF"}
        </p>
    </div>
  )
}

export default ToggleButton