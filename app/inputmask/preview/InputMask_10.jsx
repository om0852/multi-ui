const { motion, AnimatePresence } = FramerMotion;

const BarcodeInput = ({
  label = "Scan Barcode",
  placeholder = "Enter barcode number",
  type = "UPC", // "UPC" or "EAN"
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [scanActive, setScanActive] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  
  // Handle barcode scanning simulation
  useEffect(() => {
    if (scanActive) {
      const timer = setTimeout(() => {
        setScanActive(false);
        setScanComplete(true);
        
        // Reset scan complete after animation
        setTimeout(() => setScanComplete(false), 1500);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [scanActive]);
  
  const applyMask = (value) => {
    // Remove any non-digit characters
    let cleanedValue = value.replace(/\D/g, '');
    
    // Limit the length based on the barcode type
    const maxLength = type === 'UPC' ? 12 : 13;
    cleanedValue = cleanedValue.substring(0, maxLength);
    
    return cleanedValue;
  };
  
  const formatDisplay = (value) => {
    if (!value) return "";
    
    // Format based on barcode type
    if (type === 'UPC') {
      // Format as X-XXXXX-XXXXX-X
      return value.replace(/(\d)(\d{5})(\d{5})(\d)/, "$1-$2-$3-$4");
    } else {
      // Format as XXX-XXXX-XXXX-X
      return value.replace(/(\d{3})(\d{4})(\d{5})(\d)/, "$1-$2-$3-$4");
    }
  };

  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };
  
  const handleScanClick = () => {
    setScanActive(true);
    // In a real app, this would activate the device camera
  };
  
  const isValid = type === 'UPC' ? inputValue.length === 12 : inputValue.length === 13;
  const displayValue = formatDisplay(inputValue);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-md ${className}`}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {label}
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              type === 'UPC' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
            }`}>
              {type}-{type === 'UPC' ? 'A (12 digits)' : '13 (13 digits)'}
            </span>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex">
            <div className="relative flex-1">
              <input
                type="text"
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder}
                maxLength={type === 'UPC' ? 14 : 16} // Accounting for dashes
                className={`w-full pl-4 pr-12 py-3 border ${
                  isValid 
                    ? 'border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900' 
                    : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900'
                } rounded-l-lg focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono`}
              />
              
              <AnimatePresence>
                {inputValue && (
                  <motion.div 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    {isValid ? (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {type === 'UPC' ? 12 - inputValue.length : 13 - inputValue.length}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.button
              type="button"
              onClick={handleScanClick}
              disabled={scanActive}
              className={`px-4 rounded-r-lg flex items-center justify-center ${
                scanActive 
                  ? 'bg-blue-600' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
              whileTap={!scanActive ? { scale: 0.98 } : {}}
            >
              {scanActive ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              )}
            </motion.button>
          </div>
          
          <AnimatePresence>
            {scanActive && (
              <motion.div 
                className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-sm text-blue-700 dark:text-blue-200 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Point camera at barcode...
              </motion.div>
            )}
            
            {scanComplete && (
              <motion.div 
                className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg text-sm text-green-700 dark:text-green-200 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Barcode scanned successfully!
              </motion.div>
            )}
          </AnimatePresence>
          
          {inputValue && (
            <motion.div 
              className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Barcode Type</div>
                  <div className="font-medium text-gray-800 dark:text-white">{type}-A</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Digits</div>
                  <div className="font-mono font-medium text-gray-800 dark:text-white">
                    {inputValue.length}/{type === 'UPC' ? '12' : '13'}
                  </div>
                </div>
              </div>
              
              {isValid && (
                <motion.div 
                  className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Formatted Code</div>
                  <div className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                    {displayValue}
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
  const [barcodeType, setBarcodeType] = useState("UPC");
  const [scannedCode, setScannedCode] = useState("");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Barcode Scanner</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Enter a {barcodeType} barcode manually or use the scan button to simulate barcode scanning.
          </p>
          
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setBarcodeType("UPC")}
              className={`px-3 py-1 text-sm rounded ${
                barcodeType === "UPC"
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              UPC-A
            </button>
            <button
              onClick={() => setBarcodeType("EAN")}
              className={`px-3 py-1 text-sm rounded ${
                barcodeType === "EAN"
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              EAN-13
            </button>
          </div>
        </div>
        
        <BarcodeInput
          type={barcodeType}
          onChange={(value) => {
            setScannedCode(value);
            console.log(`Scanned ${barcodeType} code:`, value);
          }}
        />
        
        {scannedCode && (
          <motion.div 
            className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-green-700 dark:text-green-300">
              <div className="font-medium">Scanned {barcodeType} Code:</div>
              <div className="font-mono mt-1">{scannedCode}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

render(<App />);
