import React, { useReducer, useContext } from "react";
import AdduserReducer from "../reducer/AdduserReducer";
import { ADD_USER } from "../components/actions";

const AdduserContext = React.createContext();

const initialState = {
  list: [],
  name: "",
  numbers: "",
};

export const AdduserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdduserReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: e.target.name,
      input: e.target.value,
    };

    dispatch({ type: ADD_USER, payload: item });
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
