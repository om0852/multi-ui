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
    <div className="flex flex-col items-center space-y-12 py-10">
      <StepsList steps={steps} currentStep={currentStep} />
      <div className="flex space-x-6 mt-10">
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
    <div className="relative flex flex-col items-center space-y-10">
      {/* Connector Line */}
      <motion.div
        className="absolute left-[50%] top-12 bottom-12 w-1 bg-gradient-to-b from-blue-400 to-blue-800"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Steps */}
      <ul className="relative flex flex-col items-center space-y-6 z-10">
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
        "relative flex items-center justify-center w-20 h-20 rounded-full border-4",
        isCompleted
          ? "bg-green-600 text-white border-green-800"
          : isActive
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-600"
          : "bg-gray-300 text-gray-700 border-gray-500"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
    >
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
        "px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg",
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-700"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      Next Step
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
        "px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg",
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-indigo-400 to-indigo-600 hover:bg-indigo-700"
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      Previous Step
    </motion.button>
  );
};

// Example Usage
export const Example = () => {
  return (
    <StepsRoot
      steps={[
        "Step 1: Prepare Materials",
        "Step 2: Organize Tasks",
        "Step 3: Start Execution",
        "Step 4: Complete and Review",
      ]}
      initialStep={0}
    />
  );
};

export default Example;
