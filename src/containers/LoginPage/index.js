import React from "react";
import styled from "styled-components";
import { LoginFields, SignUpFields } from "./constants";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { handleLogin, handleSignUp } from "../LoginPage/helpers";
import userReducer from "../../redux modules/user/reducers";
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

class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.loggedUser.data.data &&
      nextProps.loggedUser.data.data !== this.props.loggedUser.data.data
    ) {
      // w m4 btsawy el this props.logged
      var currentUser = nextProps.loggedUser.data.data;
      var token = nextProps.loggedUser.data.headers.token;
      console.log("currentUser", currentUser);
      console.log("TOKEN", token);
      var personalData = {
        userName: currentUser.userName,
        password: currentUser.password
      };
      console.log("PERSONAL DATA", personalData);
      localStorage.setItem("personal data", JSON.stringify(personalData));
      localStorage.setItem("token", token);
      this.props.history.push(urls.home);
    }
    if (
      nextProps.newUser.data.data &&
      nextProps.newUser.data.data != this.props.newUser.data.data
    ) {
      var newUser = nextProps.newUser.data.data;
      var token = nextProps.newUser.data.headers.token;
      var personalData = {
        userName: newUser.userName,
        password: newUser.password,
        mobileNum: newUser.mobileNum,
        e_mail: newUser.e_mail
      };
      localStorage.setItem("personal data", JSON.stringify(personalData));
      localStorage.setItem("token", token);
      this.props.history.push(urls.home);
    }
  }

  render() {
    console.log("props", this.props);
    if (localStorage.getItem("token")) {
      this.props.history.push(urls.home);
    }
    if (this.props.loggedUser.isWaiting || this.props.newUser.isWaiting) {
      return (
        <div>
          <h1>LOADING</h1>
          <Loading type="grid" width={100} height={100} fill="#800080" />
        </div>
      );
    }
    var ourObjects = this.props.loggedUser;
    if (
      ourObjects.error === "Password not valid" ||
      ourObjects.error === "user name dosent exist"
    ) {
      return (
        <div>
          <h1> login tany ya 7beby 34an mz3lksh</h1>
        </div>
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
