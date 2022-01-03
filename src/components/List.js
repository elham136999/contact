import React from "react";
import "./List.scss";
import { UseAdduserContext } from "../context/AddUserContext";

function List() {
  const { ...state } = UseAdduserContext();
  console.log(state);
  return (
    <div className='list'>
      <p>{state.list}</p>
    </div>
  );
}

export default List;
