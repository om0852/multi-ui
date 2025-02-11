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

      <div className="flex space-x-8 mt-10">
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
  return <ul className="flex items-center justify-center space-x-16">{children}</ul>;
};

export const StepsItem: React.FC<{ isActive: boolean; isCompleted: boolean; children: React.ReactNode }> = ({
  isActive,
  isCompleted,
  children,
}) => {
  return (
    <motion.li
      className={clsx(
        "w-20 h-20 flex items-center justify-center rounded-full font-semibold text-white cursor-pointer transition-all",
        isCompleted
          ? "bg-gradient-to-br from-green-500 to-blue-600 border-4 border-white shadow-xl"
          : isActive
          ? "bg-gradient-to-br from-yellow-500 to-red-500 border-4 border-white shadow-xl scale-110"
          : "bg-gray-300 border-4 border-gray-400"
      )}
      animate={{ scale: isActive ? 1.15 : 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.2 }}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      ) : (
        children
      )}
    </motion.li>
  );
};

export const Separator: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
  return (
    <motion.div
      className={clsx(
        "h-1 rounded-full",
        isCompleted
          ? "bg-gradient-to-r from-green-500 to-blue-600"
          : "bg-gray-300"
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
      className="p-10 text-2xl font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg shadow-xl mt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
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
        "px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all",
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
        "px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all",
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
      initialStep={5}
    />
  );
};

export default Example;
