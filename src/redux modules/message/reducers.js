import {
  GET_ALL_MESSAGES,
  GET_ALL_MESSAGES_SUCCESS,
  GET_ALL_MESSAGES_FAIL,
  SEND_MESSAGES,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAIL
} from "./constants";

const initialState = {
  messages: {
    data: [],
    error: "",
    isWaiting: false
  },
  sentMessage: {
    data: [],
    error: "",
    isWaiting: false
  }
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: { ...initialState.messages, isWaiting: true }
      };

    case GET_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: {
          ...initialState.messages,
          data: action.payload
        }
      };
    case GET_ALL_MESSAGES_FAIL:
      return {
        ...state,
        messages: {
          ...initialState.messages,
          error: action.payload
        }
      };
    case SEND_MESSAGES:
      return {
        ...state,
        sentMessage: { ...initialState.sentMessage, isWaiting: true }
      };

    case SEND_MESSAGES_SUCCESS:
      return {
        ...state,
        sentMessage: {
          ...initialState.sentMessage,
          data: action.payload
        }
      };
    case SEND_MESSAGES_FAIL:
      return {
        ...state,
        sentMessage: {
          ...initialState.sentMessage,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
export default messageReducer;
