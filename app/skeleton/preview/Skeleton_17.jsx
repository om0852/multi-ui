
const Skeleton = ({
  width,
  height,
  borderRadius = 'rounded-md',
  className = ''
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-zinc-900 ${borderRadius} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, #b91c1c, #f59e0b, #b91c1c)",
          filter: "blur(10px)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(251,146,60,0.2), transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute h-full w-[20%]"
          style={{
            left: `${i * 20}%`,
            background: "linear-gradient(0deg, rgba(251,146,60,0.3), transparent)",
            filter: "blur(8px)",
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-1 h-1 rounded-full bg-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -20],
            x: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 1,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(251,146,60,0.1) 10px, rgba(251,146,60,0.1) 20px)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          transform: "skewX(-20deg)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(251,146,60,0.2), transparent)",
          filter: "blur(30px)",
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
