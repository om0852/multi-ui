import React, { useState, useId } from 'react';
import styled, { css } from 'styled-components';

// Base styles with dark/light mode support
const Container = styled.div`
  --primary-color: #3b82f6;
  --error-color: #ef4444;
  --success-color: #10b981;
  --transition-duration: 0.3s;
  --border-radius: 0.375rem;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --bg-color: #111827;
    --text-color: #f3f4f6;
    --placeholder-color: #9ca3af;
    --border-color: #374151;
    --focus-ring: rgba(59, 130, 246, 0.5);
    --label-color: #d1d5db;
    --label-focus: #93c5fd;
  }
  
  @media (prefers-color-scheme: light) {
    --bg-color: #ffffff;
    --text-color: #111827;
    --placeholder-color: #9ca3af;
    --border-color: #d1d5db;
    --focus-ring: rgba(59, 130, 246, 0.3);
    --label-color: #4b5563;
    --label-focus: #3b82f6;
  }
  
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  margin: 2rem auto;
  max-width: 100%;
  padding: 0 1rem;
  text-align: left;
  color: var(--text-color);
  background-color: transparent;
  
  @media (min-width: 640px) {
    max-width: 42rem;
    padding: 0;
  }
`;

// Styled input wrapper
const InputWrapper = styled.div<{ $hasError?: boolean; $isValid?: boolean }>`
  position: relative;
  margin: 1.5rem 0;
  padding-top: 1.5rem;
  
  ${({ $hasError, $isValid }) => {
    if ($hasError) {
      return css`
        --border-color: var(--error-color);
        --label-focus: var(--error-color);
      `;
    }
    if ($isValid) {
      return css`
        --border-color: var(--success-color);
        --label-focus: var(--success-color);
      `;
    }
    return '';
  }}
`;

// Input field with animations and theming
interface StyledInputProps {
  /** Width of the input */
  width?: string;
  /** Height of the input */
  height?: string;
  /** Whether the input has an error */
  $hasError?: boolean;
  /** Whether the input is valid */
  $isValid?: boolean;
  /** Font size for the input */
  fontSize?: string;
  /** Custom focus color */
  focusColor?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  font-family: inherit;
  font-size: ${({ fontSize = '1.25rem' }) => fontSize};
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  height: ${({ height = 'auto' }) => height};
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--border-color);
  padding: 0.75rem 0.25rem;
  color: var(--text-color);
  transition: all var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  
  &::placeholder {
    color: var(--placeholder-color);
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
  
  &:focus {
    outline: none;
    border-color: ${({ focusColor }) => focusColor || 'var(--primary-color)'};
    box-shadow: 0 1px 0 0 ${({ focusColor }) => focusColor || 'var(--primary-color)'};
    padding-left: 0.5rem;
    
    &::placeholder {
      opacity: 0.5;
    }
    
    + label > span {
      color: ${({ focusColor }) => focusColor || 'var(--label-focus)'};
      transform: translateY(-2.5rem) scale(0.85);
      opacity: 1;
    }
  }
  
  &:not(:placeholder-shown) {
    + label > span {
      transform: translateY(-2.5rem) scale(0.85);
      opacity: 1;
    }
  }
  
  /* Autofill styles */
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    -webkit-text-fill-color: var(--text-color) !important;
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
    border-bottom: 2px solid var(--border-color);
    -webkit-border-before: 2px solid var(--border-color);
    -webkit-border-after: 2px solid var(--border-color);
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Error state */
  ${({ $hasError }) => $hasError && css`
    border-color: var(--error-color);
    
    &:focus {
      border-color: var(--error-color);
      box-shadow: 0 1px 0 0 var(--error-color);
    }
    
    + label > span {
      color: var(--error-color) !important;
    }
  `}
  
  /* Valid state */
  ${({ $isValid }) => $isValid && css`
    border-color: var(--success-color);
    
    &:focus {
      border-color: var(--success-color);
      box-shadow: 0 1px 0 0 var(--success-color);
    }
    
    + label > span {
      color: var(--success-color) !important;
    }
  `}
`;

// Styled label and placeholder span
const StyledLabel = styled.label<{ width?: string }>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary || 'var(--primary-color)'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ${StyledInput}:focus + &::after {
    transform: scaleX(1);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.25rem;
  color: var(--label-color);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  transform-origin: 0 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  opacity: 0.8;
  z-index: 1;
  padding: 0 0.25rem;
  background: transparent;
  
  ${StyledInput}:focus + label > &,
  ${StyledInput}:not(:placeholder-shown) + label > & {
    background: var(--bg-color);
    padding: 0 0.5rem;
    left: 0.5rem;
  }
  
  ${StyledInput}[disabled] + label > & {
    opacity: 0.5;
  }
`;

interface InputWithAnimationProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  /** Width of the input */
  width?: string;
  /** Height of the input */
  height?: string;
  /** Placeholder text */
  placeholderText?: string;
  /** Custom font size */
  fontSize?: string;
  /** Whether the input has an error */
  hasError?: boolean;
  /** Whether to show validation state */
  isValid?: boolean;
  /** Custom focus color */
  focusColor?: string;
  /** Custom label color */
  labelColor?: string;
  /** Custom error message */
  errorMessage?: string;
  /** Custom success message */
  successMessage?: string;
  /** Additional class name for the container */
  containerClassName?: string;
}

const InputField_12: React.FC<InputWithAnimationProps> = ({
  width,
  height,
  placeholderText = "Type something...",
  fontSize,
  hasError = false,
  isValid = false,
  focusColor,
  labelColor,
  errorMessage,
  successMessage,
  containerClassName = '',
  className = '',
  style,
  onChange,
  value: externalValue,
  ...props
}) => {
  const [value, setValue] = useState<string>('');
  const inputId = useId();
  const isControlled = externalValue !== undefined;
  const displayValue = isControlled ? externalValue : value;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const containerStyle = {
    ...style,
    '--primary-color': focusColor,
    '--label-color': labelColor,
  } as React.CSSProperties;

  return (
    <Container className={containerClassName}>
      <InputWrapper 
        $hasError={hasError} 
        $isValid={isValid && !hasError}
        style={containerStyle}
      >
        <StyledInput
          id={inputId}
          value={displayValue}
          onChange={handleInputChange}
          placeholder=" " // Required for the floating label to work
          autoComplete="off"
          width={width}
          height={height}
          fontSize={fontSize}
          $hasError={hasError}
          $isValid={isValid && !hasError}
          focusColor={focusColor}
          className={`animated-input ${className}`}
          {...props}
        />
        <StyledLabel htmlFor={inputId} width={width}>
          <StyledSpan>
            {placeholderText}
            {props.required && ' *'}
          </StyledSpan>
        </StyledLabel>
      </InputWrapper>
      
      {/* Validation messages */}
      {hasError && errorMessage && (
        <div className="text-sm text-red-500 mt-1">
          {errorMessage}
        </div>
      )}
      
      {!hasError && isValid && successMessage && (
        <div className="text-sm text-green-500 mt-1">
          {successMessage}
        </div>
      )}
    </Container>
  );
};

export default InputField_12;
