import React, { useReducer, useContext } from "react";
import reducer from "../reducer/AdduserReducer";
import { ADD_USER } from "../components/actions";

const AdduserContext = React.createContext();

const initialState = {
  list: [{}],
  name: "",
  numbers: "",
};

export const AdduserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddUser = (event) => {
    const name = event.target.value;
    const numbers = event.targrt.value;
    if (name && numbers) {
      dispatch({ type: ADD_USER, payload: { name, numbers } });
    }
  };

  return (
    <AdduserContext.Provider value={{ ...state, AddUser }}>
      {children}
    </AdduserContext.Provider>
  );
};
export const UseAdduserContext = () => {
  return useContext(AdduserContext);
};
