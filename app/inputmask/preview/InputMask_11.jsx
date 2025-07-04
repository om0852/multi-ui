const { useState } = React;
const { motion } = FramerMotion;

const IPAddressInput = ({
  label = "IP Address",
  placeholder = "192.168.1.1",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null);
  
  const validateIP = (ip) => {
    // Check if the IP address is valid
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };
  
  const applyMask = (value) => {
    // Remove non-numeric characters except for the periods (.)
    let cleanedValue = value.replace(/[^0-9.]/g, '');
    
    // Split the value into parts (by periods)
    let parts = cleanedValue.split('.');
    
    // Limit the parts to 4 (for IPv4 address format)
    if (parts.length > 4) {
      parts = parts.slice(0, 4);
    }
    
    // Ensure each part is a valid number between 0 and 255
    parts = parts.map(part => {
      // Remove leading zeros
      part = part.replace(/^0+(\d)/, '$1');
      let number = parseInt(part, 10) || 0;
      if (number > 255) number = 255;
      if (number < 0) number = 0;
      return number.toString();
    });
    
    // Join the parts back together with periods
    return parts.join('.');
  };
  
  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    const valid = value.split('.').length === 4 && validateIP(value);
    setIsValid(valid);
    if (onChange) onChange(valid ? value : null);
  };
  
  const getIPClass = () => {
    if (!inputValue) return 'text-gray-400';
    if (isValid) return 'text-green-500';
    return 'text-red-500';
  };
  
  const getStatusText = () => {
    if (!inputValue) return 'Enter an IP address';
    if (isValid) return '✓ Valid IP Address';
    return 'Invalid IP Address';
  };

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
          Enter an IPv4 address (e.g., 192.168.1.1)
        </p>
        
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={placeholder}
              className={`w-full px-4 py-3 pl-12 border-2 ${
                inputValue === '' 
                  ? 'border-gray-300 dark:border-gray-600' 
                  : isValid 
                    ? 'border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900' 
                    : 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900'
              } rounded-lg focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono`}
              maxLength={15}
            />
            
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-4m-8-9l4 4m0 0l4-4m-4 4V1" />
              </svg>
            </div>
            
            {inputValue && (
              <motion.div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {isValid ? (
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className={`mt-2 text-sm font-medium ${getIPClass()}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: inputValue ? 1 : 0.5,
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
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <div>Octet 1</div>
                <div>Octet 2</div>
                <div>Octet 3</div>
                <div>Octet 4</div>
              </div>
              <div className="flex justify-between mt-1 font-mono">
                {inputValue.split('.').map((octet, i) => (
                  <div 
                    key={i} 
                    className={`w-1/4 text-center py-1 rounded ${
                      octet === '' ? 'bg-gray-100 dark:bg-gray-700' : 
                      parseInt(octet) >= 0 && parseInt(octet) <= 255 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {octet || '...'}
                  </div>
                ))}
                {Array(4 - inputValue.split('.').filter(Boolean).length).fill().map((_, i) => (
                  <div key={`empty-${i}`} className="w-1/4 text-center py-1 text-gray-400">
                    ...
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [ipAddress, setIpAddress] = useState(null);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <IPAddressInput
          onChange={(validIp) => {
            setIpAddress(validIp);
            console.log("IP Address:", validIp);
          }}
        />
        
        {ipAddress && (
          <motion.div 
            className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <div className="font-medium">Valid IP Address:</div>
              <div className="font-mono mt-1">{ipAddress}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

render(<App />);
