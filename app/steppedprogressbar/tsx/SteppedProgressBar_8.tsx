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
    <div className="flex flex-col items-center space-y-6">
      <StepsList>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepsItem
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {index + 1}
            </StepsItem>
            {index < steps.length - 1 && (
              <Separator isCompleted={index < currentStep} />
            )}
          </React.Fragment>
        ))}
      </StepsList>

      <div className="flex space-x-4">
        <StepsPrevTrigger disabled={currentStep === 0} onClick={goToPrevStep} />
        <StepsNextTrigger
          disabled={currentStep === steps.length - 1}
          onClick={goToNextStep}
        />
      </div>

      <StepsContent>{steps[currentStep]}</StepsContent>
    </div>
  );
};

export const StepsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="flex items-center space-x-4">{children}</ul>;
};

export const StepsItem: React.FC<{ isActive: boolean; isCompleted: boolean; children: React.ReactNode }> = ({
  isActive,
  isCompleted,
  children,
}) => {
  return (
    <motion.li
      className={clsx(
        "w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer transition-transform",
        isCompleted
          ? "bg-green-500 text-white"
          : isActive
          ? "bg-blue-500 text-white scale-125"
          : "bg-gray-300 text-gray-700"
      )}
      animate={isActive ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.li>
  );
};

export const Separator: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
  return (
    <motion.div
      className={clsx(
        "w-16 h-1 rounded",
        isCompleted ? "bg-green-500" : "bg-gray-300"
      )}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export const StepsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="p-4 text-lg font-medium text-gray-800"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const StepsNextTrigger: React.FC<{ disabled: boolean; onClick: () => void }> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-blue-500 text-white font-medium rounded-lg transition",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      Next
    </button>
  );
};

export const StepsPrevTrigger: React.FC<{ disabled: boolean; onClick: () => void }> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-gray-500 text-white font-medium rounded-lg transition",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      Previous
    </button>
  );
};

// Example Usage
export const Example = () => {
  return (
    <StepsRoot
      steps={["Planning", "Development", "Testing", "Deployment"]}
      initialStep={0}
    />
  );
};

export default Example;
