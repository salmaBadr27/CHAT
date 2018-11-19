function DataBaseError(error) {
  switch (error.ErrorMessage) {
    case "user name dosent exist":
      return "user name not valid are u sure en enta 2esmak kda ? la2 , 2any 2asf";
      break;
    default:
      var defCase = error.ErrorMessage.split("");
      if (defCase[0] === "Error:") {
        return "this user name  is used , please try another one";
      }
      return error.ErrorMessage;
  }
}
export default DataBaseError;
