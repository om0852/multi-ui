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
    <div className="flex flex-col items-center space-y-16 py-8">
      <StepsList steps={steps} currentStep={currentStep} />
      <div className="flex space-x-8 mt-6">
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
    <div className="relative flex items-center justify-center space-x-4">
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
                "h-1",
                currentStep >= index ? "bg-pink-500" : "bg-gray-300",
                "w-20" // Keep the line width fixed for centering
              )}
              initial={{ width: 0 }}
              animate={{ width: currentStep >= index ? "10rem" : "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
      initial={{ y: -30 }}
      animate={{
        y: isActive ? 0 : isCompleted ? -15 : -30,
        opacity: isActive || isCompleted ? 1 : 0.7,
        rotate: isActive ? 360 : 0,
        scale: isActive ? 1.4 : isCompleted ? 1.2 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <motion.div
        className={clsx(
          "flex items-center justify-center w-14 h-14 rounded-full text-white font-bold shadow-lg",
          isCompleted
            ? "bg-teal-500"
            : isActive
            ? "bg-pink-500"
            : "bg-gray-300"
        )}
        animate={{
          rotate: isActive ? 360 : 0,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.6 }}
      >
        {isCompleted ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
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
        "px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-400"
          : "bg-pink-500 hover:bg-pink-600"
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
        "px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-400"
          : "bg-teal-500 hover:bg-teal-600"
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
