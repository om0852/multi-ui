
const SwitchFour = () => {
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
              ? "bg-gradient-to-br from-pink-500 to-red-500"
              : "bg-gradient-to-br from-gray-300 to-gray-500"
          }`}
          initial={false}
          animate={{
            scale: isOn ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute top-2 left-2 w-10 h-10 bg-white rounded-full shadow-lg"
          initial={false}
          animate={{
            x: isOn ? 16 : 0,
            scale: isOn ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={false}
          animate={{
            opacity: isOn ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
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
        {isOn ? "SELECTED" : "UNSELECTED"}
      </div>
    </div>
  );
};

render(<SwitchFour />);
