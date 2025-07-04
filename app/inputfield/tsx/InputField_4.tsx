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
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --label-color: #a0aec0;
    --label-focus: #81e6d9;
    --gradient-start: #81e6d9;
    --gradient-end: #4fd1c5;
    --error-color: #fc8181;
  }
  
  @media (prefers-color-scheme: light) {
    --input-text: #2d3748;
    --input-border: #cbd5e0;
    --input-placeholder: #a0aec0;
    --label-color: #718096;
    --label-focus: #2c7a7b;
    --gradient-start: #11998e;
    --gradient-end: #38ef7d;
    --error-color: #e53e3e;
  }
`;

const InputField = styled.input<{ error?: string }>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--input-border);
  outline: 0;
  font-size: 1.1rem;
  color: var(--input-text);
  padding: 7px 0;
  background: transparent;
  transition: all 0.3s ease;

  ${({ error }) =>
    error &&
    css`
      border-bottom-color: var(--error-color);
    `}

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.1rem;
    cursor: text;
    top: 20px;
    color: var(--label-color);
  }

  &:focus {
    ~ .form__label {
      font-size: 0.9rem;
      color: var(--label-focus);
      font-weight: 600;
      top: -5px;
    }
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 2px;
    border-image: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 20px;
  left: 0;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  color: var(--label-color);
  pointer-events: none;
  z-index: 1;
  background: ${({ theme }) => theme === 'dark' ? '#1a202c' : '#ffffff'};
  padding: 0 5px;
  margin-left: 5px;
`;

const ErrorText = styled.div`
  color: var(--error-color);
  font-size: 0.85rem;
  margin-top: 8px;
  padding-left: 5px;
  transition: color 0.3s ease;
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
