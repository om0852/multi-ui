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

const SteppedProgressBar_2: React.FC<SteppedProgressBarProps> = ({
  activeStep = 1,
  steps = [],
  activeColor = "bg-blue-500",
  completedColor = "bg-green-500",
  inactiveColor = "bg-gray-300",
  animation = { scale: 1.2, transition: { duration: 0.3 } },
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const isCompleted = stepIndex < activeStep;
        const isActive = stepIndex === activeStep;

        return (
          <div key={stepIndex} className="flex flex-col items-center">
            <motion.div
              className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer shadow-lg ${
                isCompleted
                  ? completedColor
                  : isActive
                  ? activeColor
                  : inactiveColor
              }`}
              animate={isActive ? animation : {}}
              onClick={step.onClick}
            >
              <span className="text-white font-bold">{stepIndex}</span>
            </motion.div>

            {stepIndex < steps.length && (
              <motion.div
                className={`h-1 w-12 ${isCompleted ? completedColor : inactiveColor}`}
                layout
                transition={{ duration: 0.3 }}
              />
            )}

            <span className="mt-2 text-sm text-gray-700">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SteppedProgressBar_2;

// Example Usage:
// <SteppedProgressBar_2
//   activeStep={2}
//   steps={[
//     { label: "Step 1", onClick: () => console.log("Clicked Step 1") },
//     { label: "Step 2", onClick: () => console.log("Clicked Step 2") },
//     { label: "Step 3", onClick: () => console.log("Clicked Step 3") },
//     { label: "Step 4", onClick: () => console.log("Clicked Step 4") },
//   ]}
//   activeColor="bg-blue-600"
//   completedColor="bg-green-400"
//   inactiveColor="bg-gray-300"
//   animation={{ scale: 1.3, transition: { duration: 0.4 } }}
// />
