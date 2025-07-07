
const Skeleton = ({
  width,
  height,
  borderRadius = 'rounded-md',
  className = ''
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900 ${borderRadius} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1))",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-full"
          style={{
            top: `${20 * (i + 1)}%`,
            background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-16 h-16 rounded-full"
          style={{
            left: `${25 * (i + 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-[8px] font-mono text-cyan-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -10],
          }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49%, rgba(0,255,255,0.1) 50%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(0,255,255,0.1) 50%, transparent 51%)
          `,
          backgroundSize: "30px 30px",
          opacity: 0.2,
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: "60px",
          height: "60px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
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
