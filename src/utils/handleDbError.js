function DataBaseError(error) {
  var defCase = error.ErrorMessage.split("");
  switch (error.ErrorMessage) {
    case "user name dosent exist":
      return "user name not valid are u sure en enta 2esmak kda ? la2 , 2any 2asf";
      break;
    default:
      if (defCase[7] === "d")
        return "this username is used,please try another one";
      break;
  }
}
export default DataBaseError;
