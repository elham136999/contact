import React from "react";
import "./SidebarLeft.scss";
import { UsePersonContext } from "../context/personContext";

function SidebarLeft() {
  const { users } = UsePersonContext();
  return (
    <aside className='left'>
      <div>
        <p className='phone'>set phone</p>
      </div>
      <div className='date'>
        <p> calender</p>
      </div>
    </aside>
  );
}

export default SidebarLeft;
