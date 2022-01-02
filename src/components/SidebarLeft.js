import React from "react";
import "./SidebarLeft.scss";
import { UseAdduserContext } from "../context/AddUserContext";

function SidebarLeft() {
  const { name, numbers, handleSubmit } = UseAdduserContext();
  return (
    <aside className='left'>
      <div>
        <form className='forms' onSubmit={handleSubmit}>
          <input
            type='text'
            className='forms__input'
            placeholder='...نام و نام خانوادگی'
            value={name}
            onChange={handleSubmit}
          />
          <input
            type='tel'
            className='forms__input'
            placeholder='...شماره مخاطب'
            pattern='[0-9]{11}'
            value={numbers}
            onChange={handleSubmit}
          />
          <button className='forms__btn' type='submit'>
            ذخیره مخاطب جدید
          </button>
        </form>
      </div>
      <div className='date'></div>
    </aside>
  );
}

export default SidebarLeft;
