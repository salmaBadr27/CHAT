import axios from "axios";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log("res", response);
    if (response.ErrorCode && response.ErrorMessage && response.ErrorDetails) {
      throw response;
    }
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export const request = api => {
  return axios(api).then(checkStatus);
};
