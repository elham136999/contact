import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Callpage from "./components/pages/CallPage";
import Reminderpage from "./components/pages/Reminderpage";
import Homepage from "./components/pages/Homepage";
import Userpage from "./components/pages/Userpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/userpage' element={<Userpage />} />
          <Route path='/callpage' element={<Callpage />} />
          <Route path='/reminderpage' element={<Reminderpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
