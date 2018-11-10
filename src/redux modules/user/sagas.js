import { put, takeEvery } from "redux-saga/effects";
import {
  getAllUsersSuccess,
  getAllUsersFail,
  logInSuccess,
  logInFail,
  signUpSuccess,
  signUpFail
} from "./actions";
import { signUpAxios, loginAxios, getAllUsersApi } from "../user/api";
import { GET_ALL_USERS, LOGIN, SIGNUP } from "./constants";
import { request } from "../../utils/axiosRequest";
import HandleError from "../../utils/handleError";

export function* getAllUsers() {
  try {
    console.log("entered users saga");
    var token = localStorage.getItem("token");
    var data = yield request(getAllUsersApi());
    console.log("data in users saga", data.data);

    yield put(getAllUsersSuccess(data.data));
  } catch (error) {
    console.log("error in users saga", error);
    yield put(getAllUsersFail(HandleError(error)));
  }
}

export function* LogIn({ payload }) {
  try {
    console.log("entered login saga");

    var data = yield request(loginAxios(payload));
    console.log("data in login saga", data);

    yield put(logInSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(logInFail(HandleError(error)));
  }
}
export function* signUp({ payload }) {
  try {
    console.log("entered login saga");

    var data = yield request(signUpAxios(payload));
    console.log("data in login saga", data);

    yield put(signUpSuccess(data));
  } catch (error) {
    console.log("error in login saga", error);
    yield put(signUpFail(HandleError(error)));
  }
}
export function* watchFetchUsers() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
}
export function* watchLogin() {
  yield takeEvery(LOGIN, LogIn);
}
export function* watchSignUp() {
  yield takeEvery(SIGNUP, signUp);
}
