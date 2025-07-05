const Container = styled.div`
  --primary-color: #3b82f6;
  --error-color: #ef4444;
  --success-color: #10b981;
  --transition-duration: 0.3s;
  --border-radius: 0.375rem;
  
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

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: ${({ $width }) => $width || '100%'};
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: ${({ $fontSize = '1.25rem' }) => $fontSize};
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 2px solid ${({ $hasError, $isValid }) => 
    $hasError ? 'var(--error-color)' : $isValid ? 'var(--success-color)' : 'var(--border-color)'};
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  width: 100%;
  transition: all var(--transition-duration) ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  &::placeholder {
    color: var(--placeholder-color);
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
    border-color: ${({ $focusColor }) => $focusColor || 'var(--primary-color)'};
    box-shadow: 0 0 0 3px ${({ $focusColor }) => 
      $focusColor ? `${$focusColor}40` : 'var(--focus-ring)'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ $labelColor }) => $labelColor || 'var(--label-color)'};
  font-size: 0.875rem;
  transition: color var(--transition-duration) ease;
  
  ${StyledInput}:focus + & {
    color: ${({ $focusColor }) => $focusColor || 'var(--label-focus)'};
  }
`;

const Message = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ $isError, $isValid }) => 
    $isError 
      ? 'var(--error-color)' 
      : $isValid 
        ? 'var(--success-color)' 
        : 'var(--text-color)'};
  transition: color var(--transition-duration) ease;
  min-height: 1.5rem;
`;

const InputField = ({
  width = '100%',
  height = 'auto',
  placeholderText = 'Type something...',
  fontSize = '1.25rem',
  hasError = false,
  isValid = false,
  focusColor,
  labelColor,
  errorMessage = 'This field is required',
  successMessage = 'Looks good!',
  containerClassName = '',
  className = '',
  style,
  onChange,
  value: externalValue,
  ...props
}) => {
  const [value, setValue] = React.useState(externalValue || '');
  const [isFocused, setIsFocused] = React.useState(false);
  const inputId = React.useId();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      <InputWrapper 
        $width={width}
        className={containerClassName}
      >
        <StyledInput
          id={inputId}
          type="text"
          placeholder={placeholderText}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          $hasError={hasError}
          $isValid={isValid && !hasError && value.length > 0}
          $fontSize={fontSize}
          $focusColor={focusColor}
          className={className}
          style={style}
          {...props}
        />
        <Label 
          htmlFor={inputId}
          $labelColor={labelColor}
          $focusColor={focusColor}
        >
          {placeholderText}
        </Label>
        <Message 
          $isError={hasError} 
          $isValid={isValid && !hasError && value.length > 0}
        >
          {hasError ? errorMessage : (isValid && value.length > 0 ? successMessage : '')}
        </Message>
      </InputWrapper>
    </Container>
  );
};

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [hasError, setHasError] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // Simple validation
    if (newValue.length > 0) {
      setIsValid(true);
      setHasError(false);
    } else {
      setIsValid(false);
    }
  };

  const handleBlur = () => {
    if (value.length === 0) {
      setHasError(true);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Animated Input Field</h2>
      
      <InputField 
        placeholderText="Type something..."
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={hasError}
        isValid={isValid}
        errorMessage="This field is required"
        successMessage="Looks good!"
        focusColor="#8b5cf6"
      />
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Examples:</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <InputField 
            placeholderText="Default State"
            width="200px"
          />
          <InputField 
            placeholderText="Focused"
            width="200px"
            style={{ borderColor: '#8b5cf6' }}
          />
          <InputField 
            placeholderText="With Error"
            hasError={true}
            errorMessage="Invalid input"
            width="200px"
          />
          <InputField 
            placeholderText="Success"
            isValid={true}
            value="Valid input"
            width="200px"
          />
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
