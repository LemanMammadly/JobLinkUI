import React, { useContext } from "react";
import "./Index.css";
import { CiSearch } from "react-icons/ci";
import SearchContext from "../../../contexts/SearchContext";

const Index = () => {
  const { setSearchValue } = useContext(SearchContext);

  const searchCategory = (e) => {
    let value = e.target.value;
    setSearchValue(value);
    console.log(value);
  };

  return (
    <section className="category-search py-lg-3 px-lg-5 px-md-3 py-md-1 px-2 py-2 col-lg-12">
      <div className="left-search-category col-lg-4">
        <h1 className="category-text">Kateqoriyalar</h1>
      </div>
      <div className="right-search-category d-flex align-items-center justify-content-between col-lg-4">
        <input
        onChange={searchCategory}
          className="input-text"
          type="text"
          placeholder="Kateqoriya üzrə axtar"
        />
        <CiSearch className="search-icon" />
      </div>
    </section>
  );
};

export default Index;
