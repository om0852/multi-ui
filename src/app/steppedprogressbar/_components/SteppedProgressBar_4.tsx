import React from "react";
import { motion } from "framer-motion";

interface SteppedProgressBarProps {
  activeStep?: number;
  steps?: { label: string; onClick?: () => void }[];
  activeColor?: string;
  completedColor?: string;
  inactiveColor?: string;
  animation?: Record<string, any>; // Allow any type of animation configuration
}

const SteppedProgressBar_4: React.FC<SteppedProgressBarProps> = ({
  activeStep = 1,
  steps = [],
  activeColor = "bg-red-500",
  completedColor = "bg-yellow-500",
  inactiveColor = "bg-gray-200",
  animation = { rotate: 360, scale: 1.2, transition: { duration: 0.5 } },
}) => {
  return (
    <div className="flex items-center justify-center ">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const isCompleted = stepIndex < activeStep;
        const isActive = stepIndex === activeStep;

        return (
          <div key={stepIndex} className="flex flex-col items-center">
            <motion.div className="flex flex-row items-center gap-0">
              <motion.div
                className={`w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer border-4 border-solid rounded-lg ${
                  isCompleted
                    ? completedColor
                    : isActive
                    ? activeColor
                    : inactiveColor
                }`}
                animate={isActive ? animation : {}}
                onClick={step.onClick}
              >
                <span className="text-white font-bold text-lg">
                  {stepIndex}
                </span>
              </motion.div>

              {stepIndex < steps.length && (
                <motion.div
                  className={`h-2 w-20 ${
                    isCompleted ? completedColor : inactiveColor
                  }`}
                  layout
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
            <div className="mt-2 text-start w-full text-sm font-medium text-gray-700">
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SteppedProgressBar_4;

// Example Usage:
// <SteppedProgressBar_4
//   activeStep={3}
//   steps={[
//     { label: "Start", onClick: () => console.log("Clicked Step 1") },
//     { label: "Middle", onClick: () => console.log("Clicked Step 2") },
//     { label: "Almost Done", onClick: () => console.log("Clicked Step 3") },
//     { label: "Finish", onClick: () => console.log("Clicked Step 4") },
//   ]}
//   activeColor="bg-red-600"
//   completedColor="bg-yellow-400"
//   inactiveColor="bg-gray-300"
//   animation={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
// />
