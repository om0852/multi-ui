
const FloatingLabelInput = ({
  id = "floating-input",
  label = "Floating Label",
  type = "text",
  placeholder = " ",
  value: externalValue = "",
  onChange = () => {},
  error = "",
  className = "",
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
        target: { 
          name: props.name || 'input', 
          value: newValue 
        },
        currentTarget: { 
          name: props.name || 'input', 
          value: newValue 
        }
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
  
  // Determine if the label should float
  const shouldFloat = value || isFocused || props.placeholder;
  
  // Dynamic styles based on theme and state
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      margin: '1.5rem 0',
    },
    input: {
      fontFamily: '"Roboto", sans-serif',
      color: isDarkMode ? '#e2e8f0' : '#333333',
      fontSize: '1rem',
      margin: 0,
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      border: `1px solid ${error ? (isDarkMode ? '#fc8181' : '#e53e3e') : (isFocused ? '#4a77d4' : (isDarkMode ? '#4a5568' : '#0a0101'))}`,
      width: '100%',
      display: 'block',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isFocused && !error ? '0 0 0 2px rgba(74, 119, 212, 0.3)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      outline: 'none',
    },
    label: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: shouldFloat ? '0.85rem' : '1rem',
      color: error 
        ? (isDarkMode ? '#fc8181' : '#e53e3e') 
        : (isFocused ? '#4a77d4' : (isDarkMode ? '#a0aec0' : '#4b5563')),
      position: 'absolute',
      left: '1rem',
      top: shouldFloat ? '-0.75rem' : '1rem',
      padding: shouldFloat ? '0 0.5rem' : '0',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      borderRadius: '0.25rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: shouldFloat ? 'translateY(0) scale(0.85)' : 'translateY(0)',
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: 1,
    },
    error: {
      color: isDarkMode ? '#fc8181' : '#e53e3e',
      fontSize: '0.75rem',
      marginTop: '0.5rem',
      paddingLeft: '0.5rem',
    },
  };

  return (
    <div style={styles.container} className={className}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={styles.input}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      
      {label && (
        <label htmlFor={id} style={styles.label}>
          {label}
          {props.required && (
            <span style={{ color: isDarkMode ? '#fc8181' : '#e53e3e', marginLeft: '0.25rem' }}>*</span>
          )}
        </label>
      )}
      
      {error && (
        <div id={`${id}-error`} style={styles.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

// Example Usage
const App = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
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
    
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
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
        alert(`Form submitted successfully!\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
      }, 1000);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'white',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          Contact Us
        </h1>
        
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder=" "
            required
          />
          
          <FloatingLabelInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder=" "
            required
          />
          
          <FloatingLabelInput
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder=" "
            required
          />
          
          <div style={{ marginTop: '2rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.875rem',
                backgroundColor: '#4a77d4',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.7 : 1,
                ':hover:not(:disabled)': {
                  backgroundColor: '#3b5bb5',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(74, 119, 212, 0.2)',
                },
                ':active:not(:disabled)': {
                  transform: 'translateY(0)',
                },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        * {
          box-sizing: border-box;
        }
        
        input, button, textarea, select {
          font-family: inherit;
          font-size: inherit;
        }
      `}</style>
    </div>
  );
};

render(<App />);
