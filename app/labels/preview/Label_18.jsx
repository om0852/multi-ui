const Label_18 = ({ text, count, total, className = "" }) => {
  const percentage = (count / total) * 100;

  return (
    <motion.div
      className={`
        relative inline-flex items-center px-3 py-1
        rounded-full overflow-hidden ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-indigo-100"
        initial={{ width: "100%" }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <span className="relative text-sm font-medium text-indigo-700">
        {text}
      </span>
      <span className="relative ml-2 text-xs font-semibold text-indigo-800">
        {count}/{total}
      </span>
    </motion.div>
  );
};

const Demo = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 5;
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev % totalSteps) + 1);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);
  
  const steps = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" },
    { id: 4, label: "Step 4" },
    { id: 5, label: "Complete" },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <Label_18 
          text={steps[currentStep - 1].label} 
          count={currentStep} 
          total={totalSteps} 
        />
      </div>
      
      <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Progress: {currentStep} of {totalSteps}
          </label>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className="bg-indigo-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div 
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-medium ${
                  step.id <= currentStep 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.id}
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {step.label}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
            disabled={currentStep === totalSteps}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
