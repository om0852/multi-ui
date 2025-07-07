
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
        className={`relative w-20 h-10 rounded-full p-1 ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } overflow-hidden`}
        onClick={toggleSwitch}
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isOn
              ? "linear-gradient(90deg, #fb7185, #ef4444)" // Fire theme
              : "linear-gradient(90deg, #38bdf8, #0ea5e9)", // Ice theme
          }}
          transition={{ duration: 0.4 }}
        />

        {!isDisabled && (
          <motion.div
            className="absolute inset-0 rounded-full z-0"
            style={{
              background: isOn
                ? "radial-gradient(circle, rgba(251, 113, 133, 0.3) 20%, transparent 80%)" // Fire glow
                : "radial-gradient(circle, rgba(56, 189, 248, 0.3) 20%, transparent 80%)", // Ice glow
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        )}

        <motion.div
          className="relative z-10 w-8 h-8 bg-white rounded-full shadow-lg"
          initial={false}
          animate={{
            x: isOn ? 36 : 0,
            scale: isOn ? 1.2 : 1,
            boxShadow: isOn
              ? "0px 0px 15px rgba(251, 113, 133, 0.6)" // Fire shadow
              : "0px 0px 15px rgba(56, 189, 248, 0.6)", // Ice shadow
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />

        <motion.div className="absolute inset-0 flex items-center justify-between px-3 z-20">
          <motion.span
            className="text-white text-lg relative right-[5px]"
            initial={false}
            animate={{ opacity: isOn ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
          >
            ❄️
          </motion.span>

          <motion.span
            className="text-white text-lg"
            initial={false}
            animate={{ opacity: isOn ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            🔥
          </motion.span>
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
