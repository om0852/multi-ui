"use client"; // Enable client-side rendering

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
        <StepsNextTrigger disabled={currentStep === steps.length - 1} onClick={goToNextStep} />
      </div>
    </div>
  );
};

export const StepsList: React.FC<{ steps: string[]; currentStep: number }> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <StepsItem
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {step}
          </StepsItem>
          {index < steps.length - 1 && (
            <motion.div
              className={clsx(
                "w-16 h-1",
                currentStep >= index ? "bg-green-500" : "bg-gray-300"
              )}
              initial={{ width: 0 }}
              animate={{ width: currentStep >= index ? "6rem" : "0%" }}
              transition={{ duration: 0.6 }}
            />
          )}
        </div>
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
        scale: isActive ? 1.6 : isCompleted ? 1.2 : 0.8,
        opacity: isActive || isCompleted ? 1 : 0.6,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={clsx(
          "flex items-center justify-center w-14 h-14 rounded-full text-white font-semibold shadow-lg",
          isCompleted
            ? "bg-green-500"
            : isActive
            ? "bg-blue-500"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : (
          children
        )}
      </motion.div>
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
      steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}
      initialStep={0}
    />
  );
};

export default Example;
