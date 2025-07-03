
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [flipCount, setFlipCount] = useState(0);
  const [flipColor, setFlipColor] = useState("purple");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setFlipCount(prev => prev + 1);
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
    purple: {
      from: "from-purple-500",
      to: "to-purple-700",
      border: "border-purple-600",
      text: "text-purple-500"
    },
    blue: {
      from: "from-blue-500",
      to: "to-blue-700",
      border: "border-blue-600",
      text: "text-blue-500"
    },
    pink: {
      from: "from-pink-500",
      to: "to-pink-700",
      border: "border-pink-600",
      text: "text-pink-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedColor = colorOptions[flipColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setFlipCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setFlipColor(newColor);
  };

  const triggerFlip = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setFlipCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">3D Flip Checkbox</h1>
        <p className="text-gray-400 mb-8">With smooth 3D flip animation</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ perspective: '1000px' }}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <motion.div 
              className={`${selectedSize.container} relative`}
              animate={{ 
                rotateY: isChecked ? 180 : 0,
              }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut",
              }}
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Side */}
              <motion.div 
                className={`absolute inset-0 rounded-full border-2 ${selectedColor.border} bg-gray-800 flex items-center justify-center`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                initial={false}
                animate={{
                  opacity: isChecked ? 0 : 1,
                  rotateY: 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center">
                  <svg
                    className={`${selectedSize.icon} text-gray-700`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Back Side */}
              <motion.div 
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${selectedColor.from} ${selectedColor.to} flex items-center justify-center`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
                initial={false}
                animate={{
                  opacity: isChecked ? 1 : 0,
                  rotateY: 180,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0.5 rounded-full bg-black/30 flex items-center justify-center">
                  <motion.svg
                    className={`${selectedSize.icon} text-white`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      scale: [0.8, 1.1, 1]
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3,
                    }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </div>
                
                {/* Inner Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `inset 0 0 15px rgba(168, 85, 247, 0.3)`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorOptions).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorOptions[colorKey].from} ${colorOptions[colorKey].to} ${
                  flipColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''
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
              onClick={triggerFlip}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {isChecked ? 'Flip Again' : 'Check & Flip'}
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
                <p className="text-xs text-gray-400 mb-1">FLIP COLOR</p>
                <p className="text-lg font-bold text-purple-400">
                  {flipColor.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SIZE</p>
                <p className="text-lg font-bold text-green-400">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">FLIP COUNT</p>
                <p className="text-lg font-bold text-yellow-400">
                  {flipCount}
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
