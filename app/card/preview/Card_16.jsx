
const GridEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0.2 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: `
          linear-gradient(transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 2%),
          linear-gradient(90deg, transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 2%)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center 100%',
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0px 0px', '0px 40px'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'inherit',
          backgroundSize: 'inherit',
        }}
      />
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
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full"
          style={{
            top: `${25 + i * 25}%`,
            background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.8), transparent)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

const GlowEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ rotate: i * 180 }}
          animate={{
            rotate: [i * 180, i * 180 + 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              width: '50%',
              height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
              top: '-50%',
              left: '25%',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Card_16 = () => {
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
        background: 'linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(20, 20, 30, 0.4))',
        boxShadow: '0 0 30px rgba(236, 72, 153, 0.1)',
      }}
    >
      <GridEffect isHovered={isHovered} />
      <NeonLines isHovered={isHovered} />
      <GlowEffect isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180],
          } : {}}
          transition={{ duration: 0.5 }}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
          style={{ fontFamily: '"Press Start 2P", system-ui' }}
          animate={isHovered ? {
            textShadow: [
              '0 0 8px rgba(236, 72, 153, 0.3)',
              '0 0 12px rgba(236, 72, 153, 0.5)',
              '0 0 8px rgba(236, 72, 153, 0.3)',
            ],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          RETRO CARD
        </motion.h3>

        <motion.p
          className="text-gray-300/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Travel back in time with our synthwave-inspired design. Experience the nostalgia of 80s aesthetics with modern animations and effects.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.5)',
                '0 0 30px rgba(236, 72, 153, 0.7)',
                '0 0 20px rgba(236, 72, 153, 0.5)',
              ],
            }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY NOW
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-pink-300 text-sm font-medium"
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
            HIGH SCORE
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
    background: 'linear-gradient(135deg, #1a0f1e 0%, #0f0f23 100%)',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_16 />
  </div>
);

// Add Google Fonts for Inter and Press Start 2P
const fontLink1 = document.createElement('link');
fontLink1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink1.rel = 'stylesheet';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
fontLink2.rel = 'stylesheet';
document.head.appendChild(fontLink2);
