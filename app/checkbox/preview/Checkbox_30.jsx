
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [rotationCount, setRotationCount] = useState(0);
  const [accentColor, setAccentColor] = useState("gold");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setRotationCount(prev => prev + 1);
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
      container: "w-12 h-12",
      icon: "w-5 h-5"
    },
    large: {
      container: "w-16 h-16",
      icon: "w-7 h-7"
    }
  };

  // Color options
  const colorOptions = {
    gold: {
      bg: "#FFD700",
      text: "text-yellow-500"
    },
    emerald: {
      bg: "#10b981",
      text: "text-emerald-500"
    },
    rose: {
      bg: "#f43f5e",
      text: "text-rose-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[accentColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setRotationCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setAccentColor(newColor);
  };

  const triggerRotation = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setRotationCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Rotating Circle Checkbox</h1>
        <p className="text-gray-400 mb-8">With smooth rotation effect</p>
        
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
            <div className={`${selectedSize.container} relative`}>
              {/* Rotating Circle Background */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${selectedColor.bg} 0%, ${selectedColor.bg} 70%, transparent 70%, transparent 100%)`
                }}
                initial={false}
                animate={{
                  rotate: isChecked ? 360 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                  repeat: isChecked ? Infinity : 0,
                }}
              >
                {/* Inner Circle */}
                <div className="absolute inset-1 bg-gray-800 rounded-full">
                  {/* Checkmark */}
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
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
                      className={selectedSize.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={selectedColor.bg}
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
                </div>
              </motion.div>
              
              {/* Outer Glow */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `0 0 15px ${selectedColor.bg}`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${colorKey === 'gold' ? 'bg-yellow-500' : colorKey === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'} ${
                  accentColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''
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
              onClick={triggerRotation}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
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
                <p className="text-xs text-gray-400 mb-1">ACCENT COLOR</p>
                <p className="text-lg font-bold capitalize" style={{ color: colorOptions[accentColor].bg }}>
                  {accentColor}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SIZE</p>
                <p className="text-lg font-bold text-green-400">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">ROTATION COUNT</p>
                <p className="text-lg font-bold text-yellow-400">
                  {rotationCount}
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
