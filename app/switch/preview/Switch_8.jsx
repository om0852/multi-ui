
const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleToggle = () => {
    if (!isDisabled) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      <div className="flex items-center">
        <label htmlFor="switch" className="relative cursor-pointer">
          <input
            id="switch"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
            disabled={isDisabled}
          />
          <motion.div
            className={`w-16 h-8 rounded-full ${isChecked ? "bg-blue-500" : "bg-gray-300"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute w-6 h-6 bg-white rounded-full shadow-md top-1 left-1"
            style={{ transform: isChecked ? "translateX(32px)" : "translateX(0)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </label>
      </div>
      
      <div className="flex space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? "Enable" : "Disable"} Switch
        </button>
      </div>
      
      <div className="text-lg">
        Switch is {isChecked ? "ON" : "OFF"}
      </div>
    </div>
  );
};

render(<Switch />);
