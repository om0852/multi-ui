
const StepsRoot = ({
  steps = ["Start", "Processing", "Review", "Approval", "Completed"],
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
    <div className="relative flex items-center space-x-6 w-full max-w-2xl">
      {/* Animated Line */}
      <motion.div
        className="absolute top-1/2 w-full h-1 bg-gray-300"
        style={{ transform: "translateY(-50%)" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500"
          initial={{ width: 0 }}
          animate={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
        />
      </motion.div>

      {/* Steps */}
      {steps.map((_, index) => (
        <StepsItem
          key={index}
          isActive={index === currentStep}
          isCompleted={index < currentStep}
        >
          {index + 1}
        </StepsItem>
      ))}
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.div
      className={`relative flex items-center justify-center w-12 h-12 font-semibold text-white rounded-full transition-all ${
        isCompleted
          ? 'bg-green-500 shadow-md'
          : isActive
          ? 'bg-blue-500 scale-110 shadow-xl'
          : 'bg-gray-300 shadow'
      }`}
      whileHover={{
        scale: isActive ? 1.2 : 1.1,
        rotate: isActive ? 10 : 0,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {isCompleted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L9 11.585l6.293-6.292a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        children
      )}
    </motion.div>
  );

  const StepsNextTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-6 py-3 text-lg font-semibold text-white rounded-lg ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      Next
    </motion.button>
  );

  const StepsPrevTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-6 py-3 text-lg font-semibold text-white rounded-lg ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-gradient-to-l from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      Previous
    </motion.button>
  );

  return (
    <div className="flex flex-col items-center space-y-10 p-8">
      {/* Steps List */}
      <StepsList />

      {/* Controls */}
      <div className="flex space-x-8 mt-6">
        <StepsPrevTrigger
          disabled={currentStep === 0}
          onClick={goToPrevStep}
        />
        <StepsNextTrigger
          disabled={currentStep === steps.length - 1}
          onClick={goToNextStep}
        />
      </div>
    </div>
  );
};

render(<StepsRoot />);
