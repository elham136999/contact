import React from "react";
import "./SearchBox.scss";
import { BsSearch } from "react-icons/bs";

function searchbox() {
  return (
    <div>
      <form className='form'>
        <div className='input'>
          <input type='search' placeholder='search...' />
          <BsSearch className='search' />
        </div>
      </form>
    </div>
  );
}

export default searchbox;
