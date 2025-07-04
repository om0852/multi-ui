const { useState, useEffect } = React;
const { motion } = FramerMotion;

const CurrencyInput = ({
  label = "Amount",
  placeholder = "0.00",
  onChange,
  className = "",
  currency = "USD"
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [formattedValue, setFormattedValue] = useState("");
  
  const formatCurrency = (value) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    // Split into integer and decimal parts
    let [integerPart, decimalPart] = numericValue.split('.');
    integerPart = integerPart || '0';
    
    // Add commas as thousand separators
    const formattedInteger = parseInt(integerPart).toLocaleString('en-US');
    
    // Handle decimal part
    let formattedDecimal = '';
    if (decimalPart !== undefined) {
      formattedDecimal = `.${decimalPart.slice(0, 2)}`;
    }
    
    return {
      display: `${formattedInteger}${formattedDecimal}`,
      raw: numericValue
    };
  };

  const handleChange = (e) => {
    const { display, raw } = formatCurrency(e.target.value);
    setInputValue(display);
    if (onChange) onChange(raw);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Remove formatting when focusing
    if (inputValue) {
      setInputValue(inputValue.replace(/[^0-9.]/g, ''));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Re-apply formatting when blurring
    if (inputValue) {
      const { display } = formatCurrency(inputValue);
      setInputValue(display);
    }
  };

  // Format the value for display (e.g., $1,234.56)
  useEffect(() => {
    if (inputValue === '') {
      setFormattedValue('');
      return;
    }
    
    const number = parseFloat(inputValue.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) {
      setFormattedValue('');
      return;
    }
    
    setFormattedValue(new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number));
  }, [inputValue, currency]);

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
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
            {currency === 'USD' && '$'}
            {currency === 'EUR' && '€'}
            {currency === 'GBP' && '£'}
            {!['USD', 'EUR', 'GBP'].includes(currency) && currency}
          </div>
          
          <input
            type="text"
            value={isFocused ? inputValue : formattedValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            inputMode="decimal"
            className={`w-full pl-8 pr-4 py-3 border ${
              isFocused 
                ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900' 
                : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-right font-mono`}
          />
          
          <motion.div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 0.7 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {currency}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-1 text-xs h-4 text-right text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: inputValue ? 1 : 0,
            height: inputValue ? '1rem' : 0
          }}
        >
          {inputValue && (
            <span>
              {formattedValue || 'Enter a valid number'}
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Payment Amount</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Select Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
          </select>
        </div>
        
        <CurrencyInput
          label="Enter amount"
          placeholder="0.00"
          currency={currency}
          onChange={(value) => {
            setAmount(value);
            console.log("Amount:", value);
          }}
        />
        
        <motion.div 
          className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: amount ? 1 : 0.7,
            y: amount ? 0 : 10
          }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-sm text-blue-700 dark:text-blue-200">
            {amount ? (
              <>
                <span className="font-medium">You'll pay:</span>{' '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: currency,
                  minimumFractionDigits: 2
                }).format(parseFloat(amount) || 0)}
              </>
            ) : (
              'Enter an amount to see the total'
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

render(<App />);
