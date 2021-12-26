import React from "react";
import "./Main.scss";
import Header from "../components/Header";
import SidebarRight from "../components/SidebarRight";
import SidebarLeft from "../components/SidebarLeft";

function Main() {
  return (
    <div className='main'>
      <Header />
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
}

export default Main;
