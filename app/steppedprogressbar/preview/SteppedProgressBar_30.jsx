
const StepsRoot = ({
  steps = ["Start", "In Progress", "Review", "Complete"],
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
    <div className="relative flex items-center justify-center space-x-12 w-full overflow-x-auto p-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <StepsItem
            isActive={index === currentStep}
            isCompleted={index < currentStep}
            stepNumber={index + 1}
          >
            {step}
          </StepsItem>
          {index < steps.length - 1 && (
            <motion.div
              className={`h-1 w-24 ${
                currentStep >= index 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'bg-gray-200'
              }`}
              initial={{ width: 0 }}
              animate={{ width: currentStep >= index ? "6rem" : "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
        </div>
      ))}
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, stepNumber, children }) => (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: isActive ? 1.1 : isCompleted ? 1 : 0.9,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`relative flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl shadow-lg ${
          isCompleted
            ? 'bg-gradient-to-br from-green-400 to-green-600'
            : isActive
            ? 'bg-gradient-to-br from-purple-500 to-pink-500'
            : 'bg-gray-300'
        }`}
        animate={isActive ? { rotate: 360 } : undefined}
        transition={{ duration: 0.6 }}
      >
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : (
          stepNumber
        )}
      </motion.div>
      <motion.div
        className={`mt-3 font-medium ${
          isActive ? 'text-purple-700' : isCompleted ? 'text-green-700' : 'text-gray-500'
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  const StepsNextTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-10 py-4 text-lg font-semibold text-white rounded-xl shadow-lg ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400'
          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      Next Step
    </motion.button>
  );

  const StepsPrevTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-10 py-4 text-lg font-semibold text-white rounded-xl shadow-lg ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400'
          : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      Previous
    </motion.button>
  );

  return (
    <div className="flex flex-col items-center space-y-16 py-12 w-full max-w-6xl mx-auto">
      <StepsList />
      <div className="flex space-x-8 mt-10">
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
