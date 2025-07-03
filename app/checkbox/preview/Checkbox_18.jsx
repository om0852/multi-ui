
const FlipCheckbox = ({ value, onChange, disabled = false, color = "red" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentColor, setCurrentColor] = useState(color);
  const [flipCount, setFlipCount] = useState(0);

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

  const colorClasses = {
    blue: {
      border: "border-blue-700",
      bg: "bg-blue-500",
      glow: "shadow-blue-500/50",
      text: "text-blue-500"
    },
    red: {
      border: "border-red-700",
      bg: "bg-red-500",
      glow: "shadow-red-500/50",
      text: "text-red-500"
    },
    green: {
      border: "border-green-700",
      bg: "bg-green-500",
      glow: "shadow-green-500/50",
      text: "text-green-500"
    }
  };

  const selectedColor = colorClasses[currentColor];
  const selectedColorClass = isChecked 
    ? `${selectedColor.border} ${selectedColor.bg}` 
    : "border-gray-400 bg-gray-300";

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setFlipCount(prev => prev + 1);
    }
  };

  const changeColor = (newColor) => {
    setCurrentColor(newColor);
  };

  const triggerFlip = () => {
    if (!isChecked) {
      const newValue = true;
      setIsChecked(newValue);
      if (onChange) onChange(newValue);
      setFlipCount(prev => prev + 1);
    } else {
      setFlipCount(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Flip Checkbox</h1>
        <p className="text-gray-400 mb-8">With 3D flip animation</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative w-16 h-16 md:w-20 md:h-20 cursor-pointer ${
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
              className="relative w-full h-full"
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
              key={flipCount}
            >
              {/* Front Side */}
              <motion.div 
                className={`absolute inset-0 border-2 rounded-xl ${selectedColorClass} flex items-center justify-center`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                initial={false}
                animate={{
                  opacity: isChecked ? 0 : 1,
                  rotateY: 0,
                  boxShadow: isChecked ? 'none' : `0 0 20px ${selectedColor.glow}`
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0.5 rounded-lg bg-black/70 flex items-center justify-center">
                  <motion.svg
                    className="w-8 h-8 text-white/20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  </motion.svg>
                </div>
              </motion.div>
              
              {/* Back Side */}
              <motion.div 
                className={`absolute inset-0 border-2 rounded-xl ${selectedColorClass} flex items-center justify-center`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
                initial={false}
                animate={{
                  opacity: isChecked ? 1 : 0,
                  rotateY: 180,
                  boxShadow: isChecked ? `0 0 20px ${selectedColor.glow}` : 'none'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0.5 rounded-lg bg-black/70 flex items-center justify-center">
                  <motion.svg
                    className={`w-8 h-8 ${selectedColor.text}`}
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
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: `inset 0 0 15px ${selectedColor.glow.replace('/50', '/30')}`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
                
                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={false}
                  animate={{
                    background: `linear-gradient(
                      120deg, 
                      rgba(255,255,255,0) 0%, 
                      rgba(255,255,255,0.1) 50%, 
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
              </motion.div>
            </motion.div>
          </label>
          
          {/* Color Selector */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            {Object.keys(colorClasses).map((colorKey) => (
              <button
                key={colorKey}
                className={`w-8 h-8 rounded-full ${colorClasses[colorKey].bg} ${
                  currentColor === colorKey ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''
                }`}
                onClick={() => changeColor(colorKey)}
                disabled={disabled}
                title={`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} color`}
              />
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
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20'
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
                <p className="text-xs text-gray-400 mb-1">FLIP COUNT</p>
                <p className="text-lg font-bold text-purple-400">
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
    <FlipCheckbox 
      value={checked} 
      onChange={setChecked} 
      disabled={disabled} 
    />
  );
};

render(<CheckboxDemo />);
