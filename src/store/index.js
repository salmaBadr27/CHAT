import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { fork, all } from "redux-saga/effects";
import {
  watchFetchMessages,
  watchSendMessages
} from "../redux modules/message/sagas";
import {
  watchFetchUsers,
  watchLogin,
  watchSignUp
} from "../redux modules/user/sagas";
import { combineReducers, compose } from "redux";
import messageReducer from "../redux modules/message/reducers";
import userReducer from "../redux modules/user/reducers";

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({ userReducer, messageReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
function* rootSaga() {
  try {
    yield all([
      fork(watchFetchMessages),
      fork(watchSendMessages),
      fork(watchFetchUsers),
      fork(watchLogin),
      fork(watchSignUp)
    ]);
  } catch (err) {
    console.log("ERROR", err);
  }
}
sagaMiddleWare.run(rootSaga);

export default store;
