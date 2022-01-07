import { ADD_USER } from "../components/actions";

export const AdduserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        list: [
          ...state.list,
          {
            id: new Date().getTime().toString(),
            title: action.payload.name,
            number: action.payload.numbers,
          },
        ],
      };
    default:
      return state;
  }
};
export default AdduserReducer;
