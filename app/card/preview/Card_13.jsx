
const GlitchEffect = ({ isHovered }) => {
  if (!isHovered) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ x: '-100%' }}
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            repeatDelay: Math.random() * 5,
          }}
          style={{
            background: `linear-gradient(90deg,
              transparent,
              rgba(255, 0, ${i * 127}, ${0.2 - i * 0.05}),
              transparent
            )`,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transform: `skew(${Math.random() * 10 - 5}deg)`,
          }}
        />
      ))}
    </motion.div>
  );
};

const NeonLines = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-fuchsia-500 to-cyan-500"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            boxShadow: [
              '0 0 10px rgba(236, 72, 153, 0.5)',
              '0 0 20px rgba(236, 72, 153, 0.7)',
              '0 0 10px rgba(236, 72, 153, 0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            width: '2px',
            height: '40%',
            left: `${(i + 1) * 15}%`,
            top: '30%',
            filter: 'blur(1px)',
            transform: `rotate(${i * 30}deg)`,
            transformOrigin: 'center center',
          }}
        />
      ))}
    </motion.div>
  );
};

const CircuitPattern = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0.1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-500"
          style={{
            width: '1px',
            height: Math.random() * 50 + 20 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: 0.3,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <motion.div
            className="absolute right-0 w-1 h-1 rounded-full bg-cyan-400"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Card_13 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(20, 20, 30, 0.4))',
        boxShadow: '0 0 30px rgba(236, 72, 153, 0.1)',
      }}
    >
      <GlitchEffect isHovered={isHovered} />
      <NeonLines isHovered={isHovered} />
      <CircuitPattern isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center"
          animate={isHovered ? {
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.5 }}
          style={{
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
          }}
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400"
          animate={isHovered ? {
            textShadow: [
              '0 0 8px rgba(236, 72, 153, 0.3)',
              '0 0 12px rgba(236, 72, 153, 0.5)',
              '0 0 8px rgba(236, 72, 153, 0.3)',
            ],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Cyberpunk Card
        </motion.h3>

        <motion.p
          className="text-gray-300/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Step into the future with our cyberpunk-inspired design. Experience glitch effects, neon aesthetics, and futuristic animations that bring this card to life.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Activate
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-fuchsia-300 text-sm font-medium"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 8px rgba(236, 72, 153, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(20, 20, 30, 0.2))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
            }}
          >
            Configure
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1), transparent 60%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
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
    backgroundColor: '#111827',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_13 />
  </div>
);

// Add Google Fonts for Inter
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
