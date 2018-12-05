import { put, takeEvery } from "redux-saga/effects";
import {
  getAllMessagesSuccess,
  getAllMessagesFail,
  sendMessagesSuccess,
  sendMessagesFail
} from "./actions";
import { getAllMessagesApi, sendMessageApi } from "../message/api";
import { request } from "../../utils/axiosRequest";
import { GET_ALL_MESSAGES, SEND_MESSAGES } from "./constants";
import HandleError from "../../utils/handleError";

export function* getAllMessages() {
  try {
    var response = yield request(getAllMessagesApi());
    yield put(getAllMessagesSuccess(response.data));
  } catch (error) {
    yield put(getAllMessagesFail(HandleError(error)));
  }
}

export function* sendMessage({ payload }) {
  try {
    var response = yield request(sendMessageApi(payload));
    yield put(sendMessagesSuccess(response.data));
  } catch (error) {
    yield put(sendMessagesFail(HandleError(error)));
  }
}
export function* watchFetchMessages() {
  yield takeEvery(GET_ALL_MESSAGES, getAllMessages);
}

export function* watchSendMessages() {
  yield takeEvery(SEND_MESSAGES, sendMessage);
}
