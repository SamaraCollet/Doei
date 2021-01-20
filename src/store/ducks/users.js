export const Types = {
  ALL_USERS: "users/ALL_USERS",
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;

export const setAllUsers = (users) => {
  return {
    type: Types.ALL_USERS,
    payload: users,
  };
};
