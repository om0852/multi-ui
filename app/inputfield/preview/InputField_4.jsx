
const FloatingLabelInput = ({
  name = "floating-input",
  id = "floating-input",
  placeholder = " ",
  label = "Floating Label",
  value: externalValue = "",
  required = false,
  className = "",
  onChange = () => {},
  error = "",
  type = "text",
  ...props
}) => {
  const [value, setValue] = useState(externalValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Update internal state when external value changes
  useEffect(() => {
    setValue(externalValue);
  }, [externalValue]);
  
  // Check for dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(handleChange);
    
    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (onChange) {
      const syntheticEvent = {
        target: { name, value: newValue },
        currentTarget: { name, value: newValue }
      };
      onChange(syntheticEvent);
    }
  };
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  // Dynamic styles based on theme
  const styles = {
    formGroup: {
      position: 'relative',
      padding: '15px 0 0',
      margin: '10px 0',
      width: '100%',
      maxWidth: '400px',
    },
    input: {
      fontFamily: 'inherit',
      width: '100%',
      border: 0,
      borderBottom: `2px solid ${isDarkMode ? '#4a5568' : '#cbd5e0'}`,
      outline: 0,
      fontSize: '1.1rem',
      color: isDarkMode ? '#e2e8f0' : '#2d3748',
      padding: '7px 0',
      background: 'transparent',
      transition: 'all 0.3s ease',
      borderBottomColor: error ? (isDarkMode ? '#fc8181' : '#e53e3e') : (isFocused ? (isDarkMode ? '#81e6d9' : '#2c7a7b') : (isDarkMode ? '#4a5568' : '#cbd5e0')),
      borderImage: isFocused ? `linear-gradient(to right, ${isDarkMode ? '#81e6d9' : '#11998e'}, ${isDarkMode ? '#4fd1c5' : '#38ef7d'}) 1` : 'none',
      borderImageSlice: isFocused ? 1 : 0,
      paddingBottom: isFocused ? '6px' : '7px',
      fontWeight: isFocused ? 500 : 400,
    },
    label: {
      position: 'absolute',
      top: value || isFocused ? '-5px' : '20px',
      left: 0,
      display: 'block',
      transition: '0.2s',
      fontSize: value || isFocused ? '0.9rem' : '1.1rem',
      color: error 
        ? (isDarkMode ? '#fc8181' : '#e53e3e') 
        : (isFocused 
            ? (isDarkMode ? '#81e6d9' : '#2c7a7b') 
            : (isDarkMode ? '#a0aec0' : '#718096')
          ),
      fontWeight: value || isFocused ? 600 : 400,
      pointerEvents: 'none',
      zIndex: 1,
    },
    error: {
      color: isDarkMode ? '#fc8181' : '#e53e3e',
      fontSize: '0.75rem',
      marginTop: '0.5rem',
      display: 'block',
      minHeight: '1.2rem',
    },
  };

  return (
    <div style={styles.formGroup} className={className}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        style={styles.input}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      
      <label htmlFor={id} style={styles.label}>
        {label}
        {required && <span style={{ color: isDarkMode ? '#fc8181' : '#e53e3e' }}>*</span>}
      </label>
      
      {error && (
        <div id={`${id}-error`} style={styles.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

// Example usage
const App = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert(`Welcome, ${formData.email}!`);
      }, 1500);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'white',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#2d3748',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          Welcome Back
        </h1>
        
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput
            type="email"
            name="email"
            label="Email Address"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <FloatingLabelInput
            type="password"
            name="password"
            label="Password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <div style={{ marginTop: '2rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'linear-gradient(to right, #11998e, #38ef7d)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: isSubmitting ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
            
            <p style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              color: '#718096',
              fontSize: '0.875rem',
            }}>
              Don't have an account?{' '}
              <a href="#" style={{
                color: '#2c7a7b',
                textDecoration: 'none',
                fontWeight: 600,
              }}>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        * {
          box-sizing: border-box;
        }
        
        input, button {
          font-family: inherit;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

render(<App />);
