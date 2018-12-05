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
    var response = yield request(getAllUsersApi());

    yield put(getAllUsersSuccess(response.data));
  } catch (error) {
    yield put(getAllUsersFail(HandleError(error)));
  }
}

export function* LogIn({ payload }) {
  try {

    var response = yield request(loginAxios(payload));

    yield put(
      logInSuccess({ ...response.data, token: response.headers.token })
    );
  } catch (error) {
    yield put(logInFail(HandleError(error)));
  }
}
export function* signUp({ payload }) {
  try {

    const response = yield request(signUpAxios(payload));

    yield put(
      signUpSuccess({ ...response.data, token: response.headers.token })
    );
  } catch (error) {
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
