
const WaveCheckbox = ({ value, onChange, disabled = false, color = "blue" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentColor, setCurrentColor] = useState(color);
  const [waveProgress, setWaveProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setWaveProgress(1);
    } else {
      setWaveProgress(0);
    }
  }, [value]);

  if (!mounted) return null;

  const colorClasses = {
    blue: {
      border: "border-blue-700",
      bg: "bg-blue-500",
      glow: "shadow-blue-500/50",
      wave: "rgba(59, 130, 246, 0.5)",
      text: "text-blue-500"
    },
    red: {
      border: "border-red-700",
      bg: "bg-red-500",
      glow: "shadow-red-500/50",
      wave: "rgba(239, 68, 68, 0.5)",
      text: "text-red-500"
    },
    green: {
      border: "border-green-700",
      bg: "bg-green-500",
      glow: "shadow-green-500/50",
      wave: "rgba(16, 185, 129, 0.5)",
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
    
    // Trigger wave animation
    if (newValue) {
      setWaveProgress(1);
    } else {
      setWaveProgress(0);
    }
  };

  const changeColor = (newColor) => {
    setCurrentColor(newColor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-2">Wave Checkbox</h1>
        <p className="text-gray-400 mb-8">With wave animation effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative w-16 h-16 md:w-20 md:h-20 cursor-pointer ${
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
            <div className="relative w-full h-full">
              {/* Main Box */}
              <motion.div 
                className={`absolute inset-0 border-2 rounded-lg ${selectedColorClass} overflow-hidden`}
                whileHover={!disabled ? { scale: 1.05 } : undefined}
                animate={{
                  boxShadow: isChecked ? `0 0 15px ${selectedColor.glow.replace('/50', '/70')}` : 'none'
                }}
              >
                {/* Wave Effect */}
                <motion.div 
                  className="absolute inset-0 origin-bottom"
                  style={{
                    background: `linear-gradient(0deg, ${selectedColor.wave} 0%, transparent 100%)`,
                    height: '200%',
                    top: '100%'
                  }}
                  animate={{
                    y: isChecked ? '-100%' : '0%',
                    opacity: isChecked ? 1 : 0.5
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Inner Content */}
                <div className="absolute inset-0.5 rounded-md bg-black/70 flex items-center justify-center">
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
                      pathLength: isChecked ? 1 : 0,
                      opacity: isChecked ? 1 : 0,
                      scale: isChecked ? [0.8, 1.1, 1] : 0.8
                    }}
                    transition={{
                      duration: 0.4,
                      delay: isChecked ? 0.2 : 0,
                    }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </div>
                
                {/* Ripple Effect */}
                {isChecked && (
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      boxShadow: `inset 0 0 15px ${selectedColor.glow.replace('/50', '/30')}`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
              
              {/* Wave Lines */}
              {isChecked && (
                <>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-lg border-2 border-white/20"
                      style={{
                        borderColor: selectedColor.text.replace('text-', '') + '500',
                        scale: 1 + (i + 1) * 0.1,
                        opacity: 0.3 - i * 0.1
                      }}
                      animate={{
                        scale: [1 + i * 0.1, 1.5 + i * 0.1, 1 + i * 0.1],
                        opacity: [0.3 - i * 0.1, 0.1 - i * 0.05, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </>
              )}
            </div>
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
                <p className="text-xs text-gray-400 mb-1">WAVE PROGRESS</p>
                <p className="text-lg font-bold text-purple-400">
                  {Math.round(waveProgress * 100)}%
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
    <WaveCheckbox 
      value={checked} 
      onChange={setChecked} 
      disabled={disabled} 
    />
  );
};

render(<CheckboxDemo />);
