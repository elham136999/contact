import React, { useReducer, useContext } from "react";
import AdduserReducer from "../reducer/AdduserReducer";
import { ADD_USER } from "../components/actions";

const AdduserContext = React.createContext();

const initialState = {
  list: [{}],
  name: "",
  numbers: "",
};

export const AdduserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdduserReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.value;
    let numbers = e.target.value;

    const newlist = {
      id: new Date().getTime().toString(),
      title: name,
      number: numbers,
    };

    dispatch({ type: ADD_USER, payload: [newlist] });
  };

  return (
    <AdduserContext.Provider value={{ ...state, handleSubmit }}>
      {children}
    </AdduserContext.Provider>
  );
};
export const UseAdduserContext = () => {
  return useContext(AdduserContext);
};
