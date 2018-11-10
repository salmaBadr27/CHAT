import React from "react";
import urls from "../../routes";
import Button from "../../components/Button";
import UserList from "../../components/UserList";
import MessageList from "../../components/MessageList";
import styled from "styled-components";
import Input from "../../components/Input";
import { SendMessages } from "../HomePage/constants";
import { handleSendMessage, handleLogout } from "../HomePage/helpers";
import Form from "../../components/Form";
import Loading from "react-loading-components";
import {
  getAllMessages,
  sendMessages
} from "../../redux modules/message/actions";
import { getAllUsers } from "../../redux modules/user/actions";
import messageReducer from "../../redux modules/message/reducers";
import userReducer from "../../redux modules/user/reducers";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #800080;
  color: #800080;
  height: 80px;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
`;
const MessageGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-left: 1px solid #800080;
`;
const Users = styled.div`
  width: 50%;
`;
const Grid = styled.div`
  width: 100%;
  display-flex;
  align-content:stretch;
  flex-direction:column;
  
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
const SendForm = styled.div`
  width: 100%;
  height: 80px;
`;
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: ""
    };
  }

  componentWillMount(props) {
    if (!localStorage.getItem("token")) {
      this.props.history.push(urls.login);
    } else {
      setTimeout(() => {
        this.props.getAllUsers();
        setTimeout(() => {
          this.props.getAllMessages();
        }, 100);
      }, 100);
    }
  }

  render(props) {
    var ourObjects = [this.props.allMessages, this.props.allUsers];
    for (let i = 0; i < ourObjects.length; i++) {
      const element = ourObjects[i];
      // console.log("element", element);
      if (element.error) {
        return (
          <Load>
            <h1> Oops {element.error} We are sorry :( </h1>
          </Load>
        );
      }
    }

    if (this.props.allUsers.isWaiting || this.props.allMessages.isWaiting) {
      return (
        <Load>
          <h1>LOADING</h1>
          <Loading type="grid" width={100} height={100} fill="#800080" />
        </Load>
      );
    }
    return (
      <Container>
        <Header>
          <h1>Chat Me </h1>
          <Button
            onClick={() => {
              handleLogout(this.props.history);
            }}
          >
            logout
          </Button>
        </Header>
        <Content>
          <Users>
            <UserList
              items={this.props.allUsers.data}
              activeUser={this.state.activeUser}
              onClick={username => {
                this.setState({ activeUser: username });
              }}
            />
          </Users>
          <MessageGrid>
            <Grid>
              <MessageList
                items={this.props.allMessages.data}
                primary
                activeUser={this.state.activeUser}
                personalData={JSON.parse(localStorage.getItem("personal data"))}
              />
            </Grid>
            <SendForm>
              <Form
                id="Msg"
                label="send"
                fields={SendMessages}
                name="sendMsg"
                onSubmit={e =>
                  handleSendMessage(
                    e,
                    this.state.activeUser,
                    this.props.sentMessage.data,
                    this.props.sendMessages
                  )
                }
              />
            </SendForm>
          </MessageGrid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = globalState => ({
  allMessages: globalState.messageReducer.messages,
  allUsers: globalState.userReducer.users,
  sentMessage: globalState.messageReducer.sentMessage
});
const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getAllMessages: () => dispatch(getAllMessages()),
  sendMessages: payload => dispatch(sendMessages(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
