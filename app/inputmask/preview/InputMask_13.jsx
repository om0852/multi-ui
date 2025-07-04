const { useState, useEffect } = React;
const { motion, AnimatePresence } = FramerMotion;

const EmailInput = ({
  label = "Email Address",
  placeholder = "your.email@example.com",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Common email domains for suggestions
  const commonDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'icloud.com',
    'protonmail.com'
  ];
  
  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Apply mask for email input
  const applyMask = (value) => {
    // Remove any non-email characters (except @ and . and + and - and _)
    let cleanedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
    
    // Ensure only one @ symbol
    const atIndex = cleanedValue.indexOf('@');
    if (atIndex !== -1) {
      // Only allow one @
      const parts = cleanedValue.split('@');
      if (parts.length > 2) {
        cleanedValue = parts[0] + '@' + parts[1];
      }
      
      // Clean domain part (after @)
      const domainParts = cleanedValue.split('@');
      if (domainParts.length === 2) {
        domainParts[1] = domainParts[1].replace(/[^a-zA-Z0-9.-]/g, '');
        cleanedValue = domainParts.join('@');
      }
    }
    
    return cleanedValue;
  };
  
  // Generate email suggestions
  const updateSuggestions = (value) => {
    const atIndex = value.indexOf('@');
    
    if (atIndex === -1 || atIndex === value.length - 1) {
      // If no @ or @ is the last character, show common domains
      const userInput = atIndex === -1 ? value : value.slice(0, -1);
      const newSuggestions = commonDomains.map(domain => ({
        full: `${userInput}@${domain}`,
        display: `@${domain}`
      }));
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else if (atIndex > 0) {
      // If there's text after @, filter common domains
      const domainInput = value.slice(atIndex + 1).toLowerCase();
      const userInput = value.slice(0, atIndex);
      
      const filtered = commonDomains
        .filter(domain => domain.startsWith(domainInput))
        .map(domain => ({
          full: `${userInput}@${domain}`,
          display: `@${domain}`
        }));
      
      // Add the current input as first suggestion if it's valid
      if (validateEmail(value) && !filtered.some(s => s.full === value)) {
        filtered.unshift({
          full: value,
          display: value
        });
      }
      
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    const valid = validateEmail(value);
    setIsValid(valid);
    updateSuggestions(value);
    if (onChange) onChange(valid ? value : null);
  };
  
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.full);
    setIsValid(validateEmail(suggestion.full));
    setShowSuggestions(false);
    if (onChange) onChange(suggestion.full);
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    updateSuggestions(inputValue);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    // Small delay to allow click on suggestions
    setTimeout(() => setShowSuggestions(false), 200);
  };
  
  const getStatusColor = () => {
    if (!inputValue) return 'text-gray-400';
    if (isValid) return 'text-green-500';
    if (inputValue.includes('@')) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getStatusText = () => {
    if (!inputValue) return 'Enter your email address';
    if (isValid) return '✓ Valid email format';
    if (inputValue.includes('@')) return 'Complete the email address';
    return 'Enter a valid email address';
  };
  
  // Extract domain for highlighting
  const getDomain = () => {
    if (!inputValue.includes('@')) return '';
    const parts = inputValue.split('@');
    return parts.length > 1 ? parts[1] : '';
  };
  
  const domain = getDomain();
  const username = inputValue.includes('@') ? inputValue.split('@')[0] : inputValue;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-md ${className}`}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <motion.h3 
          className="text-lg font-semibold text-gray-800 dark:text-white mb-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {label}
        </motion.h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          We'll never share your email with anyone else.
        </p>
        
        <div className="relative">
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={`w-full px-4 py-3 pl-12 border-2 ${
                  inputValue === '' 
                    ? 'border-gray-300 dark:border-gray-600' 
                    : isValid 
                      ? 'border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900' 
                      : inputValue.includes('@')
                        ? 'border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-900'
                        : 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900'
                } rounded-lg focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              />
              
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              {inputValue && (
                <motion.button
                  type="button"
                  onClick={() => {
                    setInputValue('');
                    setIsValid(false);
                    if (onChange) onChange(null);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}
            </div>
            
            {/* Email suggestions dropdown */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div 
                  className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 border border-gray-200 dark:border-gray-600 max-h-60 overflow-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {suggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      className={`px-4 py-2 text-sm cursor-pointer ${
                        index === 0 ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ x: 5 }}
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevent input blur
                        handleSuggestionClick(suggestion);
                      }}
                    >
                      <span className="font-medium">{suggestion.full.split('@')[0]}</span>
                      <span className="text-blue-500">@</span>
                      <span className="font-medium">{suggestion.display.split('@')[1]}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.div 
            className={`mt-2 text-sm font-medium ${getStatusColor()}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto'
            }}
          >
            {getStatusText()}
          </motion.div>
          
          {inputValue && (
            <motion.div 
              className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1,
                height: 'auto'
              }}
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Email breakdown:</div>
              <div className="flex items-center">
                <div className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-l-lg">
                  Username
                </div>
                <div className="px-3 py-1.5 bg-blue-500 text-white">
                  @
                </div>
                <div className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-r-lg">
                  {domain || 'domain'}
                </div>
              </div>
              
              {isValid && (
                <motion.div 
                  className="mt-3 p-2 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-300 text-sm rounded border border-green-200 dark:border-green-800"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>This email address is properly formatted and ready to use.</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [email, setEmail] = useState(null);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <EmailInput
          onChange={(validEmail) => {
            setEmail(validEmail);
            console.log("Email:", validEmail);
          }}
        />
        
        {email && (
          <motion.div 
            className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <div className="font-medium">Valid Email:</div>
              <div className="font-mono mt-1">{email}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

render(<App />);
