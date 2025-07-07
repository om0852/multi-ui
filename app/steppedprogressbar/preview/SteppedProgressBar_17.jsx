
const StepsRoot = ({
  steps = ["Plan", "Design", "Develop", "Review", "Launch"],
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
    <div className="relative flex items-center space-x-4">
      {steps.map((step, index) => (
        <StepsItem
          key={index}
          isActive={index === currentStep}
          isCompleted={index < currentStep}
        >
          {step}
        </StepsItem>
      ))}
    </div>
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.div
      className={`w-40 h-52 flex flex-col items-center justify-center px-4 py-6 text-center rounded-lg shadow-lg transition-all ${
        isCompleted
          ? 'bg-gradient-to-br from-green-500 to-green-700 text-white'
          : isActive
          ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white scale-110 shadow-2xl z-10'
          : 'bg-gray-300 text-gray-700 scale-90'
      }`}
      animate={{
        scale: isActive ? 1.1 : 0.9,
        rotate: isCompleted ? 10 : 0,
      }}
      transition={{ duration: 0.4 }}
      whileHover={isActive ? { scale: 1.15 } : undefined}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      ) : (
        <h3 className="text-lg font-semibold">{children}</h3>
      )}
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center space-y-10 p-8">
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
              : 'bg-blue-500 hover:bg-blue-600'
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
