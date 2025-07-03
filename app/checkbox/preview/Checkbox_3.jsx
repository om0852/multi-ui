
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Sleek Checkbox</h1>
        
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
            <div className="relative w-14 h-14 bg-gray-100 border-2 border-gray-300 rounded-xl transition-all duration-300 hover:border-blue-400 hover:bg-gray-50">
              {/* Checkmark box */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"
                animate={{
                  opacity: isChecked ? 1 : 0,
                  scale: isChecked ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 w-6 h-6"
                  initial={false}
                  animate={{
                    rotate: isChecked ? 0 : -45,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="w-full h-full text-white"
                  >
                    <motion.path
                      d="M20 6L9 17l-5-5"
                      initial={false}
                      animate={{
                        pathLength: isChecked ? 1 : 0,
                        pathOffset: isChecked ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isChecked ? 0.1 : 0,
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Glow effect */}
              {!disabled && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-blue-200 opacity-0"
                  animate={{
                    opacity: isChecked ? 0.4 : 0,
                    scale: isChecked ? 1.5 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              )}
            </div>
          </label>
          
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                isChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                disabled
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-xl w-full">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-gray-500">Status</p>
                <p className={`font-semibold ${isChecked ? 'text-green-600' : 'text-gray-700'}`}>
                  {isChecked ? 'Checked' : 'Unchecked'}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-gray-500">State</p>
                <p className={`font-semibold ${disabled ? 'text-yellow-600' : 'text-green-600'}`}>
                  {disabled ? 'Disabled' : 'Enabled'}
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
