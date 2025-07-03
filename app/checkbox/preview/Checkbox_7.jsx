
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-8">Rotating Border Checkbox</h1>
        
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
            <div className="relative w-16 h-16 bg-gray-700/50 border-2 border-gray-600 rounded-xl overflow-hidden transition-all duration-300">
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent rounded-xl"
                style={{
                  background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B, #3B82F6)',
                  backgroundSize: '300% 300%',
                }}
                animate={isChecked ? { 
                  rotate: 360,
                  backgroundPosition: '100% 100%'
                } : { 
                  rotate: 0,
                  backgroundPosition: '0% 0%'
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: isChecked ? Infinity : 0,
                  repeatType: "loop",
                }}
              />

              {/* Inner Glow */}
              <motion.div 
                className="absolute inset-1 rounded-lg bg-gray-800/80"
                animate={{
                  boxShadow: isChecked 
                    ? 'inset 0 0 15px rgba(59, 130, 246, 0.5)'
                    : 'none'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Checkmark */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: isChecked ? 1 : 0,
                    scale: isChecked ? 1 : 0.8,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  <svg
                    className="w-8 h-8 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-500/20'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
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
          
          <div className="mt-8 p-6 bg-gray-800/30 rounded-xl w-full backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1">CURRENT STATE</p>
                <p className={`text-lg font-bold ${isChecked ? 'text-blue-400' : 'text-gray-400'}`}>
                  {isChecked ? 'CHECKED' : 'UNCHECKED'}
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
          
          <div className="text-sm text-gray-400 mt-2">
            <p>Check to see the rotating gradient border effect</p>
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
