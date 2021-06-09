import React, { useState } from "react";
import { SearchBar, IconSpan, SearchInput } from "./style";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const passProps = (value) => {
    setTimeout(() => {
      props.passProps(value);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    passProps(value);
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <IconSpan>
        <FaSearch />
      </IconSpan>
      <SearchInput
        value={value}
        onChange={handleChange}
        name="country-name"
        type="text"
        placeholder="Search for a country..."
      />
    </SearchBar>
  );
}

export default Search;
