
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [transitionCount, setTransitionCount] = useState(0);
  const [bgColor, setBgColor] = useState("blue");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setTransitionCount(prev => prev + 1);
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
      from: "#e5e7eb",
      to: "#3b82f6",
      text: "text-blue-500"
    },
    green: {
      from: "#e5e7eb",
      to: "#10b981",
      text: "text-green-500"
    },
    purple: {
      from: "#e5e7eb",
      to: "#8b5cf6",
      text: "text-purple-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[bgColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setTransitionCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setBgColor(newColor);
  };

  const triggerTransition = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setTransitionCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Smooth Transition Checkbox</h1>
        <p className="text-gray-500 mb-8">With animated background transition</p>
        
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
            <div className={`${selectedSize.container} relative rounded-full overflow-hidden`}>
              {/* Background Transition */}
              <motion.div 
                className="absolute inset-0"
                initial={false}
                animate={{
                  backgroundColor: isChecked ? selectedColor.to : selectedColor.from,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
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
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              {/* Checkmark */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isChecked ? 1 : 0,
                    scale: isChecked ? [0.8, 1.1, 1] : 0.8,
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.5, times: [0, 0.8, 1] }
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
              </div>
              
              {/* Border */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: isChecked ? selectedColor.to : '#9ca3af',
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${
                  colorKey === 'blue' ? 'bg-blue-500' : 
                  colorKey === 'green' ? 'bg-green-500' : 'bg-purple-500'
                } ${
                  bgColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-100' : ''
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
              onClick={triggerTransition}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Transition Again' : 'Check & Animate'}
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
                <p className="text-sm text-gray-500 mb-1">COLOR</p>
                <p className="text-lg font-semibold capitalize" style={{ color: colorOptions[bgColor].to }}>
                  {bgColor}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">SIZE</p>
                <p className="text-lg font-semibold text-gray-700">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">TRANSITION COUNT</p>
                <p className="text-lg font-semibold text-purple-600">
                  {transitionCount}
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
