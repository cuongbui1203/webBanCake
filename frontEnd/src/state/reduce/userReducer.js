import { SET_USER_INFO, USER_LOGOUT } from "../constans";

const initState = {
  user: null,
};
const updateUserState = (state, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        user: action.data,
      };
    case USER_LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export { initState };
export default updateUserState;
