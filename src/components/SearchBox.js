import React from "react";
import "./SearchBox.scss";

function SearchBox() {
  return (
    <div>
      <form onsubmit='event.preventDefault();' role='search'>
        <label for='search'>Search for stuff</label>
        <input
          id='search'
          type='search'
          placeholder='Search...'
          autofocus
          required
        />
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}

export default SearchBox;
