import React, {  InputHTMLAttributes } from "react";
import styled from "styled-components";

// Styled Components
const FormGroup = styled.div`
  position: relative;
  width: 100%;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #2d3748;
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --label-color: #a0aec0;
    --focus-border: #4a77d4;
    --focus-ring: rgba(74, 119, 212, 0.3);
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #333333;
    --input-border: #0a0101;
    --input-placeholder: #9ca3af;
    --label-color: #4b5563;
    --focus-border: #4a77d4;
    --focus-ring: rgba(74, 119, 212, 0.3);
  }
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: var(--label-color);
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  pointer-events: none;
  background: var(--input-bg);
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  z-index: 1;
`;

const InputField = styled.input`
  font-family: "Roboto", sans-serif;
  color: var(--input-text);
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--input-bg);
  border: 1px solid var(--input-border);
  width: 100%;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: var(--input-placeholder);
    opacity: 0.7;
  }

  &:focus {
    border-color: var(--focus-border);
    box-shadow: 0 0 0 2px var(--focus-ring);
    outline: none;
  }

  &:not(:placeholder-shown) + ${Label},
  &:focus + ${Label} {
    transform: translateY(-1.75rem) scale(0.85);
    opacity: 1;
    visibility: visible;
    background: var(--input-bg);
    padding: 0 0.5rem;
  }

  &:focus + ${Label} {
    color: var(--focus-border);
  }
`;

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField_6: React.FC<InputFieldProps> = (props) => {
  return (
    <FormGroup>
      <InputField {...props} className={props.className} />
      {props?.label && <Label htmlFor={props?.id}>{props?.label}</Label>}
    </FormGroup>
  );
};

export default InputField_6;
