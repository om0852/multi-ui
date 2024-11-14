"use client";
import React from 'react';
import styled from 'styled-components';

interface InputGroupProps {
  className?: string;
  placeholder?: string;
  inputType?: string;
  name: string;
  id: string;
  label?: string;
  error?: string;
  value?: string;
}

const Container = styled.div`
  background: linear-gradient(100deg, #402, #006);
  padding: 2em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-position: 50% 50%;
  animation: background-move 10s linear infinite;
  background-size: max(100vw, 30em) auto, 100% 100%;
`;

const InputGroup = styled.div`
  width: 100%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  mix-blend-mode: lighten;
`;

const Label = styled.label`
  padding: 0 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 0.1em;
  color: rgba(255, 220, 255, 0.6);
  cursor: pointer;
`;

const Input = styled.input`
  color: #fff;
  font-size: 1.25rem;
  line-height: 1;
  border-style: none;
  outline: none;
  height: calc(1em + 1.6em + 0.5em);
  width: 100%;
  padding: 0.8em 1em;
  border: 0.25em solid transparent;
  background-image: linear-gradient(#000, #000),
    linear-gradient(120deg, #f09 0%, #0ff 50%, #9f0 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 1.8em;
  background-size: 200% 100%;
  transition: background-position 0.8s ease-out;

  &:hover {
    background-position: 100% 0;
  }

  &:focus {
    outline: 2px dashed #ad2b89;
    outline-offset: 0.5em;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 0.3em;
`;

const InputField_3: React.FC<InputGroupProps> = ({
  className,
  placeholder,
  inputType = "text",
  name,
  id,
  label,
  error,
  value
}) => {
  return (
    <Container>
      <InputGroup className={className}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputGroup>
    </Container>
  );
};

export default InputField_3;
