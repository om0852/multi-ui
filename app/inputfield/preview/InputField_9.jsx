
const GradientInput = ({
  placeholder = "Type something...",
  height = "3.5em",
  gradientStart,
  gradientEnd,
  backgroundColor,
  textColor,
  placeholderColor,
  label = "Gradient Input",
  ...props
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);
  
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
      inputBg: "#1e293b",
      inputText: "#f8fafc",
      placeholder: "#94a3b8",
      gradientStart: gradientStart || "#0ea5e9",
      gradientEnd: gradientEnd || "#10b981",
      glowStart: "rgba(16, 185, 129, 0.5)",
      glowEnd: "rgba(14, 165, 233, 0.5)",
      borderColor: "#334155",
      labelColor: "#cbd5e1",
    },
    light: {
      inputBg: "#ffffff",
      inputText: "#1e293b",
      placeholder: "#94a3b8",
      gradientStart: gradientStart || "#10abff",
      gradientEnd: gradientEnd || "#1beabd",
      glowStart: "#1beabd",
      glowEnd: "#10abff",
      borderColor: "#e2e8f0",
      labelColor: "#475569",
    }
  };
  
  const colors = isDarkMode ? theme.dark : theme.light;
  
  // Override with custom colors if provided
  if (backgroundColor) colors.inputBg = backgroundColor;
  if (textColor) colors.inputText = textColor;
  if (placeholderColor) colors.placeholder = placeholderColor;
  
  const handleChange = (e) => {
    setValue(e.target.value);
    
    // Call the onChange prop if provided
    if (props.onChange) {
      props.onChange(e);
    }
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    
    // Call the onFocus prop if provided
    if (props.onFocus) {
      props.onFocus();
    }
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    
    // Call the onBlur prop if provided
    if (props.onBlur) {
      props.onBlur();
    }
  };
  
  // Dynamic styles
  const styles = {
    container: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem 1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.75rem',
      color: colors.labelColor,
      fontSize: '0.875rem',
      fontWeight: 500,
      transition: 'color 0.3s ease',
    },
    inputContainer: {
      position: 'relative',
      fontSize: '1.1em',
      background: `linear-gradient(21deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
      padding: '3px',
      display: 'inline-block',
      borderRadius: '9999em',
      width: '100%',
      boxSizing: 'border-box',
      height: height,
      transition: 'all 0.3s ease',
    },
    input: {
      position: 'relative',
      display: 'block',
      borderRadius: 'inherit',
      margin: 0,
      border: 'none',
      outline: 'none',
      padding: '0.5em 1.25em',
      zIndex: 1,
      width: '100%',
      height: '100%',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"',
      color: colors.inputText,
      backgroundColor: colors.inputBg,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontWeight: 500,
      fontSize: '0.9em',
      '::placeholder': {
        color: colors.placeholder,
        opacity: 0.8,
      },
      ':-webkit-autofill,\n      :-webkit-autofill:hover,\n      :-webkit-autofill:focus,\n      :-webkit-autofill:active': {
        WebkitTextFillColor: `${colors.inputText} !important`,
        WebkitBoxShadow: `0 0 0 30px ${colors.inputBg} inset !important`,
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
    shadow: {
      transform: 'scale(0.993, 0.94)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: isFocused ? 1 : 0,
      position: 'absolute',
      zIndex: 0,
      margin: '4px',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      backgroundColor: colors.inputBg,
      boxShadow: `inset 0 0 0 2px ${colors.borderColor}, 
                  0 0 0 3px rgba(255, 255, 255, 0.1),
                  3px -3px 30px ${colors.glowStart}, 
                  -3px 3px 30px ${colors.glowEnd}`,
    },
    exampleContainer: {
      marginTop: '3rem',
      padding: '1.5rem',
      backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
      borderRadius: '12px',
      border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
    },
    exampleTitle: {
      color: colors.inputText,
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    exampleText: {
      color: colors.placeholder,
      margin: '0.5rem 0',
      lineHeight: 1.6,
      fontSize: '0.95rem',
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="gradient-input">
        {label}
      </label>
      
      <div style={styles.inputContainer}>
        <input
          ref={inputRef}
          id="gradient-input"
          type={props.type || "text"}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={styles.input}
          aria-label={label}
          {...props}
        />
        <span style={styles.shadow} aria-hidden="true"></span>
      </div>
      
      <div style={styles.exampleContainer}>
        <h3 style={styles.exampleTitle}>Gradient Input Field</h3>
        <p style={styles.exampleText}>
          This input features a beautiful gradient border that animates on focus. 
          The glow effect is created using CSS box-shadow with multiple layers.
        </p>
        <p style={styles.exampleText}>
          <strong>Try it:</strong> Click or tap on the input to see the animation.
        </p>
      </div>
      
      <style jsx global>{`
        @import url('https://rsms.me/inter/inter.css');
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${isDarkMode ? '#0f172a' : '#f1f5f9'};
          color: ${colors.inputText};
          transition: background-color 0.3s ease, color 0.3s ease;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 1rem;
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
  const [customColor, setCustomColor] = useState("#8b5cf6");
  const [gradient1, setGradient1] = useState("#8b5cf6");
  const [gradient2, setGradient2] = useState("#ec4899");
  
  // Generate a complementary color for the gradient
  const getComplementaryColor = (hex) => {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate complementary color
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
  };
  
  const handleColorChange = (color) => {
    setCustomColor(color);
    setGradient1(color);
    setGradient2(getComplementaryColor(color));
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h1 style={{ 
        color: 'var(--input-text, #1e293b)', 
        marginBottom: '3rem',
        fontSize: '2.25rem',
        fontWeight: 800,
        background: 'linear-gradient(90deg, #8b5cf6, #ec4899)'
      }}>
        Gradient Input Field
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        <div>
          <h3 style={{ 
            color: 'var(--input-text, #1e293b)',
            marginBottom: '1rem',
            fontSize: '1.125rem',
            fontWeight: 600,
          }}>
            Default Styling
          </h3>
          <GradientInput 
            label="Default Gradient"
            placeholder="Type something..."
          />
        </div>
        
        <div>
          <h3 style={{ 
            color: 'var(--input-text, #1e293b)',
            marginBottom: '1rem',
            fontSize: '1.125rem',
            fontWeight: 600,
          }}>
            Custom Gradient Colors
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--input-text, #1e293b)' }}>Color 1:</label>
              <input 
                type="color" 
                value={gradient1} 
                onChange={(e) => setGradient1(e.target.value)}
                style={{ width: '40px', height: '30px', cursor: 'pointer' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--input-text, #1e293b)' }}>Color 2:</label>
              <input 
                type="color" 
                value={gradient2} 
                onChange={(e) => setGradient2(e.target.value)}
                style={{ width: '40px', height: '30px', cursor: 'pointer' }}
              />
            </div>
          </div>
          <GradientInput 
            label="Custom Gradient"
            placeholder="Try with your own colors"
            gradientStart={gradient1}
            gradientEnd={gradient2}
          />
        </div>
        
        <div>
          <h3 style={{ 
            color: 'var(--input-text, #1e293b)',
            marginBottom: '1rem',
            fontSize: '1.125rem',
            fontWeight: 600,
          }}>
            Dark Mode Example
          </h3>
          <div style={{ 
            backgroundColor: '#1e293b', 
            padding: '2rem', 
            borderRadius: '12px',
            border: '1px solid #334155',
          }}>
            <GradientInput 
              label="Dark Mode Input"
              placeholder="Works in dark mode too!"
              backgroundColor="#1e293b"
              textColor="#f8fafc"
              gradientStart="#0ea5e9"
              gradientEnd="#10b981"
            />
          </div>
        </div>
      </div>
      
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
          <li>Beautiful gradient border that animates on focus</li>
          <li>Automatic dark/light mode detection</li>
          <li>Fully customizable colors and gradients</li>
          <li>Smooth animations and transitions</li>
          <li>Responsive design that works on all screen sizes</li>
          <li>Accessible with proper ARIA attributes</li>
        </ul>
      </div>
    </div>
  );
};

render(<App />);
