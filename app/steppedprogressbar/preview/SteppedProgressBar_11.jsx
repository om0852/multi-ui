
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
          ? 'bg-gradient-to-r from-green-600 to-blue-700'
          : 'bg-gray-300'
      }`}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scaleX: 1.1 }}
    />
  );

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-24 h-24 flex items-center justify-center rounded-full font-semibold text-white cursor-pointer ${
        isCompleted
          ? 'bg-gradient-to-br from-green-600 to-blue-700 border-4 border-white shadow-xl'
          : isActive
          ? 'bg-gradient-to-br from-yellow-500 to-orange-500 border-4 border-white shadow-lg scale-125'
          : 'bg-gray-300 border-4 border-gray-400'
      }`}
      animate={{ scale: isActive ? 1.2 : 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.3,
        rotate: 10,
        boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
        backgroundColor: isActive ? "rgb(253, 157, 26)" : undefined,
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.15 },
      }}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-white"
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
        children
      )}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-14 p-8">
      <div className="flex items-center justify-center space-x-20 w-full">
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

      <div className="flex space-x-10 mt-12">
        <motion.button
          className={`px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-l from-gray-700 to-gray-800 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-900'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
        >
          Previous
        </motion.button>
        <motion.button
          className={`px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-600 to-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-900'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>
      </div>

      <motion.div
        className="p-12 text-3xl font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-2xl mt-8 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        key={currentStep}
      >
        Step {currentStep + 1}: {steps[currentStep]}
      </motion.div>
    </div>
  );
};

render(<StepsRoot />);
