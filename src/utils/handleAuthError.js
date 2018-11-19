function AuthenticationError(error) {
  switch (error.ErrorMessage) {
    case "Password not valid":
      return "please check your password again";
      break;
    default:
      return error.ErrorMessage;
  }
}
export default AuthenticationError;
