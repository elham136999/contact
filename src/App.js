import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SidebarRight from "./components/SidebarRight";
import SidebarLeft from "./components/SidebarLeft";
import Main from "./components/Main";

function App() {
  return (
    <div className='App'>
      <Header />
      <SidebarRight />
      <Main />
      <SidebarLeft />
    </div>
  );
}

export default App;
