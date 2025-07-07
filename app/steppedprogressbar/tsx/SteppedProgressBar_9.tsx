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
    <div className="flex flex-col items-center space-y-8">
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

      <div className="flex space-x-8 mt-8">
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
  return <ul className="flex items-center justify-center space-x-10">{children}</ul>;
};

export const StepsItem: React.FC<{ isActive: boolean; isCompleted: boolean; children: React.ReactNode }> = ({
  isActive,
  isCompleted,
  children,
}) => {
  return (
    <motion.li
      className={clsx(
        "w-14 h-14 flex items-center justify-center rounded-full font-extrabold text-white cursor-pointer transition-all",
        isCompleted
          ? "bg-gradient-to-br from-green-500 to-blue-600 shadow-xl"
          : isActive
          ? "bg-gradient-to-br from-yellow-400 to-red-500 shadow-xl scale-110"
          : "bg-gray-400"
      )}
      animate={{ scale: isActive ? 1.2 : 1, rotate: isActive ? 360 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.li>
  );
};

export const Separator: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
  return (
    <motion.div
      className={clsx(
        "w-24 h-1 rounded-md",
        isCompleted ? "bg-gradient-to-r from-green-500 to-blue-600" : "bg-gray-300"
      )}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.6 }}
    />
  );
};

export const StepsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="p-8 text-xl font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-lg mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
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
    <motion.button
      className={clsx(
        "px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-700"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
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
        "px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-gradient-to-l from-gray-600 to-gray-800 hover:bg-gradient-to-l hover:from-gray-700 hover:to-gray-900"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      Previous
    </motion.button>
  );
};

// Example Usage
export const Example = () => {
  return (
    <StepsRoot
      steps={["Planning", "Design", "Development", "Testing", "Deployment"]}
      initialStep={0}
    />
  );
};

export default Example;
