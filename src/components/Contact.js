import React from "react";
import { UsePersonContext } from "../context/personContext";
import "./Contact.scss";

function Contact() {
  const { users } = UsePersonContext();
  return (
    <div className='contact'>
      {users.map((user) => {
        const { avatar, first_name, last_name, id } = user;
        return (
          <li key={id} className='contact__list'>
            <img src={avatar} alt='avatar' />
            <p>
              {first_name}

              {last_name}
            </p>
          </li>
        );
      })}
    </div>
  );
}

export default Contact;
