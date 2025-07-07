
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
      className={`h-1 rounded-full ${
        isCompleted
          ? 'bg-gradient-to-r from-green-500 to-blue-600'
          : 'bg-gray-300'
      }`}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.6 }}
    />
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-20 h-20 flex items-center justify-center rounded-full font-semibold text-white cursor-pointer transition-all ${
        isCompleted
          ? 'bg-gradient-to-br from-green-500 to-blue-600 border-4 border-white shadow-xl'
          : isActive
          ? 'bg-gradient-to-br from-yellow-500 to-red-500 border-4 border-white shadow-xl scale-110'
          : 'bg-gray-300 border-4 border-gray-400'
      }`}
      animate={{ scale: isActive ? 1.15 : 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.2 }}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      ) : (
        children
      )}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
      <div className="flex items-center justify-center space-x-16 w-full">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            <StepsItem
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {index + 1}
            </StepsItem>
            {index < steps.length - 1 && (
              <div className="w-24">
                <Separator isCompleted={index < currentStep} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex space-x-8 mt-10">
        <motion.button
          className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
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
          className={`px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
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
        className="p-10 text-2xl font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg shadow-xl mt-6 w-full max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        key={currentStep}
      >
        Step {currentStep + 1}: {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
