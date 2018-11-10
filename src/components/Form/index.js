import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const PageForms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: cursive;
  justify-content: flex-start;
`;
const MyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: cursive;
  width: 100%;
`;
const Form = props => (
  <PageForms id={props.id} onSubmit={props.onSubmit} name={props.name}>
    {props.title && <h1>{props.title}</h1>}
    {props.fields.map(e => {
      return (
        <MyForm key={e.id}>
          <label>{e.label}</label>
          <Input {...e} />
        </MyForm>
      );
    })}
    <Button alignButton={props.name}>{props.label}</Button>
  </PageForms>
);
Form.propType = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};
Form.defaultProps = {
  fields: []
};
export default Form;
