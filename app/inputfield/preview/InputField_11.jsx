const Wrapper = styled.div`
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  
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

const InputContainer = styled.div`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  margin: 0.5rem 0 1.5rem;
  
  .Input-text {
    display: block;
    width: 100%;
    padding: ${({ $variant }) => $variant === 'filled' ? '1.75rem 1rem 0.75rem' : '1rem'};
    font-family: inherit;
    font-size: ${({ $fontSize }) => $fontSize || '1rem'};
    font-weight: 400;
    line-height: 1.5;
    color: var(--input-text);
    background-color: ${({ $variant }) => $variant === 'filled' ? 'var(--input-bg)' : 'transparent'};
    border: ${({ $variant }) => $variant === 'outlined' || $variant === 'default' ? '1px solid var(--input-border)' : 'none'};
    border-radius: 0.375rem;
    box-shadow: ${({ $variant }) => $variant === 'ghost' ? 'none' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'};
    appearance: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    
    ${({ $variant }) => $variant === 'filled' && `
      border-bottom: 2px solid var(--input-border);
      border-radius: 0.375rem 0.375rem 0 0;
      background-color: var(--input-bg);
    `}
    
    ${({ $variant }) => $variant === 'ghost' && `
      background-color: transparent;
      border-bottom: 2px solid transparent;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
    `}

    &::placeholder {
      color: var(--input-placeholder);
      opacity: 0.8;
    }

    &:hover {
      border-color: var(--input-hover);
      
      ${({ $variant }) => $variant === 'ghost' && `
        border-bottom-color: var(--input-hover);
      `}
    }

    &:focus {
      outline: none;
      border-color: var(--input-focus);
      box-shadow: 0 0 0 3px var(--input-focus-ring);
      
      ${({ $variant }) => $variant === 'ghost' && `
        border-bottom-color: var(--input-focus);
        box-shadow: none;
      `}
      
      + .Input-label {
        color: var(--label-focus);
      }
    }
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
      -webkit-text-fill-color: var(--input-text) !important;
      -webkit-box-shadow: 0 0 0 30px var(--input-bg) inset !important;
      transition: background-color 5000s ease-in-out 0s;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-color: var(--input-bg);
    }
  }
  
  .Input-label {
    position: absolute;
    left: ${({ $variant, $floatingLabel }) => 
      $variant === 'ghost' ? '0' : $floatingLabel ? '0.75rem' : '0.75rem'};
    top: ${({ $floatingLabel }) => $floatingLabel ? '0.5rem' : '50%'};
    padding: 0 0.25rem;
    font-size: ${({ $floatingLabel, $fontSize }) => 
      $floatingLabel ? '0.75rem' : $fontSize ? `calc(${$fontSize} - 0.25rem)` : '0.875rem'};
    font-weight: 500;
    color: var(--label-color);
    background-color: ${({ $variant }) => $variant === 'filled' ? 'var(--input-bg)' : 'transparent'};
    transform: ${({ $floatingLabel }) => 
      $floatingLabel 
        ? 'translateY(0) scale(0.9)' 
        : 'translateY(-50%) scale(1)'};
    transform-origin: 0 0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 1;
    opacity: ${({ $floatingLabel }) => $floatingLabel ? 0 : 1};
    
    ${({ $variant }) => $variant === 'ghost' && `
      left: 0;
      background-color: transparent;
    `}
  }
  
  .Input-helper {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--label-color);
  }
`;

const InputField = ({
  label = "Input Label",
  placeholder = "",
  width = "100%",
  height = "auto",
  fontSize = "1rem",
  variant = "outlined",
  floatingLabel = true,
  backgroundColor,
  borderColor,
  focusColor,
  labelColor,
  className = "",
  style,
  ...props
}) => {
  const inputId = React.useId();
  const [value, setValue] = React.useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <InputContainer 
        $width={width}
        $height={height}
        $fontSize={fontSize}
        $variant={variant}
        $floatingLabel={floatingLabel}
        className={className}
        style={style}
      >
        <input
          id={inputId}
          type="text"
          className="Input-text"
          placeholder={floatingLabel ? placeholder : " "}
          value={value}
          onChange={handleChange}
          style={{
            backgroundColor: variant === 'filled' ? backgroundColor : undefined,
            borderColor: borderColor,
          }}
          {...props}
        />
        {label && (
          <label 
            htmlFor={inputId} 
            className="Input-label"
            style={{
              color: labelColor,
              backgroundColor: variant === 'filled' ? backgroundColor : undefined,
            }}
          >
            {label}
          </label>
        )}
      </InputContainer>
    </Wrapper>
  );
};

const Demo = () => (
  <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '0 1rem' }}>
    <h2>Input Variants</h2>
    
    <h3>Outlined (Default)</h3>
    <InputField 
      label="Outlined Input" 
      placeholder="Type something..."
      variant="outlined"
    />
    
    <h3>Filled</h3>
    <InputField 
      label="Filled Input" 
      placeholder="Type something..."
      variant="filled"
      backgroundColor="#f3f4f6"
    />
    
    <h3>Ghost</h3>
    <InputField 
      label="Ghost Input" 
      placeholder="Type something..."
      variant="ghost"
    />
  </div>
);

render(<Demo />);
