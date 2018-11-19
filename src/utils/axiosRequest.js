import axios from "axios";

function checkStatus(response) {
  console.log("res", response);
  if (response.status >= 200 && response.status < 300) {
    const {data} = response;
    if (data && data.ErrorCode && data.ErrorMessage && data.ErrorDetails) {
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
