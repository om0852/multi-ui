
const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [currentSize, setCurrentSize] = useState(size);
  const [toggleCount, setToggleCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
    if (value) {
      setToggleCount(prev => prev + 1);
    }
  }, [value]);

  if (!mounted) return null;

  // Size classes
  const sizeClasses = {
    small: {
      container: "w-12 h-6",
      circle: "w-5 h-5",
      translateX: "translate-x-6",
      text: "text-xs"
    },
    medium: {
      container: "w-16 h-8",
      circle: "w-6 h-6",
      translateX: "translate-x-8",
      text: "text-sm"
    },
    large: {
      container: "w-20 h-10",
      circle: "w-8 h-8",
      translateX: "translate-x-10",
      text: "text-base"
    }
  };

  const selectedSize = sizeClasses[currentSize];

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    
    if (newValue) {
      setToggleCount(prev => prev + 1);
    }
  };

  const changeSize = (newSize) => {
    setCurrentSize(newSize);
  };

  const triggerToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
    setToggleCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Toggle Switch</h1>
        <p className="text-gray-500 mb-8">With size options and smooth animation</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative inline-flex items-center cursor-pointer ${
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
            <div 
              className={`relative ${selectedSize.container} rounded-full transition-colors duration-300 ${
                isChecked ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <motion.div
                className={`absolute ${selectedSize.circle} bg-white rounded-full shadow-md`}
                initial={false}
                animate={{
                  x: isChecked ? `calc(100% - ${selectedSize.circle.split('w-')[1].split(' ')[0]})` : '0.25rem',
                  y: '50%',
                  translateY: '-50%',
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
              
              {/* Icons */}
              <div className="absolute inset-0 flex items-center justify-between px-1">
                <motion.div 
                  className={`${selectedSize.text} text-white font-bold`}
                  animate={{
                    opacity: isChecked ? 0 : 1,
                    x: isChecked ? -10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  ✕
                </motion.div>
                <motion.div 
                  className={`${selectedSize.text} text-white font-bold`}
                  animate={{
                    opacity: isChecked ? 1 : 0,
                    x: isChecked ? 0 : 10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  ✓
                </motion.div>
              </div>
              
              {/* Ripple Effect */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400 opacity-0"
                  animate={{
                    scale: 1.5,
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut"
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
                className={`px-3 py-1 rounded-md font-medium transition-all ${
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
              onClick={triggerToggle}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-md'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Turn Off' : 'Turn On'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
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
                <p className={`text-lg font-semibold ${isChecked ? 'text-green-600' : 'text-gray-700'}`}>
                  {isChecked ? 'ON' : 'OFF'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">SIZE</p>
                <p className="text-lg font-semibold text-blue-600">
                  {currentSize.toUpperCase()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm col-span-2">
                <p className="text-sm text-gray-500 mb-1">TOGGLED</p>
                <p className="text-lg font-semibold text-purple-600">
                  {toggleCount} time{toggleCount !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">
            <p>Try changing the size and toggling the switch</p>
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
