import React, { InputHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

// Color variables for dark/light mode
const getThemeColors = () => ({
  // Dark mode colors
  dark: {
    primary: "#60a5fa",
    text: "#f3f4f6",
    placeholder: "#9ca3af",
    border: "#4b5563",
    success: "#34d399",
    background: "#1f2937"
  },
  // Light mode colors
  light: {
    primary: "#0077FF",
    text: "#223254",
    placeholder: "#9098A9",
    border: "#c8ccd4",
    success: "#10b981",
    background: "#ffffff"
  }
});

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
  font-family: Avenir, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  background: var(--bg-color, #ffffff);
  transition: background-color 0.3s ease, color 0.3s ease;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --primary-color: #60a5fa;
    --text-color: #f3f4f6;
    --placeholder-color: #9ca3af;
    --border-color: #4b5563;
    --success-color: #34d399;
    --bg-color: #1f2937;
  }
  
  @media (prefers-color-scheme: light) {
    --primary-color: #0077FF;
    --text-color: #223254;
    --placeholder-color: #9098A9;
    --border-color: #c8ccd4;
    --success-color: #10b981;
    --bg-color: #ffffff;
  }
  
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
  padding: 0 16px 0 0;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  border: none;
  color: var(--text-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    -webkit-text-fill-color: var(--text-color) !important;
    -webkit-box-shadow: 0 0 0 30px var(--bg-color) inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  
  &:focus {
    outline: none;
    & + .border path {
      stroke: var(--primary-color);
      stroke-width: 2.5;
    }
  }
  
  &:valid + .border path {
    animation: ${elasticInput} 0.8s ease forwards;
    stroke: var(--success-color);
  }
  
  &::placeholder {
    color: var(--placeholder-color);
    opacity: 0.8;
  }
`;

const Border = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 18px;
  fill: none;
  path {
    stroke: var(--border-color);
    stroke-width: 2;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    stroke: var(--success-color);
    stroke-width: 2.5;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
