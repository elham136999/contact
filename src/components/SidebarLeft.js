import React from "react";
import "./SidebarLeft.scss";
import { UsePersonContext } from "../context/personContext";

function SidebarLeft() {
  const { users } = UsePersonContext();
  return (
    <div>
      <h1 className='left'>left</h1>
    </div>
  );
}

export default SidebarLeft;
