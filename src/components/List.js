import React from "react";
import { UseAdduserContext } from "../context/AddUserContext";

function List() {
  const { list } = UseAdduserContext();
  return (
    <div>
      {list.map((item) => {
        const { id, title, number } = item;
        return (
          <article>
            <p>{title}</p>
            <p>{number}</p>
          </article>
        );
      })}
    </div>
  );
}

export default List;
