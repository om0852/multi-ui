
const StepsRoot = ({
  steps = ["Planning", "Design", "Development", "Testing", "Launch"],
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
    <div className="relative flex flex-col items-center">
      {/* Connector Line */}
      <div className="absolute top-0 bottom-0 left-[50%] w-1 bg-gray-300 z-0" />

      {/* Steps */}
      <ul className="relative flex flex-col items-center space-y-6 z-10">
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
      className={`relative flex items-center justify-between w-64 px-6 py-4 text-left font-semibold rounded-lg shadow-lg ${
        isCompleted
          ? 'bg-green-500 text-white'
          : isActive
          ? 'bg-blue-500 text-white scale-105'
          : 'bg-gray-200 text-gray-600'
      }`}
      animate={{
        scale: isActive ? 1.1 : 1,
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      {/* Status Circle */}
      <div className="absolute left-[-16px] w-8 h-8 rounded-full border-2 bg-white border-gray-400 flex items-center justify-center">
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : (
          <div
            className={isActive ? "bg-blue-500 w-2 h-2 rounded-full" : "bg-gray-400 w-2 h-2 rounded-full"}
          />
        )}
      </div>
      {children}
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center space-y-12 p-8">
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
              : 'bg-blue-600 hover:bg-blue-700'
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
