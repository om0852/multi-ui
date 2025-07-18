
const SteppedProgressBar = ({
  activeStep = 1,
  steps = [
    { label: "Step 1", onClick: () => console.log("Clicked Step 1") },
    { label: "Step 2", onClick: () => console.log("Clicked Step 2") },
    { label: "Step 3", onClick: () => console.log("Clicked Step 3") },
    { label: "Step 4", onClick: () => console.log("Clicked Step 4") },
  ],
  activeColor = "bg-blue-600",
  completedColor = "bg-green-400",
  inactiveColor = "bg-gray-300",
  animation = { scale: 1.3, transition: { duration: 0.4 } },
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

render(
  <div className="p-8">
    <SteppedProgressBar activeStep={2} />
  </div>
);
