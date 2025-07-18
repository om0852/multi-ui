
const SteppedProgressBar = ({
  activeStep = 1,
  steps = [
    { label: "Start", onClick: () => console.log("Clicked Step 1") },
    { label: "Middle", onClick: () => console.log("Clicked Step 2") },
    { label: "Almost Done", onClick: () => console.log("Clicked Step 3") },
    { label: "Finish", onClick: () => console.log("Clicked Step 4") },
  ],
  activeColor = "bg-purple-600",
  completedColor = "bg-teal-400",
  inactiveColor = "bg-gray-300",
  animation = { opacity: 1, translateY: -10, transition: { duration: 0.4 } },
}) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const isCompleted = stepIndex < activeStep;
        const isActive = stepIndex === activeStep;

        return (
          <div key={stepIndex} className="flex flex-col items-center">
            <motion.div
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg cursor-pointer ${
                isCompleted
                  ? completedColor
                  : isActive
                  ? activeColor
                  : inactiveColor
              }`}
              animate={isActive ? animation : {}}
              onClick={step.onClick}
            >
              <span className="text-white font-bold text-lg">{stepIndex}</span>
            </motion.div>

            {stepIndex < steps.length && (
              <motion.div
                className={`h-2 w-16 rounded-full ${isCompleted ? completedColor : inactiveColor}`}
                layout
                transition={{ duration: 0.3 }}
              />
            )}

            <span className="mt-3 text-base font-medium text-gray-800">{step.label}</span>
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
