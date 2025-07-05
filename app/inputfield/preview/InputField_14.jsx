const InputField = ({
  label = "Input Label",
  placeholder = "",
  type = "text",
  value = "",
  onChange,
  error = "",
  success = false,
  disabled = false,
  required = false,
  icon = null,
  autoFocus = false,
  maxLength = null,
  className = "",
  style = {},
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const inputId = React.useId();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    margin: '1rem 0',
    ...style,
  };

  const inputWrapperStyle = {
    position: 'relative',
    width: '100%',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: '16px',
    borderRadius: '10px',
    border: '0',
    backgroundColor: error ? '#fff5f5' : success ? '#f4fce3' : '#f3f4f6',
    outline: error ? '2px solid #ff6b6b' : success ? '2px solid #82c91e' : isFocused ? '2px solid #3b82f6' : '2px solid #e2e8f0',
    outlineOffset: '2px',
    transition: 'all 0.25s ease',
    color: '#1a1a1a',
    paddingLeft: icon ? '40px' : '16px',
    boxSizing: 'border-box',
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: isFocused ? '#3b82f6' : '#6b7280',
    transition: 'color 0.25s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: error ? '#ef4444' : isFocused ? '#3b82f6' : '#4b5563',
    transition: 'color 0.25s ease',
  };

  const errorStyle = {
    marginTop: '4px',
    fontSize: '12px',
    color: '#ef4444',
    height: '16px',
  };

  const successStyle = {
    marginTop: '4px',
    fontSize: '12px',
    color: '#10b981',
    height: '16px',
  };

  return (
    <div style={containerStyle} className={className}>
      {label && (
        <label htmlFor={inputId} style={labelStyle}>
          {label}
          {required && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
        </label>
      )}
      
      <div style={inputWrapperStyle}>
        {icon && <div style={iconStyle}>{icon}</div>}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          maxLength={maxLength}
          style={inputStyle}
        />
      </div>
      
      {error ? (
        <div style={errorStyle}>{error}</div>
      ) : success ? (
        <div style={successStyle}>✓ Success</div>
      ) : (
        <div style={{ height: '16px' }}></div>
      )}
    </div>
  );
};

// Demo component to showcase different states
const Demo = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [search, setSearch] = React.useState('');
  
  const emailError = email && !/\S+@\S+\.\S+/.test(email) 
    ? 'Please enter a valid email address' 
    : '';
  
  const passwordError = password && password.length < 8 
    ? 'Password must be at least 8 characters' 
    : '';
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ color: '#111827', marginBottom: '1.5rem' }}>Input Field Examples</h2>
      
      <InputField 
        label="Email Address"
        placeholder="you@example.com"
        type="email"
        value={email}
        onChange={setEmail}
        error={emailError}
        required
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        }
      />
      
      <InputField 
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={setPassword}
        error={passwordError}
        required
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        }
      />
      
      <InputField 
        label="Search"
        placeholder="Search..."
        type="text"
        value={search}
        onChange={setSearch}
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        }
      />
      
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#4b5563', marginBottom: '1rem' }}>Input States</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <InputField 
            label="Default Input"
            placeholder="Type something..."
          />
          
          <InputField 
            label="Focused Input"
            placeholder="Click to focus"
            autoFocus
          />
          
          <InputField 
            label="Disabled Input"
            placeholder="Can't type here"
            disabled
          />
          
          <InputField 
            label="Error State"
            placeholder="Something went wrong"
            error="This field is required"
          />
          
          <InputField 
            label="Success State"
            placeholder="All good!"
            success
          />
          
          <InputField 
            label="With Icon"
            placeholder="Search..."
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
