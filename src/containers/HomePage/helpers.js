import React from "react";
import urls from "../../routes";

export const handleSendMessage = (e, receiver, sendedMessage, sendMessage) => {
  e.preventDefault();
  var newMessage = e.target.sendMsg.value;
  var sendedMessage = {
    messageBody: newMessage,
    receiver: receiver,
    token: localStorage.getItem("token")
  };
  if (newMessage === "") {
    alert("ektb message ya bny2adm");
  } else {
    sendMessage(sendedMessage);
  }
};
export const handleLogout = history => {
  if (localStorage.getItem("token") || localStorage.getItem("personal data")) {
    localStorage.removeItem("token");
    localStorage.removeItem("personal data");
    history.push(urls.login);
  }
};
