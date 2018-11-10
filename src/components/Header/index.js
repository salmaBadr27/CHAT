import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  text-transform: capitalize;
`;
const Header = () => {
  return (
    <StyledHeader>
      <h1> Start connecting with your friends </h1>
      <img src="/chat-4-xxl.png" alt="" />
    </StyledHeader>
  );
};
export default Header;
