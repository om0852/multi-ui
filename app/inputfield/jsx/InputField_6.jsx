"use client";
import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
  position: absolute;
  left: 2rem;
`;

const FormField = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid #0a0101;
  width: 100%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: 0.1rem solid #4a77d4;
  }

  &:placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const InputFieldComponent = (props) => {
  return (
    <FormGroup>
      <FormField {...props} className={props.className} />
      {props?.label && <Label htmlFor={props?.id}>{props?.label}</Label>}
    </FormGroup>
  );
};

export default InputFieldComponent;
