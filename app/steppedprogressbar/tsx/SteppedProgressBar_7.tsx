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

      <div className="flex space-x-6 mt-6">
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
  return <ul className="flex items-center justify-center space-x-8">{children}</ul>;
};

export const StepsItem: React.FC<{ isActive: boolean; isCompleted: boolean; children: React.ReactNode }> = ({
  isActive,
  isCompleted,
  children,
}) => {
  return (
    <motion.li
      className={clsx(
        "w-12 h-12 flex items-center justify-center rounded-full font-bold text-white cursor-pointer transition-all",
        isCompleted
          ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          : isActive
          ? "bg-yellow-500 shadow-lg scale-150"
          : "bg-gray-400"
      )}
      animate={{ scale: isActive ? 1.25 : 1, rotate: isActive ? 360 : 0 }}
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
        "w-20 h-2 rounded-lg",
        isCompleted ? "bg-gradient-to-r from-green-400 to-blue-500" : "bg-gray-400"
      )}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.5 }}
    />
  );
};

export const StepsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="p-6 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-xl shadow-lg mt-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
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
        "px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold rounded-lg transition-all",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-800"
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
        "px-6 py-3 bg-gradient-to-l from-gray-400 to-gray-600 text-white font-semibold rounded-lg transition-all",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
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
      steps={["Planning", "Design", "Implementation", "Review", "Deployment"]}
      initialStep={0}
    />
  );
};

export default Example;
