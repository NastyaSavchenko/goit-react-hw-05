import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import { useSearchParams } from "react-router-dom";

import s from "./SearchMovies.module.css";

const SearchMovies = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  //   const [searchParams, setSearchParams] = useSearchParams();

  const onInputChange = (event) => {
    const name = event.target.value;
    setInputValue(name.toLowerCase());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const searchName = inputValue.trim();
    setInputValue("");
    onSubmit(searchName);
    // setSearchParams({ query: searchName });
  };

  return (
    <div>
      <form className={s.form} onSubmit={onFormSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Search movies"
          value={inputValue}
          onChange={onInputChange}
          required
        />
        <button type="submit" aria-label="Search" className={s.searchBtn}>
          <BiSearchAlt2
            style={{ fill: "#092ae5", width: "20px", height: "20px" }}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
