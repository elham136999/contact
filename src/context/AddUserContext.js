import React, { useReducer, useContext } from "react";
import AdduserReducer from "../reducer/AdduserReducer";
import { ADD_USER } from "../components/actions";

const AdduserContext = React.createContext();

const initialState = {
  list: [],
};

export const AdduserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdduserReducer, initialState);

  const value = {
    addToItem: (name, numbers) => {
      dispatch({ type: ADD_USER, payload: { name, numbers } });
    },
  };

  return (
    <AdduserContext.Provider value={{ ...state, value }}>
      {children}
    </AdduserContext.Provider>
  );
};
export const UseAdduserContext = () => {
  return useContext(AdduserContext);
};
