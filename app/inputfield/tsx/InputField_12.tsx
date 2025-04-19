import React, { useState } from 'react';
import styled from 'styled-components';

// Container for centering the form
const Container = styled.div`
  font-family: 'Lora', sans-serif;
  width: 100%;
  margin: 5% auto 0 auto;
  max-width: 1125px;
  padding: 0 5%;
  text-align: center;
`;

// Styled input wrapper
const InputWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

// Input field with animations, allows custom width, height, etc.
interface StyledInputProps {
  width?: string;
  height?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  font-family: 'Ubuntu', sans-serif;
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  width: ${({ width }) => (width ? width : '100%')};  // Default to 100% if no width provided
  height: ${({ height }) => (height ? height : 'auto')}; // Default to auto if no height provided
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 5px;
  transition: padding-top 0.2s ease, margin-top 0.2s ease;

  &:focus {
    outline: none;
    padding-top: 35px;
  }

  &:valid + label > span,
  &:focus + label > span {
    top: -100px;
    font-size: 22px;
    color: #333;
  }

  &:valid + label {
    border-color: green;
  }

  &:invalid {
    box-shadow: none;
  }
`;

// Styled label and placeholder span
const StyledLabel = styled.label<StyledInputProps>`
  display: block;
  position: relative;
  white-space: nowrap;
  margin: 0;
  width: ${({ width }) => (width ? width : '100%')}; // Match input width
  border-top: 1px solid red;
  transition: width 0.4s ease, height 0.4s ease;
  height: 0px;

  ${StyledInput}:focus + &,
  ${StyledInput}:valid + & {
    width: ${({ width }) => (width ? width : '100%')}; // Match input width
    height: 35px;
  }
`;

const StyledSpan = styled.span`
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8f8f8f;
  font-size: 48px;
  top: -66px;
  left: 0;
  z-index: -1;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
`;

interface InputWithAnimationProps {
  width?: string;
  height?: string;
  placeholderText?: string;
}

const InputField_12: React.FC<InputWithAnimationProps> = ({ width, height, placeholderText = "What's your name?", ...props }) => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  return (
    <Container>
      <InputWrapper>
        <StyledInput
        //   type="text"
        //   name="name"
        //   id="nme"
          value={value}
          onChange={handleInputChange}
          required
          autoComplete="off"
          width={width} // Pass width prop to StyledInput
          height={height} // Pass height prop to StyledInput
          {...props} // Spread any other props
        />
        <StyledLabel htmlFor="nme" width={width}>
          <StyledSpan>{placeholderText}</StyledSpan>
        </StyledLabel>
      </InputWrapper>
    </Container>
  );
};

export default InputField_12;
