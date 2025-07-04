import React, { useState, useId, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { FaCreditCard, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';

type CardType = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown';

// Base styles with dark/light mode support
const CreditCardInputContainer = styled.div`
  --primary-color: #4f46e5;
  --error-color: #ef4444;
  --success-color: #10b981;
  --transition-duration: 0.2s;
  --border-radius: 0.5rem;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --bg-color: #1f2937;
    --text-color: #f3f4f6;
    --placeholder-color: #9ca3af;
    --border-color: #374151;
    --focus-ring: rgba(99, 102, 241, 0.5);
    --hover-border: #4b5563;
    --card-bg: #111827;
  }
  
  @media (prefers-color-scheme: light) {
    --bg-color: #ffffff;
    --text-color: #111827;
    --placeholder-color: #9ca3af;
    --border-color: #d1d5db;
    --focus-ring: rgba(99, 102, 241, 0.3);
    --hover-border: #9ca3af;
    --card-bg: #f9fafb;
  }
  
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const InputWithIcon = styled.div<{ $hasError?: boolean; $isFocused?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  
  ${({ $hasError }) => $hasError && css`
    --border-color: var(--error-color);
    --focus-ring: rgba(239, 68, 68, 0.3);
  `}
`;

const CreditCardInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all var(--transition-duration) ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  letter-spacing: 0.5px;
  
  &::placeholder {
    color: var(--placeholder-color);
    opacity: 0.7;
  }
  
  &:hover {
    border-color: var(--hover-border);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--focus-ring);
  }
  
  /* Hide number input spinners */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Autofill styles */
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    -webkit-text-fill-color: var(--text-color) !important;
    -webkit-box-shadow: 0 0 0 30px var(--bg-color) inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  opacity: 0.7;
  transition: opacity var(--transition-duration) ease;
  
  ${CreditCardInput}:focus ~ & {
    color: var(--primary-color);
    opacity: 1;
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CardPreview = styled.div<{ $cardType: CardType }>`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity var(--transition-duration) ease;
  
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
  
  ${({ $cardType }) => $cardType === 'unknown' && css`
    opacity: 0.3;
  `}
`;

const ErrorMessage = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--error-color);
  text-align: left;
  padding-left: 1rem;
`;

interface CreditCardInputFieldProps {
  /** Current value of the input */
  value?: string;
  /** Called when the input value changes */
  onChange?: (value: string, cardType: CardType) => void;
  /** Whether the input is in an error state */
  hasError?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Custom class name for the container */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const CreditCardInputField: React.FC<CreditCardInputFieldProps> = ({
  value: externalValue,
  onChange,
  hasError = false,
  errorMessage,
  disabled = false,
  className = '',
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState('');
  const inputId = useId();
  const isControlled = externalValue !== undefined;
  const displayValue = isControlled ? externalValue : internalValue;
  
  // Determine card type based on number
  const cardType = useMemo<CardType>(() => {
    const number = displayValue.replace(/\D/g, '');
    
    // Visa
    if (/^4/.test(number)) return 'visa';
    // Mastercard
    if (/^5[1-5]/.test(number)) return 'mastercard';
    // Amex
    if (/^3[47]/.test(number)) return 'amex';
    // Discover
    if (/^(6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5])))/.test(number)) return 'discover';
    
    return 'unknown';
  }, [displayValue]);
  
  // Format card number with spaces
  const formatCardNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    
    // Different card types have different formats
    switch (cardType) {
      case 'amex':
        // Format: XXXX XXXXXX XXXXX
        return numbers
          .replace(/(\d{4})/, '$1 ')
          .replace(/(\d{4}) (\d{6})/, '$1 $2 ')
          .trim();
      default:
        // Default format: XXXX XXXX XXXX XXXX
        return numbers
          .replace(/(\d{4})/g, '$1 ')
          .trim();
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    let numbers = e.target.value.replace(/\D/g, '');
    
    // Limit length based on card type
    const maxLength = cardType === 'amex' ? 15 : 16;
    numbers = numbers.slice(0, maxLength);
    
    // Update state
    if (!isControlled) {
      setInternalValue(numbers);
    }
    
    // Call onChange with raw numbers and card type
    if (onChange) {
      onChange(numbers, cardType);
    }
  };
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  // Get the appropriate card icon based on card type
  const renderCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return <FaCcVisa />;
      case 'mastercard':
        return <FaCcMastercard />;
      case 'amex':
        return <FaCcAmex />;
      case 'discover':
        return <FaCcDiscover />;
      default:
        return <FaCreditCard />;
    }
  };
  
  // Format the display value with proper spacing
  const formattedValue = displayValue ? formatCardNumber(displayValue) : '';
  
  return (
    <CreditCardInputContainer className={className} style={style}>
      <InputWithIcon $hasError={hasError} $isFocused={isFocused}>
        <CreditCardInput
          id={inputId}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Card number"
          value={formattedValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          maxLength={cardType === 'amex' ? 17 : 19} // Including spaces
          {...props}
        />
        <IconContainer>
          <FaCreditCard />
        </IconContainer>
        <CardPreview $cardType={cardType}>
          {renderCardIcon()}
        </CardPreview>
      </InputWithIcon>
      
      {hasError && errorMessage && (
        <ErrorMessage id={`${inputId}-error`} role="alert">
          {errorMessage}
        </ErrorMessage>
      )}
    </CreditCardInputContainer>
  );
};

export default CreditCardInputField;
