import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  padding: 5px 10px;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  font-size: 23px;
  font-weight: normal;
  background-color: #fff;
  &:hover {
    background-color: #800080;
    color: #fff;
  }
  text-transform: capitalize;
  font-family: cursive;
  background-color: ${props => (props.isActive ? "#800080" : "#f1f0f0")};
  color: ${props => (props.isActive ? "#fff" : "#800080")};
`;

const UserListItem = props => <StyledItem {...props} />;
export default UserListItem;
