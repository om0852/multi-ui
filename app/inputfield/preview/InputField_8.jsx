
const AnimatedInput = ({
  pattern = ".{6,}",
  placeholder = "Type at least 6 characters",
  label = "Animated Input",
  ...props
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);
  const pathRef = useRef(null);
  
  // Check for dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(handleChange);
    
    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);
  
  // Theme colors
  const theme = {
    dark: {
      primary: "#60a5fa",
      text: "#f3f4f6",
      placeholder: "#9ca3af",
      border: "#4b5563",
      success: "#34d399",
      background: "#1f2937"
    },
    light: {
      primary: "#0077FF",
      text: "#223254",
      placeholder: "#9098A9",
      border: "#c8ccd4",
      success: "#10b981",
      background: "#ffffff"
    }
  };
  
  const colors = isDarkMode ? theme.dark : theme.light;
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // Validate input against pattern
    const regex = new RegExp(`^${pattern}$`);
    setIsValid(regex.test(newValue) || newValue === "");
    
    // Trigger animation if input is valid and not empty
    if (newValue && regex.test(newValue) && pathRef.current) {
      pathRef.current.beginElement();
    }
  };
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  // Dynamic styles
  const styles = {
    container: {
      fontFamily: 'Avenir, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"',
      backgroundColor: colors.background,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      WebkitTextSizeAdjust: '100%',
      WebkitFontSmoothing: 'antialiased',
    },
    inputWrapper: {
      position: 'relative',
      margin: '0 auto 2rem',
      width: '100%',
      maxWidth: '280px',
      height: '53px',
    },
    input: {
      width: '100%',
      height: '48px',
      padding: '0 16px 0 0',
      fontSize: '16px',
      fontWeight: 500,
      background: 'transparent',
      border: 'none',
      color: colors.text,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      caretColor: colors.primary,
      ':focus': {
        outline: 'none',
      },
      '::placeholder': {
        color: colors.placeholder,
        opacity: 1,
      },
      ':-webkit-autofill,\n      :-webkit-autofill:hover,\n      :-webkit-autofill:focus,\n      :-webkit-autofill:active': {
        WebkitTextFillColor: colors.text + ' !important',
        WebkitBoxShadow: `0 0 0 30px ${colors.background} inset !important`,
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
    svg: {
      position: 'absolute',
      width: '280px',
      height: '53px',
      left: '0',
      top: '0',
      pointerEvents: 'none',
    },
    path: {
      fill: 'none',
      stroke: isValid ? (isFocused ? colors.primary : colors.border) : '#ef4444',
      strokeWidth: '2px',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      transition: 'all 0.3s ease',
    },
    label: {
      position: 'absolute',
      left: '0',
      top: '0',
      fontSize: '16px',
      color: isFocused ? colors.primary : colors.placeholder,
      fontWeight: 500,
      transform: `translateY(${value || isFocused ? '-20px' : '12px'})`,
      transformOrigin: 'left center',
      transition: 'all 0.3s ease',
      pointerEvents: 'none',
      opacity: value || isFocused ? 1 : 0,
    },
    errorText: {
      position: 'absolute',
      bottom: '-20px',
      left: '0',
      color: '#ef4444',
      fontSize: '12px',
      height: '16px',
      opacity: !isValid && value ? 1 : 0,
      transition: 'opacity 0.3s ease',
    },
    exampleContainer: {
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '1.5rem',
      backgroundColor: isDarkMode ? '#2d3748' : '#f3f4f6',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    exampleTitle: {
      color: colors.text,
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    exampleText: {
      color: colors.placeholder,
      margin: '0.5rem 0',
      lineHeight: 1.5,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? '' : placeholder}
          pattern={pattern}
          style={styles.input}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? 'error-message' : undefined}
          {...props}
        />
        
        <span style={styles.label}>
          {label}
          {props.required && (
            <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>
          )}
        </span>
        
        <svg style={styles.svg} viewBox="0 0 280 53">
          <path
            ref={pathRef}
            style={styles.path}
            d="M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
          >
            <animate
              attributeName="d"
              dur="0.6s"
              begin="indefinite"
              fill="freeze"
              values="
                M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12;
                M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12;
                M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12;
                M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
              
              keyTimes="0; 0.33; 0.66; 1"
              keyPoints="0; 0.33; 0.66; 1"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </path>
        </svg>
        
        <div id="error-message" style={styles.errorText} role="alert">
          {!isValid && value ? `Please enter at least ${pattern.replace(/\D/g, '')} characters` : ''}
        </div>
      </div>
      
      <div style={styles.exampleContainer}>
        <h3 style={styles.exampleTitle}>Animated Input Field</h3>
        <p style={styles.exampleText}>
          This input field features a smooth, elastic animation effect when the input is valid.
          The bottom border animates in a wave-like pattern when you type at least 6 characters.
        </p>
        <p style={styles.exampleText}>
          <strong>Try it:</strong> Type at least 6 characters to see the animation.
        </p>
      </div>
      
      <style jsx global>{`
        @import url('https://rsms.me/inter/inter.css');
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

// Example Usage
const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: 'var(--text-color, #223254)', 
        marginBottom: '3rem',
        fontSize: '2rem',
        fontWeight: 700,
      }}>
        Animated Input Field
      </h1>
      
      <AnimatedInput 
        label="Username"
        placeholder="Enter your username"
        pattern=".{6,}"
        required
      />
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '4rem auto 0',
        padding: '1.5rem',
        backgroundColor: 'var(--bg-color, #f3f4f6)', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ 
          color: 'var(--text-color, #223254)',
          marginTop: 0,
          fontSize: '1.5rem',
          fontWeight: 600,
        }}>
          Features
        </h2>
        <ul style={{ 
          paddingLeft: '1.5rem',
          color: 'var(--placeholder-color, #9098A9)',
          lineHeight: 1.8,
        }}>
          <li>Elastic animation effect on valid input</li>
          <li>Automatic dark/light mode detection</li>
          <li>Accessible with proper ARIA attributes</li>
          <li>Responsive design that works on all screen sizes</li>
          <li>Customizable colors and patterns</li>
          <li>Built-in validation with visual feedback</li>
        </ul>
      </div>
    </div>
  );
};

render(<App />);
