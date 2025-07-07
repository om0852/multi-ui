
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
        className={`relative w-20 h-10 flex items-center px-1 rounded-full ${
          isOn ? "bg-green-500" : "bg-gray-400"
        } ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={toggleSwitch}
        style={{
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
      >
        <motion.div
          className="w-8 h-8 bg-white rounded-full shadow-md"
          initial={false}
          animate={{ x: isOn ? 36 : 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
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
    </div>
  );
};

render(<SmoothSwitch />);
