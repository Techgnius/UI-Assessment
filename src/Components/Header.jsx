import React from "react";
import SearchBar from "./SearchBar";
import Notification from "./Notification";

const Header = () => {
  return (
    <>
      <div className="top-section">
        <SearchBar />
        <Notification />
      </div>
    </>
  );
};

export default Header;
