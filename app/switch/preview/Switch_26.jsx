
const SwitchTwelve = () => {
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
        className={`relative w-20 h-10 rounded-sm ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } bg-gradient-to-r from-blue-400 to-indigo-600`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 bg-white flex items-center justify-center shadow-md"
          initial={false}
          animate={{
            x: isOn ? 40 : 0,
            scale: isOn ? 1.1 : 1,
            rotate: isOn ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
        >
          {isOn ? "🌙" : "☀️"}
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
        {isOn ? "NIGHT MODE" : "DAY MODE"}
      </div>
    </div>
  );
};

render(<SwitchTwelve />);
