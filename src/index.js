import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PersonProvider } from "../src/context/personContext";
import { AdduserProvider } from "../src/context/AddUserContext";

ReactDOM.render(
  <PersonProvider>
    <AdduserProvider>
      <App />
    </AdduserProvider>
  </PersonProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
