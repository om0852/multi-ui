const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar8 = ({
  steps = [
    { id: 1, label: 'Start', completed: false },
    { id: 2, label: 'Upload', completed: false },
    { id: 3, label: 'Process', completed: false },
    { id: 4, label: 'Review', completed: false },
    { id: 5, label: 'Complete', completed: false },
  ],
  activeStep = 2,
  onStepClick = (step) => console.log(`Step ${step + 1} clicked`),
  barColor = "bg-gradient-to-r from-blue-500 to-cyan-400",
  activeColor = "bg-gradient-to-br from-blue-500 to-blue-600",
  completedColor = "bg-gradient-to-br from-green-400 to-emerald-500",
  inactiveColor = "bg-gray-300"
}) => {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [currentStep, setCurrentStep] = React.useState(activeStep);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    onStepClick(index);
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Step Progress Bar</h1>
        
        <div className="space-y-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Interactive Demo</h2>
            
            <div className="relative">
              {/* Progress bar */}
              <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${barColor} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{
                    width: `${progressPercentage}%`,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              {/* Steps */}
              <div className="flex justify-between mt-8 relative">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center cursor-pointer group`}
                    onClick={() => handleStepClick(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${
                        index < currentStep
                          ? completedColor
                          : index === currentStep
                          ? activeColor
                          : inactiveColor
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index < currentStep ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </motion.div>
                    <span
                      className={`mt-2 text-sm font-medium transition-colors ${
                        index === currentStep
                          ? 'text-blue-600 font-semibold'
                          : index < currentStep
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </span>
                    
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-5 left-1/2 -ml-2 w-full h-0.5 bg-gray-200 -z-10">
                        {index < currentStep && (
                          <motion.div 
                            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          />
                        )}
                      </div>
                    )}
                    
                    {/* Tooltip */}
                    {hoveredStep === index && (
                      <motion.div
                        className="absolute -top-10 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        {step.label} - {index === currentStep ? 'Active' : index < currentStep ? 'Completed' : 'Pending'}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Current Step</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    {steps[currentStep].label} ({currentStep + 1} of {steps.length})
                  </p>
                </div>
                <div className="space-x-3">
                  <button
                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentStep === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                    disabled={currentStep === steps.length - 1}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentStep === steps.length - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Different States</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Not Started</h3>
                <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">
                        {i}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">In Progress</h3>
                <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm ${
                          i < 4 
                            ? 'bg-green-500'
                            : i === 4
                            ? 'bg-blue-500'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {i < 4 ? '✓' : i}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Completed</h3>
                <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ProgressBar8 />;
};

render(<App />);
