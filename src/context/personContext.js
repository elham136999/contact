import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from "../reducer/reducerperson";

export const person = "https://reqres.in/api/users";

const initialState = {
  users: [],
  loading: false,
};

const PersonContext = React.createContext();

export function PersonProvider({ childern }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const GetUsers = async (url) => {
    dispatch({ type: "GET_USERS_BEGIN" });
    try {
      const response = await fetch(url);
      const persons = await response.json();

      dispatch({ type: "SUCCESE_GET_USERS", payload: persons.data });
    } catch {
      dispatch({ type: "ERROR_GET_USERS" });
    }
  };
  useEffect(() => {
    GetUsers(person);
  }, []);

  return (
    <PersonContext.Provider value={{ GetUsers }}>
      {childern}
    </PersonContext.Provider>
  );
}

export const UsePersonContext = () => {
  return useContext(PersonContext);
};
