import React from "react";
import styled from "styled-components";
import { LoginFields, SignUpFields } from "./constants";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { handleLogin, handleSignUp, isEmpty } from "../LoginPage/helpers";
import { logIn, signUp } from "../../redux modules/user/actions";
import Loading from "react-loading-components";
import urls from "../../routes";
import { connect } from "react-redux";

const Container = styled.div`
  align-items: center;
  color: #800080;
  flex-direction: column;
  background: url(${"/bg9.jpg"}) no-repeat center center fixed;
  bacground-size: cover;
  -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover
  width: 100%;
`;
const PageForms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;
const Load = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  color: #800080;
  font-family: cursive;
`;

class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      !isEmpty(nextProps.loggedUser.data) &&
      nextProps.loggedUser.data !== this.props.loggedUser.data
    ) {
      var currentUser = nextProps.loggedUser.data;
      var token = nextProps.loggedUser.data.token;
      console.log("currentUser", currentUser);
      console.log("TOKEN", token);
      var personalData = {
        userName: currentUser.userName,
        password: currentUser.password
      };
      console.log("PERSONAL DATA", personalData);
      localStorage.setItem("personal data", JSON.stringify(personalData));
      localStorage.setItem("token", token);
      if (!nextProps.loggedUser.error) {
        this.props.history.push(urls.home);
      }
    }
    if (
      nextProps.newUser.data &&
      nextProps.newUser.data !== this.props.newUser.data
    ) {
      var newUser = nextProps.newUser.data;
      console.log(newUser);
      token = nextProps.newUser.data.token;
      personalData = {
        userName: newUser.userName,
        password: newUser.password,
        mobileNum: newUser.mobileNum,
        e_mail: newUser.e_mail
      };
      localStorage.setItem("personal data", JSON.stringify(personalData));
      localStorage.setItem("token", token);
      if (!nextProps.newUser.error) {
        this.props.history.push(urls.home);
      }
    }
  }

  render() {
    console.log("props", this.props);
    if (localStorage.getItem("token")) {
      this.props.history.push(urls.home);
    }
    var loginObject = this.props.loggedUser;
    var signUpObject = this.props.newUser;

    if (loginObject.isWaiting || signUpObject.isWaiting) {
      return (
        <Load>
          <h1>LOADING</h1>
          <Loading type="grid" width={100} height={100} fill="#800080" />
        </Load>
      );
    }
    if (
      loginObject.error === "please check your password again" ||
      loginObject.error === "user name dosent exist" ||
      loginObject.error ===
        "user name not valid are u sure en enta 2esmak kda ? la2 , 2any 2asf"
    ) {
      return (
        <Load>
          <h1>
            The user name or password you entered not valid , please Try Again
          </h1>
        </Load>
      );
    }
    if (signUpObject.error === "this username is used,please try another one") {
      return (
        <Load>
          <h1> This username is taken ,please Try another user name</h1>
        </Load>
      );
    }
    if (
      signUpObject.error === "something unexpected happened " ||
      loginObject.error === "something unexpected happened "
    ) {
      return (
        <Load>
          <h1> 404 NOT FOUND</h1>
        </Load>
      );
    }

    return (
      <Container>
        <Header />
        <PageForms>
          <div>
            <Form
              id="1"
              onSubmit={e => handleLogin(e, this.props.login)}
              fields={LoginFields}
              label="Login"
              title="login"
            />
          </div>
          <div>
            <Form
              id="2"
              onSubmit={e => {
                handleSignUp(e, this.props.signUp);
              }}
              fields={SignUpFields}
              label="SignUp"
              title="Sign Up"
            />
          </div>
        </PageForms>
      </Container>
    );
  }
}
const mapStateToProps = globalState => ({
  loggedUser: globalState.userReducer.login,
  newUser: globalState.userReducer.signup
});
const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(logIn(payload)),
  signUp: payload => dispatch(signUp(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
