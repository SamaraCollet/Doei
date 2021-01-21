export const Types = {
  CURRENT_USER: "user/CURRENT_USER",
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case Types.CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;

export const setCurrentUser = user => {
  return {
    type: Types.CURRENT_USER,
    payload: user,
  };
};
