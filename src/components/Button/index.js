import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #800080;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 3px 0 0 #b9abcc;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 0 0 #b9abcc;
    transform: translateY(-3px);
    outline: none;
  }
  &.active {
    transform: translateY(3px);
    box-shadow: 0 0px 1px 0;
    outline: none;
  }
  align-self: ${props => (props.alignButton ? "flex-end" : "center")};
`;
const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
Button.defaultvalue = {
  alignButton: false
};
export default Button;
