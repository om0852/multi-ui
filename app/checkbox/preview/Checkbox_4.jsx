
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

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Toggle Switch</h1>
        
        <div className="flex flex-col items-center space-y-8">
          <motion.label
            className={`relative inline-block cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <input
              type="checkbox"
              className="absolute opacity-0 w-0 h-0"
              checked={checked}
              onChange={handleChange}
              disabled={disabled}
            />
            <motion.div
              className="w-20 h-10 bg-gray-200 rounded-full p-1 transition-all duration-300"
              animate={{
                backgroundColor: checked ? '#3B82F6' : '#E5E7EB',
                boxShadow: checked 
                  ? '0 0 15px rgba(59, 130, 246, 0.5)' 
                  : '0 2px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                className="w-8 h-8 bg-white rounded-full shadow-md"
                layout
                initial={false}
                animate={{
                  x: checked ? 40 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {checked ? (
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!checked) : setChecked(!checked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                checked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {checked ? 'Turn Off' : 'Turn On'}
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
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Current State</p>
                <p className={`text-lg font-semibold ${checked ? 'text-blue-600' : 'text-gray-700'}`}>
                  {checked ? 'Active' : 'Inactive'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Switch is</p>
                <p className={`text-lg font-semibold ${disabled ? 'text-yellow-600' : 'text-green-600'}`}>
                  {disabled ? 'Disabled' : 'Enabled'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Click the switch or use the buttons to toggle the state</p>
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
