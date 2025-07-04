import React from 'react'

const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  }
  return (
    <div>
      <span>Toggle me:</span>
      <input type="checkbox" name="" id="" checked={isChecked} onChange={handleCheckboxChange} />
      <p>Checkbox is: {isChecked ? 'Checked' : 'Unchecked'}</p>
    </div>
  )
}

export default CheckboxToggle