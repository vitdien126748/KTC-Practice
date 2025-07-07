import React from "react";

type SearchBarProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

const SearchBar = ({ handleChange, handleSearch }: SearchBarProps) => {
  return (
    <div className="flex justify-center items-center w-full mb-6 mt-2">
      <input
        type="text"
        placeholder="Hanoi"
        onChange={handleChange}
        className="w-full max-w-md rounded-full px-5 py-3 bg-white bg-opacity-40 placeholder-gray-700 text-gray-900 text-lg outline-none focus:ring-2 focus:ring-blue-200 transition"
      />
      <button
        onClick={handleSearch}
        className="ml-3 px-5 py-3 rounded-full bg-blue-400 text-white font-semibold shadow hover:bg-blue-500 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
