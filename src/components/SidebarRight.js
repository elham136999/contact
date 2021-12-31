import React from "react";
import "./SidebarRight.scss";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BsCalendar4Event } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";

function SidebarRight() {
  return (
    <aside className='sidebar'>
      <nav className='navbar'>
        <ul className='contact-list'>
          <li>
            {" "}
            <AiOutlineHome className='logo' /> <Link to='/'>صفحه اصلی</Link>
          </li>
          <li>
            {" "}
            <TiContacts className='logo' /> <Link to='userpage'>مخاطبین</Link>
          </li>
          <li>
            {" "}
            <BsCalendar4Event className='logo' />
            <Link to='/reminderpage'> رویدادها</Link>
          </li>
          <li>
            {" "}
            <MdOutlinePhoneIphone className='logo' />
            <Link to='/callpage'>تماس با ما</Link>
          </li>
        </ul>
      </nav>
      <img src='../images/image1' alt='pii' />
    </aside>
  );
}

export default SidebarRight;
