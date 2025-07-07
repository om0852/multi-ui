
const StepsRoot = ({
  steps = ["Planning", "Development", "Testing", "Deployment"],
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

  const Separator = ({ isCompleted }) => (
    <motion.div
      className={`w-16 h-1 rounded ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer transition-transform ${
        isCompleted
          ? 'bg-green-500 text-white'
          : isActive
          ? 'bg-blue-500 text-white scale-125'
          : 'bg-gray-300 text-gray-700'
      }`}
      animate={isActive ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className="flex items-center space-x-4">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            <StepsItem
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {index + 1}
            </StepsItem>
            {index < steps.length - 1 && (
              <Separator isCompleted={index < currentStep} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 bg-gray-500 text-white font-medium rounded-lg transition ${
            currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-lg transition ${
            currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

      <motion.div
        className="p-4 text-lg font-medium text-gray-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        key={currentStep}
      >
        Step {currentStep + 1}: {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
