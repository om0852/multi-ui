
const StepsRoot = ({
  steps = ["Step 1", "Step 2", "Step 3", "Step 4"],
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
    <div className="relative w-full max-w-3xl px-8">
      {/* Progress Line */}
      <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 -translate-y-1/2 z-0" />
      <div
        className="absolute top-1/2 left-0 h-2 bg-blue-500 -translate-y-1/2 z-10 transition-all duration-500"
        style={{
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
        }}
      />

      <ul className="relative flex justify-between z-20">
        {steps.map((step, index) => (
          <StepsItem
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
            stepNumber={index + 1}
          >
            {step}
          </StepsItem>
        ))}
      </ul>
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, stepNumber, children }) => (
    <li className="flex flex-col items-center">
      <motion.div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-3 relative z-10 ${
          isCompleted
            ? 'bg-green-500'
            : isActive
            ? 'bg-blue-500'
            : 'bg-gray-300'
        }`}
        animate={{
          scale: isActive ? 1.2 : 1,
          boxShadow: isActive ? "0 0 0 6px rgba(59, 130, 246, 0.4)" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        ) : (
          <motion.span
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {stepNumber}
          </motion.span>
        )}
      </motion.div>
      <motion.span
        className={`text-sm font-medium ${
          isActive || isCompleted ? 'text-gray-800' : 'text-gray-500'
        }`}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {children}
      </motion.span>
    </li>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
      <StepsList />
      
      <div className="flex space-x-6">
        <motion.button
          className={`px-8 py-3 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed bg-gray-400'
              : 'bg-gray-600 hover:bg-gray-700'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          whileHover={{ scale: currentStep === 0 ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Previous
        </motion.button>
        <motion.button
          className={`px-8 py-3 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-50 cursor-not-allowed bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          whileHover={{ scale: currentStep === steps.length - 1 ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

render(<StepsRoot />);
