import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      let { name, numbers } = action.payload;
      const user_list = {
        id: new Date().getTime().toString(),
        title: name,
        number: numbers,
      };
      return { ...state, list: [user_list] };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
export default AdduserReducer;
