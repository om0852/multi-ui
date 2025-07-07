
const MaskedInput = ({
  label = "License Plate",
  placeholder = "AB-1234",
  mask = "AA-9999",
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
      } else if (mask[maskIndex] === 'A') {
        if (/[A-Za-z]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex].toUpperCase();
          valueIndex++;
        }
        maskIndex++;
      } else if (mask[maskIndex] === '-') {
        maskedValue += '-';
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

  const isValid = inputValue.length === mask.length;
  const remainingChars = mask.length - inputValue.length;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-md ${className}`}
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
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            maxLength={mask.length}
            className={`w-full px-4 py-3 border ${
              isFocused 
                ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900' 
                : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 font-mono tracking-wider`}
          />
          
          <motion.div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: inputValue ? 1 : 0.5 }}
          >
            {Array.from({ length: mask.length }).map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < inputValue.length 
                    ? isValid ? 'bg-green-500' : 'bg-yellow-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-1 text-xs h-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1,
            height: '1rem'
          }}
        >
          {inputValue ? (
            <span className={isValid ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
              {isValid 
                ? '✓ Valid format' 
                : `Enter ${remainingChars} more character${remainingChars > 1 ? 's' : ''}`}
            </span>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              Format: {mask.replace(/9/g, 'N').replace(/A/g, 'L')}
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
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Vehicle Registration</h2>
        <MaskedInput
          onChange={(value) => console.log("License Plate:", value)}
        />
      </div>
    </div>
  );
};

render(<App />);
