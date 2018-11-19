import DataBaseError from "../handleDbError";
import AuthenticationError from "../handleAuthError";

function HandleError({ data: error }) {
  const defaultMessage = "something unexpected happened ";
  if (!error) {
    return defaultMessage;
  }
  switch (error.ErrorCode) {
    case "DB_ERROR":
      return DataBaseError(error);
      break;
    case "BAD_JWT":
      return AuthenticationError(error);
      break;
    default:
      return "something unexpected happened ";
  }
}
export default HandleError;
