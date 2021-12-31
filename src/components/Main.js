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
      <div className='header'>
        <Header />
      </div>
      <div className='sidebar_left'>
        <SidebarLeft />
      </div>
      <div className='content'>
        <Contact />
      </div>
      <div className='list'>
        {" "}
        <List />
      </div>
      <div className='sidebar_right'>
        <SidebarRight />
      </div>
    </div>
  );
}

export default Main;
