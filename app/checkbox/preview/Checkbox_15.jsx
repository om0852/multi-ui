
const RippleCheckbox = ({ value, onChange, disabled = false, color = "blue" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentColor, setCurrentColor] = useState(color);
  const [ripple, setRipple] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  if (!mounted) return null;

  const colorClasses = {
    blue: {
      border: "border-blue-700",
      bg: "bg-blue-500",
      glow: "shadow-blue-500/50",
      ripple: "rgba(59, 130, 246, 0.5)",
      text: "text-blue-500"
    },
    red: {
      border: "border-red-700",
      bg: "bg-red-500",
      glow: "shadow-red-500/50",
      ripple: "rgba(239, 68, 68, 0.5)",
      text: "text-red-500"
    },
    green: {
      border: "border-green-700",
      bg: "bg-green-500",
      glow: "shadow-green-500/50",
      ripple: "rgba(16, 185, 129, 0.5)",
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
    
    // Trigger ripple effect
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
    
    // Clear ripple after animation
    setTimeout(() => setRipple(null), 1000);
  };

  const changeColor = (newColor) => {
    setCurrentColor(newColor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Ripple Checkbox</h1>
        <p className="text-gray-400 mb-8">With color options and ripple effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label 
            className={`relative w-16 h-16 md:w-20 md:h-20 cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={(e) => {
              if (disabled) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              setRipple({ x, y });
              setTimeout(() => setRipple(null), 1000);
            }}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <motion.div
              className={`absolute inset-0 flex items-center justify-center border-2 rounded-xl ${selectedColorClass} transition-all`}
              whileHover={!disabled ? { scale: 1.05 } : undefined}
              initial={{ scale: 1 }}
              animate={{ 
                scale: isChecked ? 0.95 : 1,
                boxShadow: isChecked ? `0 0 20px ${selectedColor.glow}` : 'none'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Ripple Effect */}
              {ripple && (
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${selectedColor.ripple} 0%, transparent 70%)`,
                    left: ripple.x - 100,
                    top: ripple.y - 100,
                    opacity: 1,
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              )}
              
              {/* Checkmark */}
              <motion.div 
                className="relative w-full h-full flex items-center justify-center"
                initial={false}
                animate={{
                  scale: isChecked ? [0.8, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.svg
                  className={`w-8 h-8 ${isChecked ? 'text-white' : 'text-transparent'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={{
                    pathLength: isChecked ? 1 : 0,
                    opacity: isChecked ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isChecked ? 0.1 : 0,
                  }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </motion.div>
              
              {/* Inner Glow */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: `inset 0 0 20px ${selectedColor.glow.replace('/50', '/30')}`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
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
              onClick={() => {
                const newValue = !isChecked;
                setIsChecked(newValue);
                if (onChange) onChange(newValue);
              }}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20'
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
                <p className="text-xs text-gray-400 mb-1">COLOR</p>
                <p className="text-lg font-bold text-purple-400">
                  {currentColor.toUpperCase()}
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
    <RippleCheckbox 
      value={checked} 
      onChange={setChecked} 
      disabled={disabled} 
    />
  );
};

render(<CheckboxDemo />);
