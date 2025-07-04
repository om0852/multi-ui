"use client";
import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #2d3748;
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --span-bg: #2d3748;
    --span-text: #a0aec0;
    --span-border: #4a5568;
    --focus-bg: #4a77d4;
    --focus-text: #ffffff;
    --focus-border: #1e4bb8;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #3c4a5c;
    --input-border: #a3b1c9;
    --input-placeholder: #7c8ba2;
    --span-bg: #e0e8ff;
    --span-text: #3c4a5c;
    --span-border: #a3b1c9;
    --focus-bg: #4a77d4;
    --focus-text: #ffffff;
    --focus-border: #1e4bb8;
  }

  & > span,
  .form-field {
    white-space: nowrap;
    display: block;
    transition: all 0.3s ease;

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
    color: var(--focus-text);
    background: var(--focus-bg);
    border-color: var(--focus-border);
    z-index: 2;
  }
`;

const FormField = styled.input`
  flex: 1 1 auto;
  display: block;
  width: 100%;
  padding: 10px 16px;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: var(--input-text);
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
  z-index: 1;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: var(--input-placeholder);
    opacity: 0.8;
  }

  &:focus {
    border-color: var(--focus-border);
    box-shadow: 0 0 0 2px rgba(74, 119, 212, 0.2);
  }

  &.no-left-radius {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -1px;
  }

  &.no-right-radius {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LeftSpan = styled.span`
  text-align: center;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--span-text);
  background: var(--span-bg);
  border: 1px solid var(--span-border);
  border-radius: 6px 0 0 6px;
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const RightSpan = styled(LeftSpan)`
  border-radius: 0 6px 6px 0;
  margin-left: -1px;
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
