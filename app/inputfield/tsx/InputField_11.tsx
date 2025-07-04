import React, { InputHTMLAttributes, useId } from 'react';
import styled, { css } from 'styled-components';

type InputVariant = 'default' | 'filled' | 'outlined' | 'ghost';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label text displayed above the input
   */
  label?: string;
  /**
   * Width of the input container
   */
  width?: string;
  /**
   * Height of the input
   */
  height?: string;
  /**
   * Font size for the input text
   */
  fontSize?: string;
  /**
   * Visual variant of the input
   * @default 'outlined'
   */
  variant?: InputVariant;
  /**
   * Custom background color (only applies to 'filled' variant)
   */
  backgroundColor?: string;
  /**
   * Custom border color (only applies to 'outlined' variant)
   */
  borderColor?: string;
  /**
   * Custom focus color for the input
   */
  focusColor?: string;
  /**
   * Custom label color
   */
  labelColor?: string;
  /**
   * Whether to show a floating label
   * @default true
   */
  floatingLabel?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #1f2937;
    --input-text: #f9fafb;
    --input-placeholder: #9ca3af;
    --input-border: #374151;
    --input-hover: #4b5563;
    --input-focus: #3b82f6;
    --input-focus-ring: rgba(59, 130, 246, 0.25);
    --label-color: #d1d5db;
    --label-focus: #93c5fd;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #111827;
    --input-placeholder: #9ca3af;
    --input-border: #d1d5db;
    --input-hover: #9ca3af;
    --input-focus: #2563eb;
    --input-focus-ring: rgba(37, 99, 235, 0.25);
    --label-color: #4b5563;
    --label-focus: #3b82f6;
  }
`;

const InputContainer = styled.div<{ 
  width?: string; 
  height?: string; 
  fontSize?: string;
  variant?: InputVariant;
  floatingLabel?: boolean;
}>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  margin: 0.5rem 0 1.5rem;
  
  /* Base input styles */
  .Input-text {
    display: block;
    width: 100%;
    padding: ${({ variant }) => variant === 'filled' ? '1.75rem 1rem 0.75rem' : '1rem'};
    font-family: inherit;
    font-size: ${({ fontSize }) => fontSize || '1rem'};
    font-weight: 400;
    line-height: 1.5;
    color: var(--input-text);
    background-color: ${({ variant }) => variant === 'filled' ? 'var(--input-bg)' : 'transparent'};
    border: ${({ variant }) => variant === 'outlined' || variant === 'default' ? '1px solid var(--input-border)' : 'none'};
    border-radius: 0.375rem;
    box-shadow: ${({ variant }) => variant === 'ghost' ? 'none' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'};
    appearance: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    
    ${({ variant }) => variant === 'filled' && css`
      border-bottom: 2px solid var(--input-border);
      border-radius: 0.375rem 0.375rem 0 0;
      background-color: var(--input-bg);
    `}
    
    ${({ variant }) => variant === 'ghost' && css`
      background-color: transparent;
      border-bottom: 2px solid transparent;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
    `}

    /* Placeholder styles */
    &::placeholder {
      color: var(--input-placeholder);
      opacity: 0.8;
    }

    /* Hover state */
    &:hover {
      border-color: var(--input-hover);
      
      ${({ variant }) => variant === 'ghost' && css`
        border-bottom-color: var(--input-hover);
      `}
    }

    /* Focus state */
    &:focus {
      outline: none;
      border-color: var(--input-focus);
      box-shadow: 0 0 0 3px var(--input-focus-ring);
      
      ${({ variant }) => variant === 'ghost' && css`
        border-bottom-color: var(--input-focus);
        box-shadow: none;
      `}
      
      + .Input-label {
        color: var(--label-focus);
      }
    }
    
    /* Autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
      -webkit-text-fill-color: var(--input-text) !important;
      -webkit-box-shadow: 0 0 0 30px var(--input-bg) inset !important;
      transition: background-color 5000s ease-in-out 0s;
    }
    
    /* Disabled state */
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-color: var(--input-bg);
    }
  }
  
  /* Label styles */
  .Input-label {
    position: absolute;
    left: ${({ variant, floatingLabel }) => 
      variant === 'ghost' ? '0' : floatingLabel ? '0.75rem' : '0.75rem'};
    top: ${({ floatingLabel }) => floatingLabel ? '0.5rem' : '50%'};
    padding: 0 0.25rem;
    font-size: ${({ floatingLabel, fontSize }) => 
      floatingLabel ? '0.75rem' : fontSize ? `calc(${fontSize} - 0.25rem)` : '0.875rem'};
    font-weight: 500;
    color: var(--label-color);
    background-color: ${({ variant }) => variant === 'filled' ? 'var(--input-bg)' : 'transparent'};
    transform: ${({ floatingLabel }) => 
      floatingLabel 
        ? 'translateY(0) scale(0.9)' 
        : 'translateY(-50%) scale(1)'};
    transform-origin: 0 0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 1;
    opacity: ${({ floatingLabel }) => floatingLabel ? 0 : 1};
    
    ${({ variant }) => variant === 'ghost' && css`
      left: 0;
      background-color: transparent;
    `}
  }
  
  /* Floating label animation */
  .Input-text:not(:placeholder-shown) + .Input-label,
  .Input-text:focus + .Input-label {
    opacity: 1;
    transform: translateY(0) scale(0.9);
  }
  
  /* Adjust padding when label is floating */
  .Input-text:not(:placeholder-shown),
  .Input-text:focus {
    ${({ floatingLabel, variant }) => floatingLabel && css`
      padding-top: ${variant === 'filled' ? '1.75rem' : '1.5rem'};
      padding-bottom: ${variant === 'filled' ? '0.25rem' : '0.5rem'};
    `}
  }
`;

const InputField_11: React.FC<InputProps> = ({
  label,
  placeholder,
  width,
  height,
  fontSize = '1rem',
  variant = 'outlined',
  floatingLabel = true,
  backgroundColor,
  borderColor,
  focusColor,
  labelColor,
  className = '',
  style,
  ...props
}) => {
  const inputId = useId();
  
  const containerStyle = {
    ...style,
    '--input-bg': backgroundColor,
    '--input-border': borderColor,
    '--input-focus': focusColor,
    '--label-color': labelColor,
  } as React.CSSProperties;

  return (
    <Wrapper>
      <InputContainer 
        width={width} 
        height={height} 
        fontSize={fontSize}
        variant={variant}
        floatingLabel={floatingLabel}
        className={className}
        style={containerStyle}
      >
        <input
          id={inputId}
          type="text"
          className="Input-text"
          placeholder={floatingLabel ? ' ' : (placeholder || 'Enter your text')}
          aria-label={label || placeholder || 'Input field'}
          {...props}
        />
        {label && (
          <label 
            htmlFor={inputId} 
            className="Input-label"
            style={labelColor ? { color: labelColor } : undefined}
          >
            {label}
          </label>
        )}
      </InputContainer>
    </Wrapper>
  );
};

export default InputField_11;
