
export const handleLogin = (e, logIn) => {
  e.preventDefault();
  var user = {
    userName: e.target.username.value,
    password: e.target.pass.value
  };
  if (user.userName === "" || user.password === "") {
    alert("please fill the form correctly");
  } else {
    logIn(user);
  }
};
export const handleSignUp = (e, signUp) => {
  e.preventDefault();
  var newUser = {
    userName: e.target.user.value,
    password: e.target.password.value,
    e_mail: e.target.email.value,
    mobileNum: e.target.mobile.value
  };

  if (
    newUser.userName === "" ||
    newUser.password === "" ||
    newUser.e_mail === "" ||
    newUser.mobileNum === ""
  ) {
    alert("please fill the form correctly");
  } else {
    signUp(newUser);
  }
};

export const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;