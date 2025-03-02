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
      <div className="relative flex flex-col items-center">
        {/* Dotted Connector Line */}
        <div
          className="absolute top-0 bottom-0 left-[50%] w-1 bg-gradient-to-b from-gray-300 to-gray-500"
          style={{
            backgroundImage:
              "radial-gradient(circle, gray 20%, transparent 20%), radial-gradient(circle, gray 20%, transparent 20%)",
            backgroundSize: "10px 10px",
            backgroundPosition: "0 0, 0 5px",
          }}
        />
  
        {/* Steps */}
        <ul className="relative flex flex-col items-center space-y-8 z-10">
          {steps.map((step, index) => (
            <StepsItem
              key={index}
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {step}
            </StepsItem>
          ))}
        </ul>
      </div>
    );
  };
  
  export const StepsItem: React.FC<{
    isActive: boolean;
    isCompleted: boolean;
    children: React.ReactNode;
  }> = ({ isActive, isCompleted, children }) => {
    return (
      <motion.li
        className={clsx(
          "relative flex items-center justify-between w-64 px-6 py-4 text-left font-semibold rounded-lg shadow-lg transition-transform",
          isCompleted
            ? "bg-green-500 text-white"
            : isActive
            ? "bg-blue-500 text-white scale-105 shadow-xl"
            : "bg-gray-200 text-gray-600"
        )}
        whileHover={{
          scale: 1.1,
          rotate: isActive ? 10 : 0,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {/* Status Circle */}
        <div className="absolute left-[-20px] w-10 h-10 rounded-full border-2 bg-white border-gray-400 flex items-center justify-center">
          {isCompleted ? (
            <motion.div
              className="w-6 h-6 bg-green-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.div
              className={isActive ? "bg-blue-500 w-4 h-4 rounded-full" : "bg-gray-400 w-4 h-4 rounded-full"}
              animate={{ scale: isActive ? 1.2 : 1 }}
            />
          )}
        </div>
        {children}
      </motion.li>
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
      steps={["Planning", "Design", "Development", "Testing", "Launch"]}
      initialStep={0}
    />
  );
};

export default Example;
