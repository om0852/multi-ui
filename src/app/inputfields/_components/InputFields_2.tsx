"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ComboBoxProps {
  className?: string;
  placeholder?: string;
  inputType?: string;
  name: string;
  id: string;
  label?: string;
  error?: string;
  options?: string[];
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  font-weight: 500;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.2em 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 0.3em;
`;

const ComboBoxWrapper = styled.div`
  position: relative;
`;

const StyledDataList = styled.datalist`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  color: black;
`;

const InputField_2: React.FC<ComboBoxProps> = ({
  className,
  placeholder,
  inputType = "text",
  name,
  id,
  label,
  error,
  options
}) => {
  return (
    <InputWrapper >
      {label && <Label htmlFor={id}>{label}</Label>}
      <ComboBoxWrapper>
        <Input
          type={inputType}
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          list={`${id}-options`}
          autoComplete="off"
        />
        <StyledDataList id={`${id}-options`}>
          {options && options.map((option, index) => (
            <motion.option key={index} value={option} whileHover={{ scale: 1.05 }}>
              {option}
            </motion.option>
          ))}
        </StyledDataList>
      </ComboBoxWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default InputField_2;
