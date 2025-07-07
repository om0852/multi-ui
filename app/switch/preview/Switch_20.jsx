
const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const toggleSwitch = () => {
    if (!isDisabled) {
      setIsOn(!isOn);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      <div
        className={`relative w-16 h-8 rounded-full ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className={`absolute inset-0 rounded-full overflow-hidden ${
            isOn
              ? "bg-gradient-to-r from-green-400 to-emerald-600"
              : "bg-gradient-to-r from-gray-300 to-gray-400"
          }`}
          initial={false}
          animate={{
            scale: isOn ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 0.6,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          {isOn && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
              <div className="absolute bottom-1 right-2 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full"></div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg ${
            isOn ? "bg-white" : "bg-gray-100"
          }`}
          initial={false}
          animate={{
            x: isOn ? 32 : 0,
            rotate: isOn ? 180 : 0,
            scale: isOn ? [1, 1.1, 1] : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            className={`absolute inset-0 flex items-center justify-center ${
              isOn ? "text-green-500" : "text-gray-400"
            }`}
            initial={false}
            animate={{
              scale: isOn ? [1, 1.2, 1] : 1,
              opacity: isOn ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M12 2L8 6H16L12 2zM12 22L8 18H16L12 22z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="flex space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? "Enable" : "Disable"} Switch
        </button>
      </div>
      
      <div className="text-lg font-medium">
        {isOn ? "ECO MODE ON" : "ECO MODE OFF"}
      </div>
    </div>
  );
};

render(<Switch />);
