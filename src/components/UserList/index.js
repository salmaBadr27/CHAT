import React from "react";
import styled from "styled-components";
import UserListItem from "../UserListItem";
const StyledList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
  width: 100%;
`;
const UserList = props => (
  <StyledList>
    {props.items.map(e => {
      return (
        <UserListItem
          isActive={e.userName === props.activeUser}
          onClick={() => props.onClick(e.userName)}
          key={e.userName}
        >
          {e.userName}
        </UserListItem>
      );
    })}
  </StyledList>
);

export default UserList;
