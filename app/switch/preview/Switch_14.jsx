
const SwitchOne = () => {
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
        className={`relative w-14 h-14 rounded-full ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${
            isOn
              ? "bg-gradient-to-br from-blue-400 to-blue-600"
              : "bg-gradient-to-br from-gray-300 to-gray-500"
          }`}
          initial={false}
          animate={{
            background: isOn
              ? "radial-gradient(circle, #3b82f6, #1e40af)"
              : "radial-gradient(circle, #d1d5db, #9ca3af)",
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute top-2 w-10 h-10 bg-white rounded-full shadow-md"
          initial={false}
          animate={{
            x: isOn ? 32 : -20,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
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
        {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

render(<SwitchOne />);
