import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="search_container">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search for anything..." />
      </div>
    </div>
  );
};

export default SearchBar;
