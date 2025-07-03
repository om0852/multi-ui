
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Glow Checkbox</h1>
        
        <div className="flex flex-col items-center space-y-8">
          <label
            className={`relative w-16 h-16 inline-flex items-center justify-center cursor-pointer transition-transform duration-300 ${
              disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
            />
            <motion.div
              className={`relative w-full h-full bg-white border-2 rounded-xl overflow-hidden shadow-lg flex items-center justify-center ${
                isChecked ? "border-purple-500" : "border-gray-300"
              }`}
              style={{ aspectRatio: "1 / 1" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: isChecked ? 'rgba(168, 85, 247, 0.1)' : 'white',
                boxShadow: isChecked 
                  ? '0 0 20px rgba(168, 85, 247, 0.3)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Glow Effect */}
              {isChecked && (
                <motion.div
                  className="absolute inset-0 bg-purple-400 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.6, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              )}

              {/* Inner Glow */}
              {isChecked && (
                <motion.div 
                  className="absolute inset-1 bg-purple-300 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.4, 0],
                    scale: [1, 1.1, 1.2]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )}

              {/* Checkmark */}
              <motion.div
                className="w-8 h-8 flex items-center justify-center relative z-10"
                initial={false}
                animate={{
                  scale: isChecked ? [0.8, 1.2, 1] : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                {isChecked ? (
                  <motion.svg
                    className="w-8 h-8 text-purple-600"
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
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isChecked ? 0.1 : 0,
                    }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-400 rounded-md" />
                )}
              </motion.div>
              
              {/* Sparkles Effect */}
              {isChecked && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 60 + 20}%`,
                        top: `${Math.random() * 60 + 20}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        repeatType: "loop",
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </label>
          
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => onChange ? onChange(!isChecked) : setIsChecked(!isChecked)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                isChecked
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-100'
                  : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-100'
              }`}
            >
              {isChecked ? 'Uncheck' : 'Check'}
            </button>
            
            <button
              onClick={() => onChange ? onChange(!disabled) : setDisabled(!disabled)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                disabled
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-100'
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
                <p className={`text-lg font-semibold ${isChecked ? 'text-purple-600' : 'text-gray-700'}`}>
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
            <p>Check to see the glowing animation effect</p>
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
