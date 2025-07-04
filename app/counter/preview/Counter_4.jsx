const { useEffect, useState } = React;
const { motion, AnimatePresence, useMotionValue, useSpring } = window.framerMotion;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const easeOutElastic = (t) => {
  const p = 0.3;
  return Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1;
};

const Counter = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  easing = easeInOutCubic,
  formatter = (value) => value.toFixed(0),
  className = "",
  onStart,
  onEnd,
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState(from);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const motionValue = useMotionValue(from);

  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    setIsComplete(false);

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      const newValue = from + (to - from) * easedProgress;

      setCurrentValue(newValue);
      motionValue.set(newValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        if (onComplete) onComplete(to);
        if (onEnd) onEnd();
        setIsAnimating(false);
        setIsComplete(true);
      }
    };

    const timer = setTimeout(() => {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration, delay, easing, onStart, onEnd, onComplete, motionValue]);

  useEffect(() => {
    if (isComplete) {
      spring.set(1);
      const timer = setTimeout(() => spring.set(0), 100);
      return () => clearTimeout(timer);
    }
  }, [isComplete, spring]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentValue}
        initial={{ y: 0, opacity: 0.8, scale: 0.9 }}
        animate={{
          y: isAnimating ? [0, -10, 0] : 0,
          opacity: 1,
          scale: isComplete ? [1, 1.1, 1] : 1,
        }}
        transition={{
          y: { repeat: isAnimating ? Infinity : 0, duration: 0.5, ease: "easeInOut" },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
        className={`inline-block ${className}`}
      >
        <motion.span
          style={{
            display: "inline-block",
            transformOrigin: "center",
            transform: spring.get() > 0 ? `scale(${1 + spring.get() * 0.2})` : "scale(1)",
            color: isComplete ? "#4CAF50" : "#2196F3",
            transition: "color 0.3s ease",
            fontWeight: "bold",
            fontSize: "2rem",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {formatter(currentValue)}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

render(<Counter to={100} />);
