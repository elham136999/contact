import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducerperson";
import {
  GET_USERS_BEGIN,
  SUCCESE_GET_USERS,
  ERROR_GET_USERS,
} from "../components/actions";

export const person = "https://reqres.in/api/users";

const initialState = {
  users: [],
  loading: false,
};

const PersonContext = React.createContext();

export const PersonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const GetUsers = async (url) => {
    dispatch({ type: GET_USERS_BEGIN });
    try {
      const response = await fetch(url);
      const persons = await response.json();

      dispatch({ type: SUCCESE_GET_USERS, payload: persons.data });
    } catch {
      dispatch({ type: ERROR_GET_USERS });
    }
  };
  useEffect(() => {
    GetUsers(person);
  }, []);

  return (
    <PersonContext.Provider value={{ ...state, GetUsers }}>
      {children}
    </PersonContext.Provider>
  );
};

export const UsePersonContext = () => {
  return useContext(PersonContext);
};
