import React from "react";
import "./Main.scss";
import Header from "../components/Header";
import SidebarRight from "../components/SidebarRight";
import SidebarLeft from "../components/SidebarLeft";
import Contact from "../components/Contact";
import List from "../components/List";

function Main() {
  return (
    <div className='main'>
      <Header />
      <SidebarLeft />
      <Contact />
      <SidebarRight />
    </div>
  );
}

export default Main;
