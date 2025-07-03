
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [fillCount, setFillCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setFillCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-6 h-6",
      icon: "w-3 h-3"
    },
    medium: {
      container: "w-10 h-10",
      icon: "w-5 h-5"
    },
    large: {
      container: "w-14 h-14",
      icon: "w-7 h-7"
    }
  };

  const selectedSize = sizeClasses[currentSize];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setFillCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const triggerFill = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
      setFillCount(prev => prev + 1);
    } else {
      setFillCount(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Fill Effect Checkbox</h1>
        <p className="text-gray-400 mb-8">With smooth background fill animation</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <div className="relative">
              {/* Outer Circle */}
              <div className={`${selectedSize.container} rounded-full border-2 border-gray-500 bg-gray-700 flex items-center justify-center overflow-hidden`}>
                {/* Fill Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
                  initial={false}
                  animate={{
                    scale: isChecked ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Checkmark */}
                <motion.div
                  className="relative z-10"
                  initial={false}
                  animate={{
                    scale: isChecked ? [0.8, 1.1, 1] : 1,
                    opacity: isChecked ? 1 : 0.7,
                  }}
                  transition={{
                    scale: { duration: 0.5, times: [0, 0.8, 1] },
                    opacity: { duration: 0.3 }
                  }}
                >
                  <svg
                    className={`${selectedSize.icon} text-white`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                
                {/* Inner Glow */}
                {isChecked && (
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(255,255,255,0.3)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                )}
                
                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full overflow-hidden"
                  initial={false}
                  animate={{
                    background: `linear-gradient(
                      120deg, 
                      rgba(255,255,255,0) 0%, 
                      rgba(255,255,255,0.15) 50%, 
                      rgba(255,255,255,0) 100%
                    )`,
                    backgroundPosition: isChecked ? ['-100% 0', '200% 0'] : '200% 0',
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                      times: [0, 1]
                    }
                  }}
                />
              </div>
              
              {/* Outer Glow */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-500/30 -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1.2, 
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeOut"
                  }}
                />
              )}
            </div>
          </label>
          
          {/* Size Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(sizeClasses).map((sizeKey) => (
              <button
                key={sizeKey}
                className={`w-8 h-8 rounded-full ${
                  currentSize === sizeKey 
                    ? 'bg-blue-500 ring-2 ring-white ring-offset-2 ring-offset-gray-800' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => changeSize(sizeKey)}
                disabled={disabled}
                title={`${sizeKey.charAt(0).toUpperCase() + sizeKey.slice(1)} size`}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={triggerFill}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {isChecked ? 'Fill Again' : 'Check & Fill'}
            </button>
            
            <button
              onClick={() => {
                const newValue = !isChecked;
                setIsChecked(newValue);
                if (onChange) onChange(newValue);
              }}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-800/30 rounded-xl w-full backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">CURRENT STATE</p>
                <p className={`text-lg font-bold ${isChecked ? 'text-blue-400' : 'text-gray-400'}`}>
                  {isChecked ? 'CHECKED' : 'UNCHECKED'}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SIZE</p>
                <p className="text-lg font-bold text-purple-400">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700 col-span-2">
                <p className="text-xs text-gray-400 mb-1">FILL COUNT</p>
                <p className="text-lg font-bold text-green-400">
                  {fillCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Checkbox 
      value={checked} 
      onChange={setChecked} 
      disabled={disabled} 
    />
  );
};

render(<CheckboxDemo />);
