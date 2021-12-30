import React from "react";

function List({ items }) {
  return (
    <div>
      {items.map((item) => {
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
