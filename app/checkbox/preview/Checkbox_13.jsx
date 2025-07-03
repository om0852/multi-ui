
const Checkbox = ({ value, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  if (!mounted) return null;

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Material Checkbox</h1>
        <p className="text-gray-500 mb-8">Inspired by Material Design</p>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative w-16 h-16 inline-flex items-center justify-center cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onMouseEnter={() => !disabled && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background */}
              <motion.div 
                className={`absolute inset-0 rounded-sm border-2 transition-colors ${
                  isChecked ? 'border-green-500' : 'border-gray-400'
                }`}
                animate={{
                  scale: isHovered && !disabled ? 1.1 : 1,
                  backgroundColor: isChecked ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {/* Checkmark Background */}
                <motion.div
                  className="absolute inset-0.5 rounded-sm"
                  animate={{
                    backgroundColor: isChecked ? '#4CAF50' : 'transparent',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Checkmark */}
                  <motion.svg
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{
                      pathLength: isChecked ? 1 : 0,
                      opacity: isChecked ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: isChecked ? 0.1 : 0,
                    }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </motion.div>
                
                {/* Ripple Effect */}
                {isHovered && !disabled && (
                  <motion.div 
                    className="absolute inset-0 bg-green-500 rounded-full opacity-0"
                    animate={{
                      opacity: 0.1,
                      scale: 2,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.div>
              
              {/* Focus Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-green-500 opacity-0"
                animate={{
                  opacity: isHovered && !disabled ? 0.1 : 0,
                  scale: isHovered && !disabled ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-md font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-md'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-md font-medium transition-all ${
                disabled
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className={`text-lg font-semibold ${isChecked ? 'text-green-600' : 'text-gray-700'}`}>
                  {isChecked ? 'Checked' : 'Unchecked'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">State</p>
                <p className={`text-lg font-semibold ${disabled ? 'text-yellow-600' : 'text-green-600'}`}>
                  {disabled ? 'Disabled' : 'Enabled'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">
            <p>Hover over the checkbox to see the ripple effect</p>
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
