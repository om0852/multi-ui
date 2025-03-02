"use client";
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  name: string;
  id: string;
  placeholder: string;
  label: string;
  value?: string;
  required?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options?: string[];
  error?: string;
}

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const InputField = styled.input<{ error?: string }>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ${({ error }) =>
    error &&
    css`
      border-bottom-color: red;
    `}

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
      top: -0px;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 30px;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
  pointer-events: none;
  z-index: 1;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const InputField_4: FC<InputProps> = ({
  name,
  id,
  placeholder,
  label,
  value,
  required,
  className,
  onChange,
  options,
  error,
}) => {
  return (
    <FormGroup>
      <InputField
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={className}
        list={options ? `${id}-datalist` : undefined}
        error={error}
      />
      {options && (
        <datalist id={`${id}-datalist`}>
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      )}
      <Label htmlFor={id} className="form__label">{label}</Label>
      {error && <ErrorText>{error}</ErrorText>}
    </FormGroup>
  );
};

export default InputField_4;
