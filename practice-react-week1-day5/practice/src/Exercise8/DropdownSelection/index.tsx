import React from 'react'

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const DropdownSelection = () => {
    const [selectedFruit, setSelectedFruit] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFruit(event.target.value);
    }

  return (
    <div>
        <select name="" id="" value={selectedFruit} onChange={handleChange}>
          {fruits.map((fruit, index) => (
            <option key={index} value={fruit}>{fruit}</option>
          ))}
        </select>
        <p>Selected Fruit: {selectedFruit}</p>
    </div>
  )
}

export default DropdownSelection