import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};
export default AdduserReducer;
