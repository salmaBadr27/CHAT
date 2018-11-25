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

const initialState = {
  users: {
    data: [],
    error: "",
    isWaiting: false
  },
  login: {
    data: {},
    error: "",
    isWaiting: false
  },
  signup: {
    data: {},
    error: "",
    isWaiting: false
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: { ...initialState.users, isWaiting: true }
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: { ...initialState.users, data: action.payload }
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        users: {
          ...initialState.users,
          error: action.payload
        }
      };
    case LOGIN:
      return {
        ...state,
        login: { ...initialState.login, isWaiting: true }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...initialState.login, data: action.payload }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          ...initialState.login,
          error: action.payload
        }
      };
    case SIGNUP:
      return {
        ...state,
        signup: { ...initialState.signup, isWaiting: true }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: { ...initialState.signup, data: action.payload }
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          ...initialState.signup,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
export default userReducer;
