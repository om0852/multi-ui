const { useEffect, useState } = React;

const Counter = ({
  from = 0,
  to,
  duration = 3,
  interval = 0.1,
  className = "",
  formatter = (value) => value.toFixed(0),
  onComplete,
}) => {
  const [visibleValue, setVisibleValue] = useState(from);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let counterValue = from;
    const totalIncrements = duration / interval;
    const incrementValue = (to - from) / totalIncrements;
    let stepCount = 0;

    setIsAnimating(true);

    const timer = setInterval(() => {
      stepCount++;
      counterValue += incrementValue;

      const roundedValue = Math.round(counterValue);
      setVisibleValue(roundedValue);

      if (stepCount >= totalIncrements) {
        setVisibleValue(to);
        clearInterval(timer);
        setIsAnimating(false);

        if (onComplete) {
          onComplete(to);
        }
      }
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [from, to, duration, interval, onComplete]);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: "100px",
        height: "100px",
        perspective: "1000px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleValue}
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={isAnimating ? { rotateX: 360, rotateY: 180 } : {}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: isAnimating ? Infinity : 0,
            repeatType: "reverse",
          }}
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.span
            className="text-white text-3xl font-bold"
            style={{
              transform: "translateZ(50px)",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {formatter(visibleValue)}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

render(<Counter to={100} />);
