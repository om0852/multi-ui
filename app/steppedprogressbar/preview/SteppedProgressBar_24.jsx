
const StepsRoot = ({
  steps = ["Start", "Process", "Verify", "Complete"],
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
      {/* Connector Line */}
      <div className="absolute top-0 bottom-0 left-[50%] w-1 bg-gray-300" />

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
      className={`relative flex items-center justify-between w-64 px-6 py-4 text-left font-medium rounded-full border-4 transition-transform ${
        isCompleted
          ? 'bg-green-200 border-green-500 text-green-700'
          : isActive
          ? 'bg-blue-200 border-blue-500 text-blue-700 scale-110'
          : 'bg-gray-100 border-gray-300 text-gray-500'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute left-[-25px] w-8 h-8 rounded-full border-2 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        style={{
          backgroundColor: isCompleted ? "#34d399" : isActive ? "#3b82f6" : "#d1d5db",
        }}
      />
      {children}
    </motion.li>
  );

  const StepsNextTrigger = ({ disabled, onClick }) => (
    <motion.button
      className={`px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
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
      className={`px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
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
    <div className="flex flex-col items-center space-y-10 p-8">
      <StepsList />
      <div className="flex space-x-6 mt-8">
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
