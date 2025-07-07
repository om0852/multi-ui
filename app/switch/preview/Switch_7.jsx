
const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const toggleSwitch = () => {
    if (!isDisabled) {
      setIsDarkMode(!isDarkMode);
    }
  };

  const variants = {
    true: {
      x: '100%', // Move the circle to the right when dark mode is active
      backgroundColor: 'rgba(59, 130, 246, 1)', // Tailwind blue-500 for light mode
    },
    false: {
      x: 0,
      backgroundColor: 'rgba(34, 34, 34, 1)', // Dark background for dark mode
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      <div
        className={`relative w-20 h-10 rounded-full transition-all duration-300 ease-in-out ${
          isDisabled
            ? 'bg-gray-300 opacity-60 cursor-not-allowed'
            : 'bg-gray-700 cursor-pointer'
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-lg flex justify-center items-center"
          variants={variants}
          animate={isDarkMode ? 'true' : 'false'}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            ease: 'easeInOut',
          }}
        >
          {isDarkMode ? (
            <span className="text-blue-500">🌙</span>
          ) : (
            <span className="text-yellow-400">☀️</span>
          )}
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
      
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </div>
    </div>
  );
};

render(<DarkModeSwitch />);
