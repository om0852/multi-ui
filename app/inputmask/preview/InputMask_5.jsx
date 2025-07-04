const { useState } = React;
const { motion } = FramerMotion;

const MaskedInput = ({
  label = "Credit Card",
  placeholder = "1234 5678 9012 3456",
  mask = "9999 9999 9999 9999",
  onChange,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");

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

  const getCardType = (number) => {
    if (/^4/.test(number)) return 'Visa';
    if (/^5[1-5]/.test(number)) return 'Mastercard';
    if (/^3[47]/.test(number)) return 'Amex';
    return 'Card';
  };

  const cardType = inputValue ? getCardType(inputValue.replace(/\s/g, '')) : '';

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg ${className}`}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-between items-center mb-4">
          <motion.span 
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {label}
          </motion.span>
          {cardType && (
            <motion.span 
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {cardType}
            </motion.span>
          )}
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <motion.div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            animate={{ 
              opacity: inputValue ? 1 : 0.5,
              scale: inputValue ? 1.1 : 1
            }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            {cardType === 'Visa' && '💳'}
            {cardType === 'Mastercard' && '💳'}
            {cardType === 'Amex' && '💳'}
            {!['Visa', 'Mastercard', 'Amex'].includes(cardType) && '💳'}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-2 text-xs text-gray-500 dark:text-gray-400 h-4"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: inputValue ? 1 : 0,
            height: inputValue ? 'auto' : '1rem'
          }}
        >
          {inputValue && `Entering: ${inputValue.replace(/\s/g, '')}`}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <MaskedInput
        onChange={(value) => console.log("Card:", value)}
      />
    </div>
  );
};

render(<App />);
