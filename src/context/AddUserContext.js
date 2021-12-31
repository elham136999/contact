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
    let name = event.target.value;
    let numbers = event.targrt.value;
    if (name && numbers) {
      const user_list = {
        id: new Date().getTime().toString(),
        title: name,
        number: numbers,
      };

      dispatch({ type: ADD_USER, payload: user_list });
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
