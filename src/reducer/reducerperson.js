const reducerperson = (state, action) => {
  switch (action.type) {
    case "GET_USERS_BEGIN":
      return { ...state, loading: true };

    case "SUCCESE_GET_USERS":
      let user_data = action.payload;
      return { ...state, users: user_data, loading: false };
  }
};
export default reducerperson;
