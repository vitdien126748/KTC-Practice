import React from 'react'

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredFruits = fruits.filter(fruit =>
        fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
            <ul>
                {filteredFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchFilter