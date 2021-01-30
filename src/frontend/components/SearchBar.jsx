import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import STRINGS from "../constants/strings";
import "../assets/styles/components/SearchBar.styl";

const SearchBar = () => {
  const [query, setQuery] = useState();
  let history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const urlFormatQuery = encodeURIComponent(query);
    if (query) history.push(`?q=${urlFormatQuery}`);
    else history.push("/");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder={STRINGS.HEADER.SEARCH_BAR_PLACEHOLDER}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="searchBar__button" onClick={handleSearch} type="button">
        {STRINGS.SEARCH_BAR.BUTTON_TEXT}
      </button>
    </div>
  );
};

export default SearchBar;
