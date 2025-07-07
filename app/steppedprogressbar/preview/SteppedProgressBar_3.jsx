
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
  animation = { scale: 1.2, rotate: 90, transition: { duration: 0.5 } },
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
                style={{ marginLeft: "-1px" }}
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

render(
  <div className="p-8">
    <SteppedProgressBar activeStep={3} />
  </div>
);
