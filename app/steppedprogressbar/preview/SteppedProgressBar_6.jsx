
const StepsRoot = ({ steps = ["1", "2", "3", "4"], initialStep = 0 }) => {
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

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className="flex space-x-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer ${
              index === currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            animate={index === currentStep ? { scale: 1.2 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {step}
          </motion.div>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 bg-gray-500 text-white font-medium rounded-lg transition ${
            currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          onClick={goToPrevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-lg transition ${
            currentStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
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
