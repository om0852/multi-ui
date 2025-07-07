
const UniqueSwitch = () => {
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
        className={`relative w-16 h-8 flex items-center rounded-full border-2 transition-all duration-300 overflow-hidden ${
          isOn ? "border-blue-500" : "border-gray-400"
        } ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        onClick={toggleSwitch}
        animate={{
          rotate: isOn ? 5 : -5, // Wobble effect
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${
            isOn ? "bg-blue-500" : "bg-gray-300"
          }`}
          initial={false}
          animate={{
            backgroundColor: isOn ? "#3b82f6" : "#d1d5db",
          }}
          transition={{ duration: 0.4 }}
        />

        {!isDisabled && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0) 60%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: isOn ? 1.5 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        <motion.div
          className="absolute inset-0 rounded-full z-10"
          style={{
            filter: "blur(10px)",
            background: isOn
              ? "rgba(59, 130, 246, 0.5)"
              : "rgba(209, 213, 219, 0.5)",
          }}
          animate={{
            opacity: isOn ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-lg z-20 ${
            isOn ? "left-8" : "left-0"
          }`}
          initial={false}
          animate={{
            x: isOn ? 0 : 5,
            scale: isOn ? 1 : 1,
            rotate: isOn ? 360 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
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
      
      <div className="text-lg">
        Switch is {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

render(<UniqueSwitch />);
