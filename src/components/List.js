import React from "react";
import "./List.scss";
import { UseAdduserContext } from "../context/AddUserContext";

function List() {
  const { list } = UseAdduserContext();

  return (
    <div className='list'>
      <div className='list__text'>
        <h4>لیست مخاطبین جدید</h4>
      </div>
      <div className='list__item'>
        <p>{list}</p>
      </div>
    </div>
  );
}

export default List;
