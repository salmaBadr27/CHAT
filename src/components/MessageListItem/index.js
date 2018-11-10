import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: ${props => (props.primary ? "flex-end" : "flex-start")};
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid ${props => (props.primary ? "#800080" : "#f1f0f0")};
  border-radius: 8px;
  margin: 2px;
  padding: 2px;
  background-color: ${props => (props.primary ? "#800080" : "#f1f0f0")};
  color: ${props => (props.primary ? "#fff" : "#800080")};
`;

const MessageListItem = props => <StyledItem {...props} />;
export default StyledItem;
