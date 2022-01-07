import React, { useState } from "react";
import "./SidebarLeft.scss";
import { UseAdduserContext } from "../context/AddUserContext";

function SidebarLeft() {
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState("");

  const { addToItem } = UseAdduserContext();
  console.log(name);
  console.log(numbers);

  return (
    <aside className='left'>
      <div>
        <form className='forms' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='forms__input'
            placeholder='...نام و نام خانوادگی'
            onChange={(e) => setName(e.target.value)}
            name='name'
            value={name}
          />
          <input
            type='tel'
            className='forms__input'
            placeholder='...شماره مخاطب'
            onChange={(e) => setNumbers(e.target.value)}
            name='numbers'
            value={numbers}
          />

          <button
            className='forms__btn'
            type='submit'
            onClick={() => addToItem(name, numbers)}>
            ذخیره مخاطب جدید
          </button>
        </form>
      </div>
      <div className='date'></div>
    </aside>
  );
}

export default SidebarLeft;
