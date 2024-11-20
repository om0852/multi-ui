"use client";
import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  & > span,
  .form-field {
    white-space: nowrap;
    display: block;

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
  }

  &:focus-within > span {
    color: #fff;
    background: #4a77d4;
    border-color: #1e4bb8;
  }
`;

const FormField = styled.input`
  flex: 1 1 auto;
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  color: #3c4a5c;
  border: 1px solid #a3b1c9;
  background: #fff;
  border-radius: 6px;
  outline: none;
  transition: border 0.3s ease;
  z-index: 1;

  &::placeholder {
    color: #7c8ba2;
  }

  &:focus {
    border-color: #1e4bb8;
  }

  &.no-left-radius {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.no-right-radius {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const LeftSpan = styled.span`
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: #3c4a5c;
  background: #e0e8ff;
  border: 1px solid #a3b1c9;
  border-radius: 6px 0 0 6px;
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
`;

const RightSpan = styled(LeftSpan)`
  border-radius: 0 6px 6px 0;
`;

// Updated UrlInput to accept custom input props
const UrlInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <FormGroup className={props?.className}>
    <LeftSpan>https://</LeftSpan>
    <FormField type="text" placeholder="multiui.com" {...props} className={`${props.className} no-left-radius`} />
  </FormGroup>
);

export default UrlInput;

export const EmailInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <FormGroup>
      <FormField type="email" placeholder="Email" {...props} className={`${props.className} no-right-radius`} />
      <RightSpan>@gmail.com</RightSpan>
    </FormGroup>
  );
};
