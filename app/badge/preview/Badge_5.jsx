/* ===== paste into react-live (scope: { React, useEffect, useState }) ===== */

/* ---- AnimatedGradientBadge component ---- */
const AnimatedGradientBadge = ({
  text,
  gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-400 to-emerald-500",
    "from-yellow-400 to-orange-500",
  ],
  animationSpeed = 3000,
  ...props
}) => {
  const [currentGradient, setCurrentGradient] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [gradients.length, animationSpeed]);

  return (
    <span
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r ${gradients[currentGradient]} shadow-md transition-all duration-1000`}
      {...props}
    >
      {text}
    </span>
  );
};

/* ---- demo ---- */
const BadgeDemo5 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Animated Gradient Badge</h3>
    <div className="flex flex-wrap gap-3 items-center">
      <AnimatedGradientBadge text="Auto-rotating" />
      
      <AnimatedGradientBadge 
        text="Faster" 
        animationSpeed={1500}
        gradients={[
          "from-red-500 to-pink-500",
          "from-orange-400 to-amber-400",
          "from-lime-400 to-green-500",
          "from-cyan-400 to-blue-500"
        ]}
      />
    </div>
    <p className="text-sm text-gray-600">Watch the gradient transition automatically</p>
  </div>
);

render(<BadgeDemo5 />);
