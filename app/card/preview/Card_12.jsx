
const FluidBackground = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{
            scale: [1.5, 1.8, 1.5],
            opacity: [0, 0.3, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
          style={{
            background: `radial-gradient(circle at ${50 + i * 20}% ${50 + i * 20}%, 
              rgba(56, 189, 248, 0.2),
              rgba(59, 130, 246, 0.2),
              transparent 50%
            )`,
            filter: 'blur(8px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const GlowingBorder = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-sky-400 to-blue-500"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            ...(i === 0 && { top: '-1px', left: '-1px', right: '-1px', height: '2px' }),
            ...(i === 1 && { top: '-1px', right: '-1px', bottom: '-1px', width: '2px' }),
            ...(i === 2 && { bottom: '-1px', left: '-1px', right: '-1px', height: '2px' }),
            ...(i === 3 && { top: '-1px', left: '-1px', bottom: '-1px', width: '2px' }),
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const FloatingElements = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-sky-400/20 rounded-full"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const Card_12 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(17, 24, 39, 0.4))',
        boxShadow: '0 0 30px rgba(56, 189, 248, 0.1)',
      }}
    >
      <FluidBackground isHovered={isHovered} />
      <GlowingBorder isHovered={isHovered} />
      <FloatingElements isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400"
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Interactive Card
        </motion.h3>

        <motion.p
          className="text-gray-300/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Experience the future of user interfaces with our fluid animations and dynamic effects. Hover over this card to see the magic unfold before your eyes.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg border border-sky-400/30 text-sky-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(17, 24, 39, 0.2))',
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Render the component for React Live
render(
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#0f172a',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_12 />
  </div>
);
