
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [bounceCount, setBounceCount] = useState(0);
  const [ballColor, setBallColor] = useState("indigo");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setBounceCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-8 h-8",
      ball: "w-3 h-3",
      track: "h-1"
    },
    medium: {
      container: "w-10 h-10",
      ball: "w-4 h-4",
      track: "h-1.5"
    },
    large: {
      container: "w-14 h-14",
      ball: "w-6 h-6",
      track: "h-2"
    }
  };

  // Color options
  const colorOptions = {
    indigo: {
      ball: "bg-indigo-500",
      track: "bg-indigo-200",
      activeTrack: "bg-indigo-500/30"
    },
    emerald: {
      ball: "bg-emerald-500",
      track: "bg-emerald-200",
      activeTrack: "bg-emerald-500/30"
    },
    rose: {
      ball: "bg-rose-500",
      track: "bg-rose-200",
      activeTrack: "bg-rose-500/30"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[ballColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setBounceCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setBallColor(newColor);
  };

  const triggerBounce = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setBounceCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Bouncing Ball Checkbox</h1>
        <p className="text-gray-500 mb-8">With smooth bouncing ball animation</p>
        
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
            <div className={`${selectedSize.container} relative flex items-center justify-center`}>
              {/* Track */}
              <div className={`absolute w-full ${selectedSize.track} ${selectedColor.track} rounded-full overflow-hidden`}>
                <motion.div 
                  className={`h-full ${selectedColor.activeTrack}`}
                  initial={false}
                  animate={{
                    width: isChecked ? '100%' : '0%',
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
              
              {/* Bouncing Ball */}
              <motion.div
                className={`absolute ${selectedSize.ball} ${selectedColor.ball} rounded-full shadow-md z-10`}
                initial={false}
                animate={{
                  x: isChecked ? `calc(100% - ${selectedSize.ball.replace('w-', '').replace('h-', '')/4}rem)` : '0',
                  y: isChecked ? [0, -20, 0, -10, 0] : 0,
                }}
                transition={{
                  x: { duration: 0.5, ease: "easeInOut" },
                  y: { 
                    duration: 0.8, 
                    times: [0, 0.3, 0.6, 0.8, 1],
                    ease: "easeOut"
                  },
                }}
              >
                {/* Ball Shadow */}
                <motion.div 
                  className="absolute -bottom-2 left-1/2 w-1/2 h-1 bg-black/20 rounded-full -translate-x-1/2"
                  initial={false}
                  animate={{
                    scale: isChecked ? [0.8, 1.2, 0.8] : 1,
                    opacity: isChecked ? [0.2, 0.4, 0.2] : 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.div>
              
              {/* Checkmark */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: isChecked ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className={`${selectedSize.ball} text-white`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            </div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${colorOptions[colorKey].ball} ${
                  ballColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-100' : ''
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
              onClick={triggerBounce}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Bounce Again' : 'Check & Bounce'}
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
                <p className="text-sm text-gray-500 mb-1">BALL COLOR</p>
                <p className="text-lg font-semibold capitalize" style={{ color: colorOptions[ballColor].ball.replace('bg-', 'text-').replace('-500', '-600') }}>
                  {ballColor}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">SIZE</p>
                <p className="text-lg font-semibold text-gray-700">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">BOUNCE COUNT</p>
                <p className="text-lg font-semibold text-purple-600">
                  {bounceCount}
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
