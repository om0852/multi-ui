
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setPulseCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-6 h-6",
      pulse: "w-6 h-6",
      checkmark: "w-3 h-3"
    },
    medium: {
      container: "w-10 h-10",
      pulse: "w-10 h-10",
      checkmark: "w-5 h-5"
    },
    large: {
      container: "w-14 h-14",
      pulse: "w-14 h-14",
      checkmark: "w-7 h-7"
    }
  };

  const selectedSize = sizeClasses[currentSize];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setPulseCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const triggerPulse = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
      setPulseCount(prev => prev + 1);
    } else {
      setPulseCount(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Pulse Checkbox</h1>
        <p className="text-gray-400 mb-8">With pulsing animation effect</p>
        
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
              {/* Outer Container */}
              <div className={`relative ${selectedSize.container} rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center overflow-hidden`}>
                {/* Checkmark */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    scale: isChecked ? 1 : 0.8,
                    opacity: isChecked ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className={`${selectedSize.checkmark} text-green-400`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.div>
                
                {/* Pulsing Circle */}
                {isChecked && (
                  <>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className={`absolute ${selectedSize.pulse} rounded-full bg-green-500/30`}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                          scale: [0.5, 1.5],
                          opacity: [0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Inner Circle */}
                <motion.div 
                  className={`absolute ${selectedSize.pulse} rounded-full bg-green-500`}
                  initial={false}
                  animate={{
                    scale: isChecked ? 1 : 0.8,
                    opacity: isChecked ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className={`${selectedSize.checkmark} text-white`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                </motion.div>
                
                {/* Outer Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  initial={false}
                  animate={{
                    scale: isChecked ? 1.1 : 1,
                    opacity: isChecked ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              </div>
              
              {/* Glow Effect */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400 blur-md opacity-0"
                  initial={false}
                  animate={{
                    scale: 1.5,
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
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
                    ? 'bg-green-500 ring-2 ring-white ring-offset-2 ring-offset-gray-800' 
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
              onClick={triggerPulse}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {isChecked ? 'Pulse Again' : 'Check & Pulse'}
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
                <p className={`text-lg font-bold ${isChecked ? 'text-green-400' : 'text-gray-400'}`}>
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
                <p className="text-xs text-gray-400 mb-1">PULSE COUNT</p>
                <p className="text-lg font-bold text-blue-400">
                  {pulseCount}
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
