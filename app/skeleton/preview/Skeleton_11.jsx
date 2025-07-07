
const Skeleton = ({
  width,
  height,
  borderRadius = 'rounded-md',
  className = ''
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-violet-900/30 ${borderRadius} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.4), transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(167,139,250,0.4), transparent 50%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.2), transparent 60%)",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 rounded-full bg-violet-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-full"
          style={{
            top: `${20 + i * 20}%`,
            background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)",
            filter: "blur(2px)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.2), transparent)",
          filter: "blur(20px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

render(
  <div className="space-y-4 p-4">
    <Skeleton width="100%" height="24px" />
    <Skeleton width="80%" height="24px" />
    <Skeleton width="60%" height="24px" />
    <div className="flex space-x-4">
      <Skeleton width="100px" height="100px" borderRadius="rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton width="70%" height="20px" />
        <Skeleton width="50%" height="20px" />
        <Skeleton width="60%" height="20px" />
      </div>
    </div>
  </div>
);
