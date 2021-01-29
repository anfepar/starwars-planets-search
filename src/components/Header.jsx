import React from "react";
import SearchBar from "./SearchBar";
import "@/assets/styles/components/Header.styl";
import logo from "@/assets/static/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Star Wars Logo" />
      <SearchBar />
    </header>
  );
};

export default Header;
