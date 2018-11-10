import React from "react";
import styled from "styled-components";
import MessageListItem from "../MessageListItem";
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #800080;
  height: calc(100vh - 201px);
  overflow: auto;
`;

var personalData = JSON.parse(localStorage.getItem("personal data"));

function getMessageByUserName(messages, username, personalData) {
  //filter messages where username is sender or receiver
  var filteredMessages = messages.filter(function(e) {
    var normalCondition = username === e.sender || username === e.receiver;
    var specialCondition = username === personalData.userName;
    return specialCondition ? e.sender === e.receiver : normalCondition;
  });
  return filteredMessages;
}

const MessageList = props => (
  // console.log("props in messageList com", props) ||
  <StyledList>
    {getMessageByUserName(
      props.items,
      props.activeUser,
      props.personalData
    ).map((e, index) => (
      <MessageListItem
        key={e.messageId}
        primary={e.sender === props.personalData.userName}
      >
        {e.messageBody}
      </MessageListItem>
    ))}
  </StyledList>
);

export default MessageList;
