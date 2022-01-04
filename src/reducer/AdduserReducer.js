import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      const list = state.list;

      return {
        ...state,
        [action.payload.name]: action.payload.input,
        list: [...list, action.payload.input],
      };

    default:
      return state;
  }
};
export default AdduserReducer;
