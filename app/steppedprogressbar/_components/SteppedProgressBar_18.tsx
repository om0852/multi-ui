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
    <div className="flex flex-col items-center space-y-12">
      <StepsList steps={steps} currentStep={currentStep} />
      <div className="flex space-x-6">
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
    <div className="relative flex items-center justify-center space-x-12">
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
      className="relative flex flex-col items-center"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isActive ? 1.3 : isCompleted ? 1 : 0.8,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={clsx(
          "flex items-center justify-center w-16 h-16 rounded-full text-white font-semibold shadow-lg",
          isCompleted
            ? "bg-green-600"
            : isActive
            ? "bg-blue-600"
            : "bg-gray-400"
        )}
        animate={isActive ? { rotate: 360 } : undefined}
        transition={{ duration: 0.6 }}
      >
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        ) : (
          children
        )}
      </motion.div>
      {isActive && (
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
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
          : "bg-blue-600 hover:bg-blue-700"
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
      steps={["Plan", "Design", "Develop", "Test", "Launch"]}
      initialStep={0}
    />
  );
};

export default Example;
