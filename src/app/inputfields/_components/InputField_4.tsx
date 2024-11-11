"use client";
import React, { FC } from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  id: string;
  placeholder: string;
  label: string;
  value?: string;
  required?: boolean;
  className?: string; // Allow user to set a custom className
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // Allow user to handle input changes
  options?: string[]; // Options for the datalist
  error?: string; // Error message
}

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const InputField = styled.input<{ hasError?: boolean }>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${({ hasError }) => (hasError ? 'red' : '#9b9b9b')}; // Red border for error
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

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
      top: -0px;  // This ensures that the label moves above the input when focused
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
  top: 30px;  // Adjust position so the label starts inside the input field
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
  pointer-events: none; // Prevent the label from blocking the input field
  z-index: 1; // Ensure the label stays above the input
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
        className={className} // Allow user to add custom className
        list={options ? `${id}-datalist` : undefined} // Show datalist if options are provided
        // Pass error state as a styled-component prop, not as an attribute to <input>
        hasError={!!error} 
      />
      {options && (
        <datalist id={`${id}-datalist`}>
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      )}
      <Label htmlFor={id} className="form__label">{label}</Label>
      {error && <ErrorText>{error}</ErrorText>} {/* Show error message if exists */}
    </FormGroup>
  );
};

export default InputField_4;
