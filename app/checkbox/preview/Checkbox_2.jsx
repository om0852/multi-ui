
const Checkbox = ({ value = false, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  if (!mounted) return null;

  const currentChecked = value !== undefined ? value : checked;

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !currentChecked;
    if (onChange) {
      onChange(newChecked);
    } else {
      setChecked(newChecked);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Modern Checkbox</h1>
        
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            className="relative w-12 h-12 cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              checked={currentChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <label
              htmlFor="checkbox"
              className={`block w-full h-full rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                currentChecked
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300 hover:border-blue-400'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <motion.svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={false}
                animate={{
                  scale: currentChecked ? 1 : 0.5,
                  opacity: currentChecked ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </motion.svg>
            </label>
            
            {!disabled && (
              <motion.div
                className="absolute inset-0 rounded-lg bg-blue-100 -z-10"
                animate={{
                  scale: currentChecked ? 1.1 : 0.9,
                  opacity: currentChecked ? 0.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!currentChecked) : setChecked(!currentChecked)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentChecked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {currentChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-4 py-2 rounded-md transition-colors ${
                disabled
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Status:</span>{' '}
              <span className={`font-semibold ${currentChecked ? 'text-green-600' : 'text-gray-700'}`}>
                {currentChecked ? 'Checked' : 'Unchecked'}
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">State:</span>{' '}
              <span className={`font-semibold ${disabled ? 'text-yellow-600' : 'text-green-600'}`}>
                {disabled ? 'Disabled' : 'Enabled'}
              </span>
            </p>
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
