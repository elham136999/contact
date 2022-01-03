import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        [action.payload.name]: action.payload.input,
        list: action.payload.input,
      };

    default:
      return state;
  }
};
export default AdduserReducer;
