import React from "react";
import "./search-box.styles.css";

export const SearchButton = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="search-box"
      onChange={handleChange}
    />
  );
};
