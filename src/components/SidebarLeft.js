import React from "react";
import "./SidebarLeft.scss";
import { UseAdduserContext } from "../context/AddUserContext";

function SidebarLeft() {
  const { name, numbers, handleSubmit } = UseAdduserContext();
  return (
    <aside className='left'>
      <div>
        <form className='forms'>
          <input
            type='text'
            className='forms__input'
            placeholder='...نام و نام خانوادگی'
            onChange={handleSubmit}
            pattern='[a-zA-Z][ا-ی]{15}'
            name='name'
          />
          <input
            type='tel'
            className='forms__input'
            placeholder='...شماره مخاطب'
            pattern='[0-9]{11}'
            onChange={handleSubmit}
            name='numbers'
          />
          <button className='forms__btn' type='submit' onClick={handleSubmit}>
            ذخیره مخاطب جدید
          </button>
        </form>
      </div>
      <div className='date'></div>
    </aside>
  );
}

export default SidebarLeft;
