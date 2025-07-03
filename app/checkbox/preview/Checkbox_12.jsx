
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Minimalist Checkbox</h1>
        <p className="text-gray-500 mb-8">Clean and simple design</p>
        
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
            <div className="relative w-full h-full">
              {/* Outer Box */}
              <motion.div 
                className={`absolute inset-0 border-2 rounded-lg transition-colors ${
                  isChecked ? 'border-blue-500' : 'border-gray-300'
                }`}
                animate={{
                  scale: isHovered && !disabled ? 1.05 : 1,
                  backgroundColor: isChecked ? 'rgba(59, 130, 246, 0.05)' : 'white',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {/* Checkmark */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: isChecked ? 1 : 0,
                    scale: isChecked ? [0.8, 1.1, 1] : 0.8,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <svg
                    className="w-8 h-8 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.div>
                
                {/* Hover Effect */}
                {!isChecked && (
                  <motion.div 
                    className="absolute inset-0 bg-gray-100 rounded-md opacity-0"
                    animate={{
                      opacity: isHovered && !disabled ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Focus Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-md border-2 border-transparent"
                  animate={{
                    borderColor: isHovered && !disabled ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                    scale: isHovered && !disabled ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              {/* Subtle Shadow */}
              <motion.div 
                className="absolute inset-0 rounded-lg bg-black opacity-0"
                animate={{
                  opacity: isHovered && !disabled ? 0.03 : 0,
                  scale: isHovered && !disabled ? 1.05 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-md'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-md'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-white/50 rounded-xl w-full backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className={`text-lg font-semibold ${isChecked ? 'text-blue-600' : 'text-gray-700'}`}>
                  {isChecked ? 'Checked' : 'Unchecked'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">State</p>
                <p className={`text-lg font-semibold ${disabled ? 'text-yellow-600' : 'text-green-600'}`}>
                  {disabled ? 'Disabled' : 'Enabled'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">
            <p>Hover over the checkbox to see the subtle effect</p>
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
