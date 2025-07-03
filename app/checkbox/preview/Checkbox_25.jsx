const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [rotateCount, setRotateCount] = useState(0);
  const [borderColor, setBorderColor] = useState("indigo");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setRotateCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-8 h-8",
      icon: "w-3 h-3",
      borderSize: "border-[3px]"
    },
    medium: {
      container: "w-12 h-12",
      icon: "w-5 h-5",
      borderSize: "border-[4px]"
    },
    large: {
      container: "w-16 h-16",
      icon: "w-7 h-7",
      borderSize: "border-[5px]"
    }
  };

  // Color options
  const colorOptions = {
    indigo: {
      border: "border-indigo-500",
      bg: "bg-indigo-500",
      text: "text-indigo-500"
    },
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-500",
      text: "text-emerald-500"
    },
    rose: {
      border: "border-rose-500",
      bg: "bg-rose-500",
      text: "text-rose-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[borderColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setRotateCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setBorderColor(newColor);
  };

  const triggerRotate = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setRotateCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Rotating Border Checkbox</h1>
        <p className="text-gray-500 mb-8">With animated rotating border effect</p>
        
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
              {/* Rotating Border */}
              <motion.div 
                className={`absolute inset-0 rounded-full ${selectedColor.border}`}
                style={{
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                }}
                initial={false}
                animate={{
                  rotate: isChecked ? 360 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
              
              {/* Checkbox */}
              <div className={`${selectedSize.container} rounded-full bg-white border-2 border-gray-300 flex items-center justify-center relative overflow-hidden`}>
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
                    className={`${selectedSize.icon} ${isChecked ? selectedColor.text : 'text-gray-400'}`}
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
                
                {/* Background Glow */}
                {isChecked && (
                  <motion.div 
                    className={`absolute inset-0 rounded-full ${selectedColor.bg} opacity-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Pulsing Effect */}
                {isChecked && (
                  <motion.div 
                    className={`absolute inset-0 rounded-full ${selectedColor.bg} opacity-0`}
                    initial={false}
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.2, 0],
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
            </div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${colorOptions[colorKey].bg} ${
                  borderColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-100' : ''
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
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              onClick={triggerRotate}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Rotate Again' : 'Check & Rotate'}
            </button>
            
            <button
              onClick={() => {
                const newValue = !isChecked;
                setIsChecked(newValue);
                if (onChange) onChange(newValue);
              }}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-md'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-md'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">CURRENT STATE</p>
                <p className={`text-lg font-semibold ${isChecked ? 'text-blue-600' : 'text-gray-700'}`}>
                  {isChecked ? 'CHECKED' : 'UNCHECKED'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">BORDER COLOR</p>
                <p className={`text-lg font-semibold ${selectedColor.text}`}>
                  {borderColor.toUpperCase()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">SIZE</p>
                <p className="text-lg font-semibold text-gray-700">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">ROTATION COUNT</p>
                <p className="text-lg font-semibold text-purple-600">
                  {rotateCount}
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
