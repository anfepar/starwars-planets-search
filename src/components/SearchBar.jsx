import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import STRINGS from "../constants/strings";

const SearchBar = () => {
  const [query, setQuery] = useState();
  let history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const urlFormatQuery = encodeURIComponent(query);
    history.push(`?q=${urlFormatQuery}`);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        placeholder={STRINGS.HEADER.SEARCH_BAR_PLACEHOLDER}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} type="button">
        <img src="" alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
