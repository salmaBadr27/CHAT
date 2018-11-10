export const sendMessageApi = sendedMessage => ({
    url: "https://chat-webapp-backend.herokuapp.com/message",
    method: "post",
    data: sendedMessage,
    headers: {
      Authentication: localStorage.getItem("token")
    }
  });
  export const getAllMessagesApi = () => ({
    url: "https://chat-webapp-backend.herokuapp.com/messages",
    method: "get",
    headers: {
      Authentication: localStorage.getItem("token")
    }
  });