
const StepsRoot = ({
  steps = ["Step 1: Start", "Step 2: Design", "Step 3: Build", "Step 4: Test"],
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

  const StepsItem = ({ isActive, isCompleted }) => (
    <motion.li
      className={`w-10 h-10 border-2 rounded-full transition-all flex items-center justify-center ${
        isCompleted
          ? 'bg-green-400 border-green-600'
          : isActive
          ? 'bg-blue-400 border-blue-600'
          : 'bg-gray-200 border-gray-400'
      }`}
      animate={{
        scale: isActive ? 1.3 : 1,
        opacity: isActive || isCompleted ? 1 : 0.8,
      }}
      transition={{ duration: 0.4 }}
    />
  );

  const ProgressLine = () => (
    <div className="relative w-full max-w-md h-1 bg-gray-300 rounded-full overflow-hidden">
      <motion.div
        className="absolute h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
      <div className="flex items-center justify-center space-x-10 w-full">
        {steps.map((_, index) => (
          <StepsItem
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          />
        ))}
      </div>
      
      <div className="w-full max-w-md">
        <ProgressLine />
      </div>

      <div className="flex space-x-6 mt-10">
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

      <motion.div
        className="px-10 py-6 text-lg font-medium text-gray-800 bg-gray-100 rounded-lg shadow-lg w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        key={currentStep}
      >
        {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
