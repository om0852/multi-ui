'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const StepsRoot = ({ steps, initialStep = 0 }) => {
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
    <div className="flex flex-col items-center space-y-14">
      <StepsList>
        {steps.map((step, index) => (
          <StepsItem
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {index + 1}
          </StepsItem>
        ))}
      </StepsList>

      <div className="flex space-x-10 mt-12">
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

export const StepsList = ({ children }) => {
  return <ul className="flex items-center justify-center space-x-8">{children}</ul>;
};

export const StepsItem = ({
  isActive,
  isCompleted,
  children,
}) => {
  return (
    <motion.li
      className={clsx(
        "w-14 h-14 flex items-center justify-center font-semibold text-white cursor-pointer transition-all relative",
        isCompleted
          ? "bg-gradient-to-br from-green-600 to-blue-700 border-4 border-white shadow-xl"
          : isActive
          ? "bg-gradient-to-br from-yellow-500 to-orange-500 border-4 border-white shadow-lg scale-125"
          : "bg-gray-300 border-4 border-gray-400"
      )}
      animate={isActive ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.3,
        rotate: 15,
        boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
        backgroundColor: isActive ? "rgb(253, 157, 26)" : undefined,
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.15 },
      }}
      style={{
        borderRadius: "50%", // Ensure circular shape for the steps
      }}
    >
      {isCompleted ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-white absolute"
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
        children
      )}
    </motion.li>
  );
};

export const StepsContent = ({ children }) => {
  return (
    <motion.div
      className="p-12 text-3xl font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-2xl mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const StepsNextTrigger = ({
  disabled,
  onClick,
}) => {
  return (
    <motion.button
      className={clsx(
        "px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-gradient-to-r from-indigo-600 to-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-900"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      // Slide-in effect on button appearance
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Next
    </motion.button>
  );
};

export const StepsPrevTrigger = ({
  disabled,
  onClick,
}) => {
  return (
    <motion.button
      className={clsx(
        "px-10 py-5 text-lg font-semibold text-white rounded-lg transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-gradient-to-l from-gray-700 to-gray-800 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-900"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      // Slide-in effect for the previous button
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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

const SteppedProgressBar_13 = StepsRoot;
export default SteppedProgressBar_13; 