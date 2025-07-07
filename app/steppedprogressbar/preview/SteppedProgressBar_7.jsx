
const StepsRoot = ({
  steps = ["Planning", "Design", "Implementation", "Review", "Deployment"],
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
      className={`w-20 h-2 rounded-lg ${
        isCompleted ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-400'
      }`}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.5 }}
    />
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-white cursor-pointer transition-all ${
        isCompleted
          ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'
          : isActive
          ? 'bg-yellow-500 shadow-lg scale-150'
          : 'bg-gray-400'
      }`}
      animate={{ scale: isActive ? 1.25 : 1, rotate: isActive ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className="flex items-center justify-center space-x-8">
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

      <div className="flex space-x-6 mt-6">
        <button
          className={`px-6 py-3 bg-gradient-to-l from-gray-400 to-gray-600 text-white font-semibold rounded-lg transition-all ${
            currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold rounded-lg transition-all ${
            currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-800'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

      <motion.div
        className="p-6 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-xl shadow-lg mt-4 w-full max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        key={currentStep}
      >
        Step {currentStep + 1}: {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
