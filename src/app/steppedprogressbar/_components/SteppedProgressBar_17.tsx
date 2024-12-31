import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface StepsProps {
  steps: string[];
  initialStep?: number;
}

export const StepsRoot: React.FC<StepsProps> = ({ steps, initialStep = 0 }) => {
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
    <div className="flex flex-col items-center space-y-10">
      <StepsList steps={steps} currentStep={currentStep} />
      <div className="flex space-x-6 mt-8">
        <StepsPrevTrigger disabled={currentStep === 0} onClick={goToPrevStep} />
        <StepsNextTrigger
          disabled={currentStep === steps.length - 1}
          onClick={goToNextStep}
        />
      </div>
    </div>
  );
};

export const StepsList: React.FC<{ steps: string[]; currentStep: number }> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="relative flex items-center space-x-4">
      {steps.map((step, index) => (
        <StepsItem
          key={index}
          isActive={index === currentStep}
          isCompleted={index < currentStep}
        >
          {step}
        </StepsItem>
      ))}
    </div>
  );
};

export const StepsItem: React.FC<{
  isActive: boolean;
  isCompleted: boolean;
  children: React.ReactNode;
}> = ({ isActive, isCompleted, children }) => {
  return (
    <motion.div
      className={clsx(
        "w-40 h-52 flex flex-col items-center justify-center px-4 py-6 text-center rounded-lg shadow-lg transition-all",
        isCompleted
          ? "bg-gradient-to-br from-green-500 to-green-700 text-white"
          : isActive
          ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white scale-110 shadow-2xl z-10"
          : "bg-gray-300 text-gray-700 scale-90"
      )}
      animate={{
        scale: isActive ? 1.1 : 0.9,
        rotate: isCompleted ? 10 : 0,
      }}
      transition={{ duration: 0.4 }}
      whileHover={isActive ? { scale: 1.15 } : undefined}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 mb-2"
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
        <h3 className="text-lg font-semibold">{children}</h3>
      )}
    </motion.div>
  );
};

export const StepsNextTrigger: React.FC<{ disabled: boolean; onClick: () => void }> = ({
  disabled,
  onClick,
}) => {
  return (
    <motion.button
      className={clsx(
        "px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-400"
          : "bg-blue-500 hover:bg-blue-600"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Next
    </motion.button>
  );
};

export const StepsPrevTrigger: React.FC<{ disabled: boolean; onClick: () => void }> = ({
  disabled,
  onClick,
}) => {
  return (
    <motion.button
      className={clsx(
        "px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-400"
          : "bg-gray-600 hover:bg-gray-700"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Previous
    </motion.button>
  );
};

// Example Usage
export const Example = () => {
  return (
    <StepsRoot
      steps={["Plan", "Design", "Develop", "Review", "Launch"]}
      initialStep={0}
    />
  );
};

export default Example;
