const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar3 = ({
  steps = [
    { label: 'Start', value: 0 },
    { label: 'Upload', value: 25 },
    { label: 'Process', value: 50 },
    { label: 'Review', value: 75 },
    { label: 'Complete', value: 100 },
  ],
  activeColor = "bg-blue-500",
  completedColor = "bg-green-500",
  inactiveColor = "bg-gray-300",
  onStart = (index) => console.log(`Step ${index} started`),
  onComplete = (index) => console.log(`Step ${index} completed`),
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const totalSteps = steps.length;

  const handleStepChange = (index) => {
    if (index !== currentStep) {
      onStart(index);
      setCurrentStep(index);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">State-Based Progress Steps</h2>
      
      <div className="space-y-12">
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">Default Steps</h3>
          <div className="relative w-full h-3 bg-gray-200 rounded-full shadow-inner overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              animate={{
                width: `${(currentStep / (totalSteps - 1)) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={() => onComplete(currentStep)}
            />
          </div>

          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  handleStepChange(index);
                  step.onClick?.();
                }}
              >
                <motion.div
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center text-xs font-bold text-white ${
                    index < currentStep
                      ? completedColor
                      : index === currentStep
                      ? activeColor
                      : inactiveColor
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {index + 1}
                </motion.div>
                <span className="mt-2 text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">Different Colors</h3>
          <div className="space-y-6">
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: '35%' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            
            <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
            
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ProgressBar3 />
    </div>
  );
};

render(<App />);
