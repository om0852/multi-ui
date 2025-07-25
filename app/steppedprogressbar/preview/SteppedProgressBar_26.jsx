
const StepsRoot = ({
  steps = ["Plan", "Design", "Develop", "Test", "Launch"],
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
    <div className="relative flex items-center justify-center p-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <StepsItem
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {step}
          </StepsItem>
          {/* Animated separator line except for the last step */}
          {index < steps.length - 1 && (
            <motion.div
              className="w-10 h-0.5 bg-gray-300"
              initial={{ width: 10 }}
              animate={{ width: currentStep >= index ? "10vh" : "0%" }}
              transition={{ duration: 0.6 }}
            />
          )}
        </div>
      ))}
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isActive ? 1.3 : isCompleted ? 1 : 0.8,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`flex items-center justify-center w-16 h-16 rounded-full text-white font-semibold shadow-lg ${
          isCompleted
            ? 'bg-green-600'
            : isActive
            ? 'bg-blue-600'
            : 'bg-gray-400'
        }`}
        animate={isActive ? { rotate: 360 } : undefined}
        transition={{ duration: 0.6 }}
      >
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        ) : (
          children
        )}
      </motion.div>
      {isActive && (
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      )}
    </motion.div>
  );

  const StepsNextTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Next
    </motion.button>
  );

  const StepsPrevTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400'
          : 'bg-gray-600 hover:bg-gray-700'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Previous
    </motion.button>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
      <StepsList />
      <div className="flex space-x-6">
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
