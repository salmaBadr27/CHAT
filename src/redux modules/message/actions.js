import {
  GET_ALL_MESSAGES,
  GET_ALL_MESSAGES_SUCCESS,
  GET_ALL_MESSAGES_FAIL,
  SEND_MESSAGES,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAIL
} from "./constants";
export const getAllMessages = () => ({
  type: GET_ALL_MESSAGES
});

export const getAllMessagesSuccess = payload => ({
  type: GET_ALL_MESSAGES_SUCCESS,
  payload
});
export const getAllMessagesFail = payload => ({
  type: GET_ALL_MESSAGES_FAIL,
  payload
});
export const sendMessages = payload => ({
  type: SEND_MESSAGES,
  payload
});

export const sendMessagesSuccess = payload => ({
  type: SEND_MESSAGES_SUCCESS,
  payload
});
export const sendMessagesFail = payload => ({
  type: SEND_MESSAGES_FAIL,
  payload
});
