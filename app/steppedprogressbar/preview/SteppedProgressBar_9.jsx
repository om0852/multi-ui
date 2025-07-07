
const StepsRoot = ({
  steps = ["Planning", "Design", "Development", "Testing", "Deployment"],
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
      className={`w-24 h-1 rounded-md ${
        isCompleted ? 'bg-gradient-to-r from-green-500 to-blue-600' : 'bg-gray-300'
      }`}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.6 }}
    />
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-14 h-14 flex items-center justify-center rounded-full font-extrabold text-white cursor-pointer transition-all ${
        isCompleted
          ? 'bg-gradient-to-br from-green-500 to-blue-600 shadow-xl'
          : isActive
          ? 'bg-gradient-to-br from-yellow-400 to-red-500 shadow-xl scale-110'
          : 'bg-gray-400'
      }`}
      animate={{ scale: isActive ? 1.2 : 1, rotate: isActive ? 360 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="flex items-center justify-center space-x-10">
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

      <div className="flex space-x-8 mt-8">
        <motion.button
          className={`px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-l from-gray-600 to-gray-800 hover:bg-gradient-to-l hover:from-gray-700 hover:to-gray-900'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Previous
        </motion.button>
        <motion.button
          className={`px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-700'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>
      </div>

      <motion.div
        className="p-8 text-xl font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-lg mt-6 w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        key={currentStep}
      >
        Step {currentStep + 1}: {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
