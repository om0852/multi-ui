
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-8">Neon Toggle</h1>
        
        <div className="flex flex-col items-center space-y-8">
          <motion.label
            className={`relative inline-block cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="checkbox"
              className="absolute opacity-0 w-0 h-0"
              checked={checked}
              onChange={handleChange}
              disabled={disabled}
            />
            
            <motion.div
              className="w-24 h-12 rounded-full p-1 relative overflow-hidden"
              animate={{
                background: checked 
                  ? 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)' 
                  : 'linear-gradient(135deg, #374151 0%, #1F2937 100%)',
                boxShadow: checked 
                  ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                className="w-10 h-10 bg-white rounded-full absolute top-1 left-1 z-10"
                layout
                initial={false}
                animate={{
                  x: checked ? 48 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-1 h-1 rounded-full bg-blue-500"
                    animate={{
                      scale: checked ? 0 : 1,
                      opacity: checked ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: checked ? 0 : 0.2
                    }}
                  />
                  <motion.div
                    className="absolute w-1 h-1 rounded-full bg-blue-500"
                    animate={{
                      scale: checked ? 1 : 0,
                      opacity: checked ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: checked ? 0.2 : 0
                    }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-between px-2">
                <motion.span 
                  className="text-xs font-medium text-white"
                  animate={{
                    opacity: checked ? 0.5 : 1,
                    x: checked ? -10 : 0,
                  }}
                  transition={{
                    duration: 0.3
                  }}
                >
                  OFF
                </motion.span>
                <motion.span 
                  className="text-xs font-medium text-white"
                  animate={{
                    opacity: checked ? 1 : 0.5,
                    x: checked ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3
                  }}
                >
                  ON
                </motion.span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 rounded-full opacity-0"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0) 70%)',
              }}
              animate={{
                opacity: checked ? 1 : 0,
                scale: checked ? 1.5 : 1,
              }}
              transition={{
                duration: 0.5
              }}
            />
          </motion.label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!checked) : setChecked(!checked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                checked
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-500/20'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {checked ? 'Turn Off' : 'Turn On'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/20'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-800/50 rounded-xl w-full backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">CURRENT STATE</p>
                <p className={`text-lg font-bold ${checked ? 'text-blue-400' : 'text-gray-400'}`}>
                  {checked ? 'ACTIVE' : 'INACTIVE'}
                </p>
              </div>
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">STATUS</p>
                <p className={`text-lg font-bold ${disabled ? 'text-yellow-400' : 'text-green-400'}`}>
                  {disabled ? 'DISABLED' : 'ENABLED'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-2 text-sm text-gray-400">
            <p>Toggle the switch to see the neon effect</p>
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
