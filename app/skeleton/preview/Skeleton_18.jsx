
const Skeleton = ({
  width,
  height,
  borderRadius = 'rounded-md',
  className = ''
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-slate-950 ${borderRadius} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1e1b4b, #020617)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 20}%, rgba(244,114,182,0.2), transparent 60%)`,
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: Math.random() > 0.5 ? "#fef3c7" : "#fde68a",
            boxShadow: "0 0 4px rgba(254,243,199,0.8)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${90 * i}deg, transparent, rgba(244,114,182,0.1), transparent)`,
            filter: "blur(20px)",
          }}
          animate={{
            transform: [
              "translateX(-50%) rotate(0deg)",
              "translateX(50%) rotate(180deg)",
              "translateX(-50%) rotate(360deg)",
            ],
          }}
          transition={{
            duration: 15,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute w-32 h-32"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            background: "radial-gradient(circle at center, rgba(244,114,182,0.2), transparent 70%)",
            filter: "blur(10px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(167,139,250,0.2), transparent 50%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-px h-px bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
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
