
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
    <label className={`neon-checkbox relative w-12 h-12 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <div className="neon-checkbox__frame relative w-full h-full">
        <motion.div
          className="neon-checkbox__box absolute inset-0 bg-black/80 border-2 border-green-700 rounded-md transition-transform duration-300"
          whileHover={!disabled ? { scale: 1.05 } : undefined}
        />

        <motion.div className="neon-checkbox__check-container flex items-center justify-center absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)]">
          <svg
            viewBox="0 0 32 32"
            className="neon-checkbox__check w-4/5 h-4/5 fill-none stroke-green-500 stroke-[3] stroke-linecap-round stroke-linejoin-round"
          >
            <motion.path
              d="M3,12.5l7,7L21,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isChecked ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="neon-checkbox__glow absolute -inset-1 rounded-md bg-green-500/30 blur-md opacity-0"
          animate={{
            opacity: isChecked ? 1 : 0,
            scale: isChecked ? 1.1 : 0.9,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </label>
  );
};

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Neon Checkbox</h1>
        <p className="text-gray-400">A sleek, animated checkbox with a neon glow effect</p>
      </div>
      
      <div className="flex flex-col items-center space-y-6">
        <Checkbox 
          value={checked} 
          onChange={setChecked} 
          disabled={disabled} 
        />
        
        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={() => setChecked(!checked)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            {checked ? 'Uncheck' : 'Check'}
          </button>
          
          <button
            onClick={() => setDisabled(!disabled)}
            className={`px-4 py-2 rounded-md transition-colors ${
              disabled 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {disabled ? 'Enable' : 'Disable'}
          </button>
        </div>
        
        <div className="mt-4 p-4 bg-gray-800/50 rounded-md">
          <p className="text-gray-300">
            <span className="font-mono text-green-400">Checked:</span>{' '}
            <span className="font-mono text-white">{String(checked)}</span>
          </p>
          <p className="text-gray-300 mt-1">
            <span className="font-mono text-green-400">Disabled:</span>{' '}
            <span className="font-mono text-white">{String(disabled)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

render(<CheckboxDemo />);
