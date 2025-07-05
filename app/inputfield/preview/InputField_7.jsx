
const NotifyForm = ({
  inputHeight = '3.5em',
  inputWidth = '20em',
  buttonHeight = '3.5em',
  buttonWidth = '3.5em',
  onSubmit = () => {},
  placeholder = "Your email address...",
  buttonText = "Notify Me",
  successText = "Thank You! 😊",
  errorText = "Please enter a valid email",
  ...props
}) => {
  const [email, setEmail] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check for dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(handleChange);
    
    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Only validate if the field is not empty
    if (value) {
      setIsValid(validateEmail(value));
    } else {
      setIsValid(true);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setIsExpanded(true);
      return;
    }
    
    if (validateEmail(email)) {
      setIsSubmitted(true);
      setIsValid(true);
      
      // Call the onSubmit callback
      if (onSubmit) {
        onSubmit(email);
      }
      
      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        setIsExpanded(false);
      }, 3000);
    } else {
      setIsValid(false);
    }
  };
  
  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };
  
  // Dynamic styles
  const styles = {
    body: {
      fontSize: '10px',
      fontFamily: '"Roboto", sans-serif',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
      padding: '2rem',
    },
    container: {
      position: 'relative',
      fontWeight: 700,
      width: isExpanded ? '100%' : inputWidth,
      maxWidth: '500px',
      height: isExpanded ? 'auto' : '6.25em',
      transition: 'all 0.3s ease',
    },
    form: {
      position: 'relative',
      padding: '0.625em',
      boxSizing: 'border-box',
      boxShadow: '0 0.125em 0.3125em rgba(0, 0, 0, 0.1)',
      borderRadius: '6.25em',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      width: '100%',
      height: 'auto',
      minHeight: '6.25em',
    },
    toggleButton: {
      color: isDarkMode ? '#feb2b2' : '#ff7b73',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      cursor: 'pointer',
      zIndex: 1,
      borderRadius: '6.25em',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      border: 'none',
      fontSize: '1.5em',
      fontWeight: 700,
      boxShadow: '0 0.125em 0.3125em rgba(0, 0, 0, 0.1)',
      opacity: isExpanded ? 0 : 1,
      visibility: isExpanded ? 'hidden' : 'visible',
      transformOrigin: 'center',
      ':hover': {
        transform: 'translateX(-50%) scale(1.02)',
        boxShadow: '0 0.25em 0.5em rgba(0, 0, 0, 0.15)',
      },
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: isExpanded ? 'column' : 'row',
      gap: '0.5em',
    },
    input: {
      border: `2px solid ${!isValid ? (isDarkMode ? '#fc8181' : '#e53e3e') : (isDarkMode ? '#4a5568' : '#e2e8f0')}`,
      borderRadius: '3.5em',
      padding: `0 ${parseInt(inputHeight) * 0.4}px`,
      height: inputHeight,
      width: isExpanded ? '100%' : '0',
      opacity: isExpanded ? 1 : 0,
      visibility: isExpanded ? 'visible' : 'hidden',
      fontSize: '1em',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      color: isDarkMode ? '#e2e8f0' : '#2d3748',
      '::placeholder': {
        color: isDarkMode ? '#a0aec0' : '#a0aec0',
      },
      ':focus': {
        borderColor: isDarkMode ? '#63b3ed' : '#4299e1',
        boxShadow: `0 0 0 3px ${isDarkMode ? 'rgba(99, 179, 237, 0.3)' : 'rgba(66, 153, 225, 0.3)'}`,
      },
    },
    button: {
      border: 'none',
      borderRadius: '3.5em',
      backgroundColor: isDarkMode ? '#feb2b2' : '#ff7b73',
      color: isDarkMode ? '#7b341e' : '#ffffff',
      height: buttonHeight,
      width: isExpanded ? '100%' : '0',
      minWidth: isExpanded ? buttonWidth : '0',
      fontSize: '1em',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1.5em',
      transition: 'all 0.3s ease',
      opacity: isExpanded ? 1 : 0,
      visibility: isExpanded ? 'visible' : 'hidden',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      ':hover': {
        backgroundColor: isDarkMode ? '#feb2b2' : '#ff8a84',
        transform: 'translateY(-1px)',
      },
      ':active': {
        transform: 'translateY(0)',
      },
    },
    successMessage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5em',
      fontWeight: 700,
      color: isDarkMode ? '#68d391' : '#38a169',
      backgroundColor: isDarkMode ? '#2d3748' : '#ffffff',
      borderRadius: '6.25em',
      transition: 'all 0.3s ease',
      opacity: isSubmitted ? 1 : 0,
      visibility: isSubmitted ? 'visible' : 'hidden',
      pointerEvents: 'none',
    },
    errorText: {
      color: isDarkMode ? '#fc8181' : '#e53e3e',
      fontSize: '0.75rem',
      marginTop: '0.5rem',
      padding: '0 1.5em',
      textAlign: 'center',
      opacity: !isValid ? 1 : 0,
      height: !isValid ? 'auto' : 0,
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={placeholder}
              style={styles.input}
              required
              aria-invalid={!isValid}
              aria-describedby={!isValid ? 'email-error' : undefined}
            />
            
            <button 
              type="submit" 
              style={styles.button}
              aria-label="Submit email"
            >
              {buttonText}
            </button>
            
            <div style={styles.errorText} id="email-error" role="alert">
              {errorText}
            </div>
          </div>
          
          <div style={styles.successMessage}>
            {successText}
          </div>
        </form>
        
        {!isExpanded && (
          <button 
            onClick={handleToggle}
            style={styles.toggleButton}
            aria-expanded={isExpanded}
            aria-controls="email-notification-form"
          >
            {buttonText}
          </button>
        )}
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        * {
          box-sizing: border-box;
        }
        
        button, input {
          font-family: inherit;
          font-size: inherit;
        }
      `}</style>
    </div>
  );
};

// Example Usage
const App = () => {
  const handleSubmit = (email) => {
    console.log('Submitted email:', email);
    // In a real app, you would send this to your backend
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2d3748',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 700,
      }}>
        Email Notification Form
      </h1>
      
      <NotifyForm 
        onSubmit={handleSubmit}
        buttonText="Get Notified"
        placeholder="Enter your email..."
        successText="You're on the list! 🎉"
        errorText="Please enter a valid email address"
      />
      
      <div style={{ 
        maxWidth: '600px', 
        margin: '3rem auto 0',
        padding: '1.5rem',
        backgroundColor: '#f7fafc',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ 
          color: '#2d3748',
          marginTop: 0,
          fontSize: '1.25rem',
          fontWeight: 600,
        }}>
          How It Works
        </h2>
        <ul style={{ 
          paddingLeft: '1.5rem',
          color: '#4a5568',
          lineHeight: 1.6,
        }}>
          <li>Click the "Get Notified" button to expand the form</li>
          <li>Enter your email address</li>
          <li>Click the button again or press Enter to submit</li>
          <li>Get notified when we launch!</li>
        </ul>
      </div>
    </div>
  );
};

render(<App />);
