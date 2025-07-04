import React,{ useState } from "react" 

const KeyPressDisplay = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState<string>('');

  const handleKeyPress = (event: React.KeyboardEvent) => {
    setLastKeyPressed(event.key);
  };

  return (
    <div>
      <h2>Last Key: {lastKeyPressed}</h2>
      <input type="text" onKeyDown={handleKeyPress} />
    </div>
  )
}

export default KeyPressDisplay