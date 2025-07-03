
const Checkbox = ({ value, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(value);

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
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Ripple Checkbox</h1>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative inline-flex items-center cursor-pointer transition-all duration-300 ${
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
            <div className="relative w-16 h-16 bg-gray-200 border-2 border-gray-600 rounded-xl overflow-hidden transition-colors duration-300">
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-green-500 opacity-0"
                animate={isChecked ? { opacity: [0, 0.2, 0], scale: [1, 1.5, 2.5] } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Glowing Background */}
              <motion.div
                className="absolute inset-[-4px] rounded-lg bg-green-400 blur-md opacity-0"
                animate={{ opacity: isChecked ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Checkmark Container */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  backgroundColor: isChecked ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-8 h-8 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={{
                    opacity: isChecked ? 1 : 0,
                    scale: isChecked ? 1 : 0.5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    delay: isChecked ? 0.2 : 0,
                  }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </motion.div>
              
              {/* Border Highlight */}
              <motion.div 
                className="absolute inset-0 rounded-lg border-2 border-transparent"
                animate={{
                  borderColor: isChecked ? 'rgba(34, 197, 94, 0.5)' : 'transparent',
                  boxShadow: isChecked ? '0 0 10px rgba(34, 197, 94, 0.3)' : 'none',
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                disabled
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
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
            <p>Click the checkbox to see the ripple effect</p>
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
