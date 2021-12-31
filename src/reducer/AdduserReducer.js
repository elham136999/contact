import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      const user_list = [action.payload];
      return { ...state, list: user_list };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
export default AdduserReducer;
