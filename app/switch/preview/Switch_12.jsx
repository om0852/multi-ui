
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
        className={`relative w-24 h-12 rounded-full ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } overflow-hidden`}
        onClick={toggleSwitch}
        whileHover={!isDisabled ? { scale: 1.1 } : {}}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isOn
              ? "linear-gradient(90deg, #f97316, #dc2626)" // Fire theme
              : "linear-gradient(90deg, #3b82f6, #2563eb)", // Ice theme
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-between px-4 text-white z-10"
          style={{ fontSize: "1.5rem" }}
        >
          <motion.span
            initial={false}
            animate={{
              rotateY: isOn ? -90 : 0,
              opacity: isOn ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            ❄️
          </motion.span>
          <motion.span
            initial={false}
            animate={{
              rotateY: isOn ? 0 : 90,
              opacity: isOn ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            🔥
          </motion.span>
        </motion.div>

        <motion.div
          className="absolute top-1 left-1 bg-white w-10 h-10 rounded-full shadow-md z-20"
          style={{ transform: "translateY(-50%)" }}
          initial={false}
          animate={{
            x: isOn ? 48 : 0,
            rotate: isOn ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-xl"
            animate={{ rotate: isOn ? -180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {isOn ? "🔥" : "❄️"}
          </motion.div>
        </motion.div>
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
