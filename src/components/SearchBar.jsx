import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBar = ({ searchOpen, setSearchOpen }) => {
  const [inputValue, setInputValue] = useState("Search...");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-col gap-2 items-center justify-center p-4 bg-zinc-900 transition-all duration-300 ease-out z-40 ${
        searchOpen
          ? "h-16 opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setSearchOpen(false)}
        className="absolute top-4 right-6 text-white text-3xl cursor-pointer hover:text-primary"
      >
        <IoCloseCircleOutline />
      </button>
      <div className="relative w-4/6">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="w-full h-10 p-1 text-base bg-white border border-primary rounded-md"
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <img
            src="/images/SOne_index_btsearch.jpg"
            alt="SEARCH-ICON"
            className="h-10 rounded-tr-md rounded-br-md border border-primary"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
