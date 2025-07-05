
const InputGroup = ({
  leftAddon = null,
  rightAddon = null,
  type = "text",
  placeholder = "",
  value: externalValue = "",
  onChange = () => {},
  error = "",
  className = "",
  ...props
}) => {
  const [value, setValue] = useState(externalValue);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
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
  
  // Dynamic styles based on theme
  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      maxWidth: '500px',
      margin: '1rem 0',
    },
    addon: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.5',
      color: isDarkMode ? '#a0aec0' : '#4a5568',
      backgroundColor: isDarkMode ? '#2d3748' : '#e2e8f0',
      border: `1px solid ${isDarkMode ? '#4a5568' : '#cbd5e0'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    leftAddon: {
      borderTopLeftRadius: '0.375rem',
      borderBottomLeftRadius: '0.375rem',
      borderRight: 'none',
    },
    rightAddon: {
      borderTopRightRadius: '0.375rem',
      borderBottomRightRadius: '0.375rem',
      borderLeft: 'none',
    },
    input: {
      flex: '1 1 auto',
      display: 'block',
      width: '100%',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.5',
      color: isDarkMode ? '#e2e8f0' : '#2d3748',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      border: `1px solid ${error ? (isDarkMode ? '#fc8181' : '#e53e3e') : (isFocused ? '#4a77d4' : (isDarkMode ? '#4a5568' : '#cbd5e0'))}`,
      borderRadius: '0.375rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxShadow: isFocused && !error ? '0 0 0 2px rgba(74, 119, 212, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      ...(leftAddon ? {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: '-1px',
      } : {}),
      ...(rightAddon ? {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: '-1px',
      } : {}),
    },
    error: {
      color: isDarkMode ? '#fc8181' : '#e53e3e',
      fontSize: '0.75rem',
      marginTop: '0.25rem',
      display: 'block',
    },
  };

  return (
    <div className={className} style={{ width: '100%' }}>
      <div style={styles.container}>
        {leftAddon && (
          <span 
            style={{
              ...styles.addon,
              ...styles.leftAddon,
              ...(isFocused ? {
                color: '#ffffff',
                backgroundColor: '#4a77d4',
                borderColor: '#1e4bb8',
                zIndex: 2,
              } : {})
            }}
          >
            {leftAddon}
          </span>
        )}
        
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={styles.input}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id || 'input'}-error` : undefined}
          {...props}
        />
        
        {rightAddon && (
          <span 
            style={{
              ...styles.addon,
              ...styles.rightAddon,
              ...(isFocused ? {
                color: '#ffffff',
                backgroundColor: '#4a77d4',
                borderColor: '#1e4bb8',
                zIndex: 2,
              } : {})
            }}
          >
            {rightAddon}
          </span>
        )}
      </div>
      
      {error && (
        <div id={`${props.id || 'input'}-error`} style={styles.error}>
          {error}
        </div>
      )}
    </div>
  );
};

// Example Usage
const App = () => {
  const [formData, setFormData] = useState({
    url: 'https://',
    email: '',
    price: '',
  });
  const [errors, setErrors] = useState({});
  
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
    
    if (!formData.url || formData.url === 'https://') {
      newErrors.url = 'URL is required';
    } else if (!/^https?:\/\//.test(formData.url)) {
      newErrors.url = 'URL must start with http:// or https://';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      newErrors.price = 'Please enter a valid price';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert(`Form submitted successfully!\n\nURL: ${formData.url}\nEmail: ${formData.email}\nPrice: $${formData.price}`);
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
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#2d3748',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          Input Group Examples
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="url" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#4a5568',
              marginBottom: '0.5rem',
            }}>
              Website URL
            </label>
            <InputGroup
              leftAddon="https://"
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              error={errors.url}
              placeholder="example.com"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#4a5568',
              marginBottom: '0.5rem',
            }}>
              Email Address
            </label>
            <InputGroup
              leftAddon="@"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="price" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#4a5568',
              marginBottom: '0.5rem',
            }}>
              Price
            </label>
            <InputGroup
              leftAddon="$"
              rightAddon=".00"
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              error={errors.price}
              placeholder="0"
              inputMode="decimal"
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4a77d4',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ':hover': {
                backgroundColor: '#3b5bb5',
              },
              ':active': {
                transform: 'translateY(1px)',
              },
            }}
          >
            Submit
          </button>
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
      `}</style>
    </div>
  );
};

render(<App />);
