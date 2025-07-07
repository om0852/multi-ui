
const GlowingSwitch = () => {
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
        className={`relative w-20 h-10 rounded-full ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } ${isOn ? "bg-blue-500" : "bg-gray-400"} transition-all duration-300`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md"
          initial={false}
          animate={{ x: isOn ? 40 : 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-300 opacity-50"
          initial={false}
          animate={{ scale: isOn ? 1.2 : 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
          }}
        />
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
        {isOn ? "ACTIVE" : "INACTIVE"}
      </div>
    </div>
  );
};

render(<GlowingSwitch />);
