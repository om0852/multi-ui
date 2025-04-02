"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  font-weight: 500;
`;

const ComboBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === 'left' ? 'left: 10px;' : 'right: 10px;')}
  pointer-events: none;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5em 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  padding-left: ${({ hasLeadingIcon }) => (hasLeadingIcon ? '35px' : '10px')};
  padding-right: ${({ hasTrailingIcon }) => (hasTrailingIcon ? '35px' : '10px')};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 0.3em;
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

const InputField_2 = ({
  className,
  placeholder,
  inputType = "text",
  name,
  id,
  label,
  error,
  options,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ComboBoxWrapper>
        {leadingIcon && <Icon src={leadingIcon} alt="leading icon" position="left" />}
        <Input
          type={inputType}
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          list={`${id}-options`}
          autoComplete="off"
          hasLeadingIcon={!!leadingIcon}
          hasTrailingIcon={!!trailingIcon}
        />
        {trailingIcon && <Icon src={trailingIcon} alt="trailing icon" position="right" />}
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
