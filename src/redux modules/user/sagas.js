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
    var response = yield request(getAllUsersApi());
    console.log("data in users saga", response.data);

    yield put(getAllUsersSuccess(response.data));
  } catch (error) {
    console.log("error in users saga", error);
    yield put(getAllUsersFail(HandleError(error)));
  }
}

export function* LogIn({ payload }) {
  try {
    console.log("entered login saga");

    var response = yield request(loginAxios(payload));
    console.log("data in login saga", response);

    yield put(
      logInSuccess({ ...response.data, token: response.headers.token })
    );
  } catch (error) {
    console.log(error);
    yield put(logInFail(HandleError(error)));
  }
}
export function* signUp({ payload }) {
  try {
    console.log("entered login saga");

    const response = yield request(signUpAxios(payload));
    console.log("data in login saga", response.data);

    yield put(
      signUpSuccess({ ...response.data, token: response.headers.token })
    );
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
