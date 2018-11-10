import React from "react";
import DataBaseError from "../handleDbError";
import AuthenticationError from "../handleAuthError";

function HandleError(error) {
  switch (error.ErrorCode) {
    case "DB_ERROR":
      return DataBaseError(error);
    case "BAD_JWT":
      return AuthenticationError(error);
      break;
    default:
      return "something unexpected happened ";
  }
}
export default HandleError;
