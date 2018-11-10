import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "./constants";

export const getAllUsers = () => ({
  type: GET_ALL_USERS
});
export const getAllUsersSuccess = payload => ({
  type: GET_ALL_USERS_SUCCESS,
  payload
});
export const getAllUsersFail = payload => ({
  type: GET_ALL_USERS_FAIL,
  payload
});
export const logIn = payload => ({
  type: LOGIN,
  payload
});
export const logInSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});
export const logInFail = payload => ({
  type: LOGIN_FAIL,
  payload
});
export const signUp = payload => ({
  type: SIGNUP,
  payload
});
export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});
export const signUpFail = payload => ({
  type: SIGNUP_FAIL,
  payload
});
