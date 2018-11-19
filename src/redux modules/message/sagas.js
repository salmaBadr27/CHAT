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
    console.log("entered messages saga");
    var response = yield request(getAllMessagesApi());
    console.log("data in messages saga", response.data);
    yield put(getAllMessagesSuccess(response.data));
  } catch (error) {
    console.log("error in messages saga", error);
    yield put(getAllMessagesFail(HandleError(error)));
  }
}

export function* sendMessage({ payload }) {
  try {
    console.log("entered send messages saga");
    var response = yield request(sendMessageApi(payload));
    console.log("data in send message saga", response.data);
    yield put(sendMessagesSuccess(response.data));
  } catch (error) {
    console.log("error in send message saga", error);
    yield put(sendMessagesFail(HandleError(error)));
  }
}
export function* watchFetchMessages() {
  yield takeEvery(GET_ALL_MESSAGES, getAllMessages);
}

export function* watchSendMessages() {
  yield takeEvery(SEND_MESSAGES, sendMessage);
}
