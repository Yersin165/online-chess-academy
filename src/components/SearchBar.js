import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search lessons..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;