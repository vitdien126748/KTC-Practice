import React from 'react'

const DoubleClickMessage = () => {
    const [message, setMessage] = React.useState('');
    const handleDoubleClick = () => {
        setMessage('Double-clicked!');
        setTimeout(() => {
            setMessage('');
        }, 2000);
    }
  return (
    <div>
        <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        {message && <p>{message}</p>}
    </div>
  )
}

export default DoubleClickMessage