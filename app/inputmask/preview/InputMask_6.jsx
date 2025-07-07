
const MaskedInput = ({
  label = "Expiry Date",
  placeholder = "MM/YY",
  mask = "99/99",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
        if (value[valueIndex] === mask[maskIndex - 1]) {
          valueIndex++;
        }
      }
    }

    return maskedValue;
  };

  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };

  const isValidDate = (dateStr) => {
    if (!dateStr || dateStr.length < 5) return false;
    const [month, year] = dateStr.split('/').map(Number);
    if (month < 1 || month > 12) return false;
    
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;
    
    return true;
  };

  const isValid = inputValue.length === 5 ? isValidDate(inputValue) : null;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-xs ${className}`}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.label 
          className={`block text-sm font-medium mb-1 ${
            isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          {label}
        </motion.label>
        
        <div className="relative">
          <motion.input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border ${
              isValid === null 
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
          
          {isValid !== null && (
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
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="mt-1 text-xs h-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: inputValue ? 1 : 0,
            height: inputValue ? '1rem' : 0
          }}
        >
          {inputValue && (
            <span className={isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
              {isValid ? '✓ Valid expiry date' : '⚠ Invalid or expired date'}
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
        onChange={(value) => console.log("Expiry Date:", value)}
      />
    </div>
  );
};

render(<App />);
