
const UUIDInput = ({
  label = "UUID Generator",
  placeholder = "Enter or generate a UUID",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Generate a random UUID
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
  
  // Validate UUID format
  const validateUUID = (uuid) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  };
  
  // Apply mask for UUID input
  const applyMask = (value) => {
    // Remove non-hexadecimal characters
    let cleanedValue = value.replace(/[^0-9a-fA-F-]/g, '');
    
    // Remove extra hyphens and limit length
    const parts = cleanedValue.split('-').filter(Boolean);
    let result = '';
    
    // Rebuild with proper hyphens
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) result += '-';
      
      // Limit each part's length based on UUID format
      const maxLength = i === 0 ? 8 : i < 3 ? 4 : 12;
      result += parts[i].substring(0, maxLength);
      
      // Stop if we've reached the maximum number of parts
      if (i >= 4) break;
    }
    
    return result;
  };
  
  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    const valid = validateUUID(value);
    setIsValid(valid);
    if (onChange) onChange(valid ? value : null);
  };
  
  const handleGenerateClick = () => {
    const newUUID = generateUUID();
    setInputValue(newUUID);
    setIsValid(true);
    if (onChange) onChange(newUUID);
  };
  
  const handleCopyClick = () => {
    if (!inputValue) return;
    
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };
  
  // Check if the input is a partial but potentially valid UUID
  const isPartialValid = () => {
    if (!inputValue) return false;
    if (isValid) return false;
    
    const parts = inputValue.split('-');
    if (parts.length > 5) return false;
    
    // Check each part's length
    const partLengths = [8, 4, 4, 4, 12];
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > partLengths[i]) return false;
      if (!/^[0-9a-f]*$/i.test(parts[i])) return false;
    }
    
    return true;
  };
  
  const getStatusColor = () => {
    if (isValid) return 'text-green-500';
    if (isPartialValid()) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getStatusText = () => {
    if (isValid) return '✓ Valid UUID';
    if (isPartialValid()) return 'Entering UUID...';
    if (inputValue) return 'Invalid UUID format';
    return 'Enter a UUID or generate one';
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-md ${className}`}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {label}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 rounded-full">
              UUID v4
            </span>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={placeholder}
              className={`w-full px-4 py-3 pr-24 font-mono border-2 ${
                inputValue === '' 
                  ? 'border-gray-300 dark:border-gray-600' 
                  : isValid 
                    ? 'border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900' 
                    : isPartialValid()
                      ? 'border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-900'
                      : 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900'
              } rounded-lg focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              maxLength={36}
            />
            
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              {inputValue && (
                <motion.button
                  type="button"
                  onClick={handleCopyClick}
                  className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Copy to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-green-500"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-current"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
              
              <motion.button
                type="button"
                onClick={handleGenerateClick}
                className="px-3 py-1 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Generate
              </motion.button>
            </div>
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
              <div className="grid grid-cols-5 gap-1 text-xs text-center">
                {inputValue.split('').map((char, i) => (
                  <div 
                    key={i} 
                    className={`p-1 rounded ${
                      char === '-' 
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-500' 
                        : /[0-9a-f]/i.test(char) 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {char || ' '}
                  </div>
                ))}
                {Array(36 - inputValue.length).fill().map((_, i) => (
                  <div 
                    key={`empty-${i}`} 
                    className="p-1 rounded bg-gray-50 dark:bg-gray-700/50 text-gray-400"
                  >
                    _
                  </div>
                ))}
              </div>
              
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Format: 8-4-4-4-12 (hexadecimal digits)
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [uuid, setUuid] = useState(null);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <UUIDInput
          onChange={(validUuid) => {
            setUuid(validUuid);
            console.log("UUID:", validUuid);
          }}
        />
        
        {uuid && (
          <motion.div 
            className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-purple-700 dark:text-purple-300">
              <div className="font-medium">Generated UUID:</div>
              <div className="font-mono mt-1 text-xs break-all">{uuid}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

render(<App />);
