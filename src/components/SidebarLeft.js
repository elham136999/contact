import React, { useState } from "react";
import "./SidebarLeft.scss";
import List from "../components/List";

function SidebarLeft() {
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && numbers) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        number: numbers,
      };
      setList([...list, newItem]);
      setName("");
      setNumbers("");
    } else {
    }
  };

  return (
    <aside className='left'>
      <div>
        <form className='forms' onSubmit={handleSubmit}>
          <input
            type='text'
            className='forms__input'
            placeholder='...نام و نام خانوادگی'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='tel'
            className='forms__input'
            placeholder='...شماره مخاطب'
            pattern='[0-9]{11}'
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
          <button className='forms__btn' type='submit'>
            ذخیره مخاطب جدید
          </button>
        </form>
      </div>
      <div className='date'>
        <List items={list} />
      </div>
    </aside>
  );
}

export default SidebarLeft;
