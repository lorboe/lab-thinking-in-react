import React, { Component } from "react";

function SearchBar ({search, stocked, onSearch,onStocked}) {

    return (
      <div>
        <form>       
          <input
          name="searchbar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => onSearch(e.target.value)}
        />
        <br />
        Only show products in stock: 
        <input
          name="stocked"
          type="checkbox"
          checked={stocked}
          onChange={e => onStocked(e.target.checked)}
        />
        </form>

      </div>
    );
  }


export default SearchBar;