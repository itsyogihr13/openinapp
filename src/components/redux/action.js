import { LOGOUT } from "./actionType";
export const loginUser = (userData) => ({
  type: "LOGIN",
  payload: userData,
});

export const logoutUser = (dispatch) => dispatch({ type: LOGOUT });
