const { useEffect, useState } = React;

const Counter = ({
  from = 0,
  to,
  duration = 5,
  interval = 0.5,
  className = "",
  formatter = (value) => value.toFixed(0),
  onComplete,
}) => {
  const [visibleValue, setVisibleValue] = useState(from);

  useEffect(() => {
    let counterValue = from;
    const totalIncrements = duration / interval;
    const incrementValue = (to - from) / totalIncrements;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      counterValue += incrementValue;
      setVisibleValue(Math.round(counterValue));

      if (stepCount >= totalIncrements) {
        setVisibleValue(to);
        clearInterval(timer);
        if (onComplete) onComplete(to);
      }
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [from, to, duration, interval, onComplete]);

  return (
    <div className={`relative ${className}`} style={{ width: "100px", height: "150px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleValue}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.5,
          }}
          className="absolute flex items-center justify-center text-4xl font-bold w-full h-full"
        >
          {formatter(visibleValue)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

render(<Counter to={100} />);
