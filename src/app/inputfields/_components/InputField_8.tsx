import React, { InputHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

const primaryColor = "#0077FF";

// Keyframe animation for the elastic input effect
const elasticInput = keyframes`
  33% {
    d: path("M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12");
  }
  66% {
    d: path("M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12");
  }
`;

// Styled Components
const Container = styled.div`
  height: 100%;
  display: grid;
  font-family: Avenir, sans-serif;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  * {
    box-sizing: border-box;
  }
`;

const InputWrapper = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  height: 53px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: none;
  color: #223254;
  transition: all 0.15s ease;
  &:focus {
    outline: none;
    & + .border path {
      stroke: ${primaryColor};
    }
  }
  &:valid + .border path {
    animation: ${elasticInput} 0.8s ease forwards;
  }
  &::placeholder {
    color: #9098A9;
  }
`;

const Border = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 18px;
  fill: none;
  path {
    stroke: #c8ccd4;
    stroke-width: 2;
    transition: all 0.2s ease;
  }
`;

const CheckMark = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: none;
  transform: translate(0, 9px) scale(0);
  transition: all 0.3s cubic-bezier(0.5, 0.9, 0.25, 1.3);
  transition-delay: 0.15s;
  ${StyledInput}:valid + ${Border} + & {
    transform: translate(0, 0) scale(1);
  }
  path {
    stroke: ${primaryColor};
    stroke-width: 2;
  }
`;

// Extend InputHTMLAttributes to include pattern as an optional prop
interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  pattern?: string;
}

const InputField_8: React.FC<AnimatedInputProps> = ({ pattern = ".{6,}", ...props }) => {
  return (
    <Container>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Input"
          pattern={pattern}  // Pattern is now customizable
          required
          {...props}
        />
        <Border width="280px" height="18px" viewBox="0 0 280 18" className="">
          <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12" />
        </Border>
        <CheckMark width="14px" height="12px" viewBox="0 0 14 12" className="check">
          <path d="M1 7 L5.5 11 L13 1" />
        </CheckMark>
      </InputWrapper>
    </Container>
  );
};

export default InputField_8;
