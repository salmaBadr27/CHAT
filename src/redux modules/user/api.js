export const loginAxios = user => ({
  url: "https://chat-webapp-backend.herokuapp.com/login",
  method: "post",
  data: user
});

export const signUpAxios = newUser => ({
  url: "https://chat-webapp-backend.herokuapp.com/signup",
  method: "post",
  data: newUser
});

export const getAllUsersApi = () => ({
  url: "https://chat-webapp-backend.herokuapp.com/users",
  method: "get",
  headers: {
    Authentication: localStorage.getItem("token")
  }
});
