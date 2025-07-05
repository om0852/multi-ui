
const AnimatedLineInput = ({
  placeholder = "Type something...",
  width = "100%",
  height = "auto",
  fontSize = "1.125rem",
  variant = 'primary',
  lineColor,
  label = "Animated Line Input",
  value: externalValue = "",
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(externalValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);
  const lineRef = useRef(null);
  
  // Sync with external value
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
  
  // Theme colors
  const theme = {
    dark: {
      inputText: "#f3f4f6",
      inputPlaceholder: "#9ca3af",
      inputBg: "transparent",
      lineColor: "#4b5563",
      focusLine: "#60a5fa",
      focusText: "#ffffff",
      labelColor: "#9ca3af",
    },
    light: {
      inputText: "#111827",
      inputPlaceholder: "#9ca3af",
      inputBg: "transparent",
      lineColor: "#d1d5db",
      focusLine: "#3b82f6",
      focusText: "#1f2937",
      labelColor: "#6b7280",
    },
    variants: {
      primary: "#3b82f6",
      secondary: "#10b981",
      accent: "#8b5cf6"
    }
  };
  
  const colors = isDarkMode ? theme.dark : theme.light;
  const variantColor = theme.variants[variant] || colors.focusLine;
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (onChange) {
      onChange(e);
    }
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    
    // Animate the line
    if (lineRef.current) {
      lineRef.current.style.transform = "scaleX(1)";
      lineRef.current.style.transition = "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
    }
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    
    // Reset the line if input is empty
    if (!value && lineRef.current) {
      lineRef.current.style.transform = "scaleX(0)";
      lineRef.current.style.transition = "transform 0.3s ease";
    }
  };
  
  // Dynamic styles
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: width === '100%' ? '100%' : width || '400px',
      margin: '0.5rem 0 1.5rem',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: colors.labelColor,
      fontSize: '0.875rem',
      fontWeight: 500,
      transition: 'color 0.3s ease',
    },
    input: {
      background: colors.inputBg,
      border: 0,
      outline: 'none',
      width: '100%',
      padding: '0.75rem 0.5rem 0.5rem 0',
      fontSize: fontSize,
      fontWeight: 500,
      color: isFocused ? colors.focusText : colors.inputText,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      '::placeholder': {
        color: colors.inputPlaceholder,
        opacity: isFocused ? 0.5 : 0.7,
        transition: 'opacity 0.2s ease',
      },
      ':-webkit-autofill,\n      :-webkit-autofill:hover,\n      :-webkit-autofill:focus,\n      :-webkit-autofill:active': {
        WebkitTextFillColor: `${isFocused ? colors.focusText : colors.inputText} !important`,
        WebkitBoxShadow: `0 0 0 30px ${colors.inputBg} inset !important`,
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
    line: {
      width: '100%',
      height: '2px',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: lineColor || colors.lineColor,
      overflow: 'hidden',
      borderRadius: '1px',
      transition: 'all 0.3s ease',
    },
    lineAfter: {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '2px',
      transform: isFocused || value ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
      background: variantColor,
    },
    exampleContainer: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
      borderRadius: '8px',
      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
    },
    exampleTitle: {
      color: colors.inputText,
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    exampleText: {
      color: colors.inputPlaceholder,
      margin: '0.5rem 0',
      lineHeight: 1.6,
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ 
        color: isDarkMode ? '#f3f4f6' : '#111827', 
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2.25rem',
        fontWeight: 800,
        background: `linear-gradient(90deg, ${theme.variants.primary}, ${theme.variants.accent})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Animated Line Input
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        <div>
          <h3 style={{ 
            color: colors.inputText,
            marginBottom: '1.5rem',
            fontSize: '1.25rem',
            fontWeight: 600,
          }}>
            Default Styling
          </h3>
          
          <div style={styles.container}>
            <label style={styles.label} htmlFor="default-input">
              {label}
            </label>
            <input
              id="default-input"
              type="text"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              style={styles.input}
              ref={inputRef}
              aria-label={label}
              {...props}
            />
            <div style={styles.line}>
              <div 
                ref={lineRef}
                style={styles.lineAfter}
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 style={{ 
            color: colors.inputText,
            marginBottom: '1.5rem',
            fontSize: '1.25rem',
            fontWeight: 600,
          }}>
            Variant Examples
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {Object.entries(theme.variants).map(([variantName, color]) => (
              <div key={variantName} style={styles.container}>
                <label style={styles.label} htmlFor={`${variantName}-input`}>
                  {variantName.charAt(0).toUpperCase() + variantName.slice(1)} Variant
                </label>
                <input
                  id={`${variantName}-input`}
                  type="text"
                  placeholder={`${variantName} variant...`}
                  style={{
                    ...styles.input,
                    color: isFocused ? colors.focusText : colors.inputText,
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <div style={styles.line}>
                  <div 
                    style={{
                      ...styles.lineAfter,
                      background: color,
                      transform: 'scaleX(1)',
                    }}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={styles.exampleContainer}>
        <h3 style={styles.exampleTitle}>Animated Line Input</h3>
        <p style={styles.exampleText}>
          This input features a clean, minimal design with an animated bottom line that expands on focus.
          The animation is smooth and provides clear visual feedback when the input is active.
        </p>
        <p style={styles.exampleText}>
          <strong>Try it:</strong> Click or tap on any input to see the animation effect.
        </p>
      </div>
      
      <style jsx global>{`
        @import url('https://rsms.me/inter/inter.css');
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${isDarkMode ? '#111827' : '#f9fafb'};
          color: ${colors.inputText};
          transition: background-color 0.3s ease, color 0.3s ease;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
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
  const [value, setValue] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState("primary");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <AnimatedLineInput 
        label="Your Name"
        placeholder="Enter your name..."
        value={value}
        onChange={handleChange}
        variant={selectedVariant}
      />
      
      <div style={{ 
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: 'var(--input-bg, #ffffff)', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid var(--border-color, #e2e8f0)',
      }}>
        <h2 style={{ 
          color: 'var(--input-text, #1e293b)',
          marginTop: 0,
          marginBottom: '1rem',
          fontSize: '1.5rem',
          fontWeight: 700,
        }}>
          Features
        </h2>
        <ul style={{ 
          textAlign: 'left',
          paddingLeft: '1.5rem',
          color: 'var(--placeholder-color, #94a3b8)',
          lineHeight: 1.8,
          margin: 0,
        }}>
          <li>Clean, minimal design with animated bottom line</li>
          <li>Multiple color variants (primary, secondary, accent)</li>
          <li>Automatic dark/light mode detection</li>
          <li>Smooth animations and transitions</li>
          <li>Fully responsive design</li>
          <li>Accessible with proper ARIA attributes</li>
        </ul>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['primary', 'secondary', 'accent'].map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                background: variant === selectedVariant ? 
                  `linear-gradient(90deg, ${theme.variants[variant]}, ${theme.variants[variant]}cc)` : 
                  'var(--input-bg, #f3f4f6)',
                color: variant === selectedVariant ? 'white' : 'var(--input-text, #1e293b)',
                cursor: 'pointer',
                fontWeight: 500,
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease',
              }}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Theme object for variants
const theme = {
  variants: {
    primary: "#3b82f6",
    secondary: "#10b981",
    accent: "#8b5cf6"
  }
};

render(<App />);
