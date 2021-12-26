import React from "react";
import "./Header.scss";
import { FiBell } from "react-icons/fi";
import { IoLogoSlack } from "react-icons/io";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className='header'>
      <div className='btn'>
        <button className='login'>ورود</button>

        <button className='logout'>ثبت نام</button>
        <div className='bell'>
          <FiBell />
        </div>
        <SearchBox />
      </div>
      <div className='logo'>
        <IoLogoSlack />
      </div>
    </div>
  );
}

export default Header;
