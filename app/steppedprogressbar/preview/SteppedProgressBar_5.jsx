
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
  animation = { scale: 1.3, rotate: [0, 15, -15, 0], transition: { duration: 0.6 } },
}) => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const isCompleted = stepIndex < activeStep;
        const isActive = stepIndex === activeStep;

        return (
          <div key={stepIndex} className="flex flex-col justify-center">
            <div className="flex items-center">
              <motion.div
                className={`w-12 h-12 flex items-center justify-center shadow-xl cursor-pointer border-2 border-dashed rounded-full transform ${
                  isCompleted
                    ? completedColor
                    : isActive
                    ? activeColor
                    : inactiveColor
                }`}
                animate={isActive ? animation : {}}
                onClick={step.onClick}
              >
                <span className="text-white font-extrabold text-xl">{stepIndex}</span>
              </motion.div>

              {stepIndex < steps.length && (
                <motion.div
                  className={`h-1 w-16 transform-gpu origin-left transition-all duration-300 ${
                    isCompleted ? completedColor : inactiveColor
                  }`}
                  layout
                />
              )}
            </div>

            <span className="mt-3 text-base font-semibold text-gray-800">
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

render(
  <div className="p-8">
    <SteppedProgressBar activeStep={3} />
  </div>
);
