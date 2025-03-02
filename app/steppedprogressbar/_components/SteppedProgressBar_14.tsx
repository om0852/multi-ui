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
        "w-14 h-14 flex items-center justify-center font-semibold text-white cursor-pointer transition-all relative",
        isCompleted
          ? "bg-gradient-to-br from-purple-500 to-pink-600 border-4 border-white shadow-xl"
          : isActive
          ? "bg-gradient-to-br from-blue-500 to-teal-500 border-4 border-white shadow-lg scale-125"
          : "bg-gray-300 border-4 border-gray-400"
      )}
      animate={isActive ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.3,
        rotate: 15,
        boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
        backgroundColor: isActive ? "rgb(0, 255, 153)" : undefined,
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
          className="w-8 h-8 text-white absolute"
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

export const StepsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
          : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
          : "bg-gradient-to-l from-indigo-700 to-indigo-800 hover:bg-gradient-to-l hover:from-indigo-800 hover:to-indigo-900"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
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
      steps={["Research", "Wireframing", "Prototyping", "Testing", "Launch"]}
      initialStep={0}
    />
  );
};

export default Example;
