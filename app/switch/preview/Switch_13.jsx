
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
      <div
        className={`relative w-20 h-10 rounded-full p-1 ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isOn
              ? "linear-gradient(90deg, #4f46e5, #3b82f6)"
              : "linear-gradient(90deg, #d1d5db, #9ca3af)",
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="relative z-10 w-8 h-8 bg-white rounded-full shadow-lg"
          initial={false}
          animate={{
            x: isOn ? 36 : 0,
            scale: isOn ? 1.1 : 1,
            rotate: isOn ? 360 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
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

render(<SmoothSwitch />);
