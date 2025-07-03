
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [fillCount, setFillCount] = useState(0);
  const [fillColor, setFillColor] = useState("blue");

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
      container: "w-8 h-8",
      icon: "w-3 h-3"
    },
    medium: {
      container: "w-10 h-10",
      icon: "w-4 h-4"
    },
    large: {
      container: "w-14 h-14",
      icon: "w-6 h-6"
    }
  };

  // Color options
  const colorOptions = {
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-600",
      text: "text-blue-500"
    },
    emerald: {
      bg: "bg-emerald-500",
      border: "border-emerald-600",
      text: "text-emerald-500"
    },
    rose: {
      bg: "bg-rose-500",
      border: "border-rose-600",
      text: "text-rose-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[fillColor];

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

  const changeColor = (newColor) => {
    setFillColor(newColor);
  };

  const triggerFill = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setFillCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Fill Effect Checkbox</h1>
        <p className="text-gray-400 mb-8">With smooth fill animation</p>
        
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
            <div className={`${selectedSize.container} relative rounded-full border-2 ${selectedColor.border} bg-gray-700 overflow-hidden`}>
              {/* Fill Background */}
              <motion.div 
                className={`absolute inset-0 ${selectedColor.bg}`}
                initial={false}
                animate={{
                  width: isChecked ? '100%' : '0%',
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Animated Wave Effect */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`
                  }}
                  initial={{ x: '-100%' }}
                  animate={{
                    x: isChecked ? '100%' : '-100%',
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              {/* Checkmark */}
              <motion.div 
                className="relative z-10 w-full h-full flex items-center justify-center"
                initial={false}
                animate={{
                  scale: isChecked ? [0.9, 1.1, 1] : 1,
                }}
                transition={{
                  scale: { duration: 0.5, times: [0, 0.7, 1] }
                }}
              >
                <svg
                  className={`${selectedSize.icon} ${isChecked ? 'text-white' : 'text-gray-400'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isChecked ? (
                    <polyline points="20 6 9 17 4 12" />
                  ) : (
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  )}
                </svg>
              </motion.div>
              
              {/* Inner Glow */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `inset 0 0 15px rgba(255,255,255,0.3)`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              )}
            </div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${colorOptions[colorKey].bg} ${
                  fillColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''
                }`}
                onClick={() => changeColor(colorKey)}
                disabled={disabled}
                title={`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} color`}
              />
            ))}
          </div>
          
          {/* Size Selector */}
          <div className="flex items-center justify-center space-x-4 mt-2">
            {Object.keys(sizeClasses).map((sizeKey) => (
              <button
                key={sizeKey}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                  currentSize === sizeKey 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => changeSize(sizeKey)}
                disabled={disabled}
              >
                {sizeKey.charAt(0).toUpperCase() + sizeKey.slice(1)}
              </button>
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
                <p className="text-xs text-gray-400 mb-1">FILL COLOR</p>
                <p className="text-lg font-bold capitalize" style={{ color: colorOptions[fillColor].bg.replace('bg-', 'text-').replace('-500', '-400') }}>
                  {fillColor}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SIZE</p>
                <p className="text-lg font-bold text-green-400">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">FILL COUNT</p>
                <p className="text-lg font-bold text-yellow-400">
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
