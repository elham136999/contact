import {
  GET_USERS_BEGIN,
  SUCCESE_GET_USERS,
  ERROR_GET_USERS,
} from "../components/actions";

const reducerperson = (state, action) => {
  switch (action.type) {
    case GET_USERS_BEGIN:
      return { ...state, loading: true };

    case SUCCESE_GET_USERS:
      const user_data = action.payload;
      return { ...state, users: user_data, loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default reducerperson;
