
const SwitchEight = () => {
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
        } bg-gradient-to-r from-gray-300 to-gray-500`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 bg-blue-200 flex items-center justify-center rounded-md shadow-md"
          initial={false}
          animate={{
            x: isOn ? 40 : 0,
            scale: isOn ? 1.2 : 1,
          }}
          transition={{
            type: "tween",
            duration: 0.6,
          }}
        >
          {isOn ? "🌊" : "🌟"}
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
        {isOn ? "WATER MODE" : "STAR MODE"}
      </div>
    </div>
  );
};

render(<SwitchEight />);
