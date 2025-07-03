
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [glowCount, setGlowCount] = useState(0);
  const [glowColor, setGlowColor] = useState("blue");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setGlowCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-6 h-6",
      icon: "w-2.5 h-2.5"
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

  // Glow colors
  const glowColors = {
    blue: {
      border: "border-blue-500",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.7)]",
      bg: "bg-blue-500"
    },
    purple: {
      border: "border-purple-500",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.7)]",
      bg: "bg-purple-500"
    },
    pink: {
      border: "border-pink-500",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.7)]",
      bg: "bg-pink-500"
    }
  };

  const selectedSize = sizeClasses[currentSize];
  const selectedGlow = glowColors[glowColor];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setGlowCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const changeColor = (newColor) => {
    setGlowColor(newColor);
  };

  const triggerGlow = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
    }
    setGlowCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Glow Border Checkbox</h1>
        <p className="text-gray-400 mb-8">With animated glowing border effect</p>
        
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
              {/* Glow Border */}
              <motion.div 
                className={`absolute inset-0 rounded-full ${selectedGlow.border} ${selectedGlow.glow}`}
                initial={false}
                animate={{
                  scale: isChecked ? [1, 1.05, 1] : 1,
                  opacity: isChecked ? 1 : 0,
                }}
                transition={{
                  scale: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.3 }
                }}
              />
              
              {/* Main Checkbox */}
              <div className={`${selectedSize.container} rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center relative overflow-hidden`}>
                {/* Checkmark */}
                <motion.div 
                  className="relative z-10"
                  initial={false}
                  animate={{
                    scale: isChecked ? [0.8, 1.1, 1] : 1,
                    opacity: isChecked ? 1 : 0.5,
                  }}
                  transition={{
                    scale: { duration: 0.5, times: [0, 0.8, 1] },
                    opacity: { duration: 0.3 }
                  }}
                >
                  <svg
                    className={`${selectedSize.icon} ${isChecked ? selectedGlow.bg.replace('border', 'text') : 'text-gray-500'}`}
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
                
                {/* Inner Glow */}
                {isChecked && (
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: `inset 0 0 15px ${selectedGlow.bg.replace('border', 'rgba(59,130,246').replace('-500', ',0.3)')}`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                )}
                
                {/* Pulsing Glow */}
                {isChecked && (
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: `0 0 0 0 ${selectedGlow.bg.replace('border', 'rgba(59,130,246').replace('-500', ',0.8)')}`
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
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
            {Object.keys(glowColors).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${glowColors[colorKey].bg} ${
                  glowColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''
                }`}
                onClick={() => changeColor(colorKey)}
                disabled={disabled}
                title={`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} glow`}
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
              onClick={triggerGlow}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {isChecked ? 'Pulse Glow' : 'Check & Glow'}
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
                <p className="text-xs text-gray-400 mb-1">GLOW COLOR</p>
                <p className="text-lg font-bold text-purple-400">
                  {glowColor.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SIZE</p>
                <p className="text-lg font-bold text-green-400">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">GLOW COUNT</p>
                <p className="text-lg font-bold text-yellow-400">
                  {glowCount}
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
