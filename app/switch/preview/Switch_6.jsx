
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
        className={`relative w-16 h-8 rounded-full ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isOn
              ? "linear-gradient(90deg, #f06292, #ec407a)"
              : "linear-gradient(90deg, #e0e0e0, #d0d0d0)",
          }}
          transition={{ duration: 0.4 }}
        />

        {isOn && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              boxShadow: "0 0 10px 5px rgba(236, 72, 153, 0.7)",
            }}
          />
        )}

        <motion.div
          className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
          initial={false}
          animate={{
            x: isOn ? 32 : 0,
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
    </div>
  );
};

render(<SmoothSwitch />);
