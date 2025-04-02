import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface SteppedProgressBarProps {
  activeStep?: number;
  steps?: { label: string; onClick?: () => void }[];
  activeColor?: string;
  completedColor?: string;
  inactiveColor?: string;
  animation?: TargetAndTransition;
}

const SteppedProgressBar_3: React.FC<SteppedProgressBarProps> = ({
  activeStep = 1,
  steps = [],
  activeColor = "bg-purple-500",
  completedColor = "bg-teal-500",
  inactiveColor = "bg-gray-400",
  animation = { opacity: 1, transition: { duration: 0.4 } },
}) => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const isCompleted = stepIndex < activeStep;
        const isActive = stepIndex === activeStep;

        return (
          <div key={stepIndex} className="flex items-center">
            <motion.div
              className={`w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer ${
                isCompleted
                  ? completedColor
                  : isActive
                  ? activeColor
                  : inactiveColor
              }`}
              style={{ borderRadius: "0.25rem" }}
              animate={isActive ? animation : {}}
              onClick={step.onClick}
            >
              <span className="text-white font-bold text-lg">{stepIndex}</span>
            </motion.div>

            {stepIndex < steps.length && (
              <motion.div
                className={`h-2 w-16 ${isCompleted ? completedColor : inactiveColor}`}
                style={{ marginLeft: "-1px" }} // Ensures lines are fully connected
                layout
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SteppedProgressBar_3;

// Example Usage:
// <SteppedProgressBar_3
//   activeStep={3}
//   steps={[
//     { label: "Start", onClick: () => console.log("Clicked Step 1") },
//     { label: "Middle", onClick: () => console.log("Clicked Step 2") },
//     { label: "Almost Done", onClick: () => console.log("Clicked Step 3") },
//     { label: "Finish", onClick: () => console.log("Clicked Step 4") },
//   ]}
//   activeColor="bg-purple-600"
//   completedColor="bg-teal-400"
//   inactiveColor="bg-gray-300"
//   animation={{ scale: 1.2, rotate: 90, transition: { duration: 0.5 } }}
// />
