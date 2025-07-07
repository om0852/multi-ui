
const SwitchNine = () => {
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
        className={`relative w-24 h-12 rounded-sm ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } bg-gradient-to-r from-green-400 to-yellow-400`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute top-2 left-2 w-8 h-8 bg-white flex items-center justify-center rounded-md shadow-md"
          initial={false}
          animate={{
            x: isOn ? 48 : 0,
            y: isOn ? -4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          {isOn ? "🌞" : "🌙"}
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
        {isOn ? "DAY MODE" : "NIGHT MODE"}
      </div>
    </div>
  );
};

render(<SwitchNine />);
