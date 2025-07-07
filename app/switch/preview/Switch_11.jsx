
const SmoothSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const toggleSwitch = () => {
    if (!isDisabled) {
      setIsOn(!isOn);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      <motion.div
        className={`relative w-20 h-10 rounded-md ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } overflow-hidden`}
        onClick={toggleSwitch}
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-md"
          initial={false}
          animate={{
            background: isOn
              ? "linear-gradient(90deg, #f97316, #dc2626)" // Fire theme
              : "linear-gradient(90deg, #3b82f6, #2563eb)", // Ice theme
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-between px-3 text-white z-20"
          style={{ fontSize: "1.5rem" }}
        >
          <motion.span
            initial={false}
            animate={{
              position: "relative",
              opacity: !isOn ? -5 : 5,
              x: 30,
              zIndex: 200,
            }}
            transition={{ duration: 0.4 }}
          >
            ❄️
          </motion.span>

          <motion.span
            initial={false}
            animate={{
              opacity: !isOn ? 1 : 0,
              x: -40,
            }}
            transition={{ duration: 0.4 }}
          >
            🔥
          </motion.span>
        </motion.div>

        <motion.div
          className="absolute top-1 left-0 bg-white w-8 h-8 shadow-lg"
          style={{
            transform: "translateY(-50%)",
          }}
          initial={false}
          animate={{
            x: isOn ? 42 : 5,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />
      </motion.div>
      
      <div className="flex space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? "Enable" : "Disable"} Switch
        </button>
      </div>
      
      <div className="text-lg font-medium">
        {isOn ? "Fire Mode 🔥" : "Ice Mode ❄️"}
      </div>
    </div>
  );
};

render(<SmoothSwitch />);
