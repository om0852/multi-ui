
const MaskedInput = ({
  label = "CVV / CVC",
  placeholder = "123",
  mask = "999",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const applyMask = (value) => {
    let maskedValue = "";
    let maskIndex = 0;
    let valueIndex = 0;

    while (maskIndex < mask.length && valueIndex < value.length) {
      if (mask[maskIndex] === '9') {
        if (/[0-9]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex];
          valueIndex++;
        }
        maskIndex++;
      } else {
        maskedValue += mask[maskIndex];
        maskIndex++;
      }
    }

    return maskedValue;
  };

  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };

  const isValid = inputValue.length === 3;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-xs ${className}`}
    >
      <motion.div 
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between mb-1">
          <motion.label 
            className={`text-sm font-medium ${
              isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {label}
          </motion.label>
          
          <motion.button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            onClick={() => setShowHelp(!showHelp)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Help"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345c0 .575.415 1.024.908 1.17l.375.112a.75.75 0 01.25 1.23 8 8 0 01-1.398 1.34 1.5 1.5 0 00-.75.33v.38a.75.75 0 11-1.5 0v-.47a1.5 1.5 0 00-.75-.33 8 8 0 01-1.398-1.34.75.75 0 01.25-1.23l.375-.113c.493-.145.908-.594.908-1.17v-.5a.75.75 0 011.5 0v.5a2.5 2.5 0 01-2.5 2.5 1.5 1.5 0 00-1.5 1.5v.5a.75.75 0 01-1.5 0v-.5a3 3 0 011.5-2.6 6.5 6.5 0 113.5-5.85 3 3 0 00-1.5 2.6v.5a.75.75 0 11-1.5 0v-.5a1.5 1.5 0 01.75-1.3z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
        
        <motion.div 
          className="relative"
          animate={{
            scale: isHovered ? 1.01 : 1,
            x: isHovered ? 2 : 0
          }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <input
            type={showHelp ? 'text' : 'password'}
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            maxLength={3}
            className={`w-full px-4 py-3 border ${
              inputValue.length === 0 
                ? 'border-gray-300 dark:border-gray-600' 
                : isValid 
                  ? 'border-green-500 dark:border-green-400' 
                  : 'border-red-500 dark:border-red-400'
            } rounded-lg focus:outline-none focus:ring-2 ${
              isFocused 
                ? 'ring-2 ring-blue-500 dark:ring-blue-400' 
                : ''
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200`}
          />
          
          {inputValue.length > 0 && (
            <motion.div 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {isValid ? (
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </motion.div>
          )}
        </motion.div>
        
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: showHelp ? 'auto' : 0,
            opacity: showHelp ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-2 p-3 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg">
            The CVV is the 3-digit code on the back of your card.
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-1 text-xs h-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: inputValue ? 1 : 0,
            height: inputValue ? '1rem' : 0
          }}
        >
          {inputValue && (
            <span className={isValid ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
              {isValid ? '✓ Valid security code' : 'Enter 3-digit code'}
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <MaskedInput
        onChange={(value) => console.log("CVV:", value)}
      />
    </div>
  );
};

render(<App />);
