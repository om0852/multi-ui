
const StepsRoot = ({
  steps = ["Research", "Planning", "Design", "Implementation", "Launch"],
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

  const StepsItem = ({ isActive, isCompleted, children }) => (
    <motion.li
      className={`w-12 h-12 flex items-center justify-center font-semibold text-white cursor-pointer relative ${
        isCompleted
          ? 'bg-green-500 border-4 border-white shadow-md'
          : isActive
          ? 'bg-blue-400 border-4 border-white shadow-lg'
          : 'bg-gray-300 border-4 border-gray-400'
      }`}
      animate={isActive ? { scale: 1.3 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        backgroundColor: isActive ? "rgb(56, 144, 255)" : undefined,
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      style={{
        borderRadius: "50%", // Keep circular shape for steps
      }}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white absolute"
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
    <div className="flex flex-col items-center space-y-10 p-8">
      <div className="flex items-center justify-center space-x-6 w-full">
        {steps.map((_, index) => (
          <StepsItem
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {index + 1}
          </StepsItem>
        ))}
      </div>

      <div className="flex space-x-8 mt-10">
        <motion.button
          className={`px-8 py-3 text-lg font-semibold text-white rounded-full transition-all ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gray-500 hover:bg-gray-600'
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Previous
        </motion.button>
        <motion.button
          className={`px-8 py-3 text-lg font-semibold text-white rounded-full transition-all ${
            currentStep === steps.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Next
        </motion.button>
      </div>

      <motion.div
        className="p-10 text-xl font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-md mt-8 w-full max-w-4xl text-center"
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
