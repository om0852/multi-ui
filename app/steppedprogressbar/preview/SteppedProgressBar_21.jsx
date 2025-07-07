
const StepsRoot = ({
  steps = ["Planning", "Design", "Development", "Testing", "Launch"],
  initialStep = 0
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepsList = () => (
    <div className="relative flex flex-col items-center min-h-[400px]">
      {/* Animated Line */}
      <motion.div
        className="absolute left-[50%] w-1 bg-gray-300"
        initial={{ height: 0 }}
        animate={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      />

      {/* Steps */}
      <ul className="relative flex flex-col items-center space-y-8 z-10">
        {steps.map((step, index) => (
          <StepsItem
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {step}
          </StepsItem>
        ))}
      </ul>
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`relative flex items-center justify-between w-64 px-6 py-4 text-left font-semibold rounded-lg shadow-lg transition-transform ${
        isCompleted
          ? 'bg-green-500 text-white'
          : isActive
          ? 'bg-blue-500 text-white scale-110 shadow-lg'
          : 'bg-gray-200 text-gray-600'
      }`}
      whileHover={{
        scale: 1.1,
        rotate: isActive ? 10 : 0,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      {/* Status Circle with Pulsating Animation */}
      <motion.div
        className="absolute left-[-24px] w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          boxShadow: isActive ? "0 0 15px 5px rgba(59,130,246,0.5)" : "none",
        }}
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1,
        }}
        transition={{
          repeat: isActive ? Infinity : 0,
          duration: 1,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isCompleted ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </motion.div>
      {children}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
      <StepsList />
      
      <div className="flex space-x-6 mt-8">
        <motion.button
          className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed bg-gray-400'
              : 'bg-gray-600 hover:bg-gray-700'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Previous
        </motion.button>
        <motion.button
          className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-50 cursor-not-allowed bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

render(<StepsRoot />);
