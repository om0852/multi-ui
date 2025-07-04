const { useEffect, useState } = React;
const { motion, animate } = window.framerMotion;

const Counter = ({
  from = 0,
  to,
  duration = 2.5,
  easing = "easeOut",
  formatter = (value) => value.toFixed(0),
  className = "",
  onStart,
  onEnd,
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    if (onStart) onStart();

    const controls = animate(from, to, {
      duration,
      ease: easing,
      onUpdate: (value) => setCurrentValue(value),
      onComplete: () => {
        if (onComplete) onComplete(to, { from, to });
        if (onEnd) onEnd();
      },
    });

    return () => controls.stop();
  }, [from, to, duration, easing, onStart, onEnd, onComplete]);

  return (
    <motion.div
      aria-live="polite"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bouncy-counter ${className} relative inline-block font-bold text-3xl`}
      style={{
        color: "white",
        textShadow: "0 0 5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.7)",
        border: "2px solid #1e90ff",
        padding: "10px 20px",
        borderRadius: "10px",
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
      }}
    >
      {formatter(currentValue)}
    </motion.div>
  );
};

render(<Counter to={100} />);
