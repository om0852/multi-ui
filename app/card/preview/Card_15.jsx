
const LeafEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            scale: 0,
            x: '50%',
            y: '50%',
            rotate: 0,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            x: ['50%', `${Math.random() * 200 - 100}%`],
            y: ['50%', `${Math.random() * 200 - 100}%`],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            width: '20px',
            height: '20px',
            background: 'rgba(34, 197, 94, 0.2)',
            clipPath: 'path("M10 0C7 0 5 2 5 5C5 8 7 10 10 10C13 10 15 8 15 5C15 2 13 0 10 0ZM10 2C12 2 13 3 13 5C13 7 12 8 10 8C8 8 7 7 7 5C7 3 8 2 10 2Z")',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const WaveEffect = ({ isHovered }) => {
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
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            background: `radial-gradient(circle at center, rgba(34, 197, 94, ${0.2 - i * 0.05}), transparent 70%)`,
            border: '1px solid rgba(34, 197, 94, 0.1)',
            borderRadius: '16px',
          }}
        />
      ))}
    </motion.div>
  );
};

const VinePattern = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0.1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            width: '2px',
            height: '100%',
            left: `${20 + i * 15}%`,
            transform: `rotate(${Math.sin(i) * 10}deg)`,
            filter: 'blur(1px)',
          }}
        >
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute w-2 h-2 rounded-full bg-green-400"
              style={{
                top: `${30 + j * 20}%`,
                left: '-2px',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.3,
              }}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Card_15 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <motion.div
        className="relative w-full max-w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(20, 83, 45, 0.4))',
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)',
        }}
      >
        <LeafEffect isHovered={isHovered} />
        <WaveEffect isHovered={isHovered} />
        <VinePattern isHovered={isHovered} />

        <div className="relative p-6 space-y-4">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            } : {}}
            transition={{ duration: 1 }}
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
                d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z M16 8L2 22M17.5 15H9"
              />
            </svg>
          </motion.div>

          <motion.h3
            className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300"
            animate={isHovered ? {
              textShadow: [
                '0 0 8px rgba(34, 197, 94, 0.3)',
                '0 0 12px rgba(34, 197, 94, 0.5)',
                '0 0 8px rgba(34, 197, 94, 0.3)',
              ],
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Natural Card
          </motion.h3>

          <motion.p
            className="text-gray-300/80 text-sm leading-relaxed"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Embrace the beauty of nature with our organic design. Watch as leaves dance and vines grow, bringing life to this dynamic card.
          </motion.p>

          <motion.div
            className="pt-4 flex items-center space-x-4"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Grow
            </motion.button>
            <motion.button
              className="px-4 py-2 rounded-lg text-green-300 text-sm font-medium"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(20, 83, 45, 0.2))',
                border: '1px solid rgba(34, 197, 94, 0.2)',
              }}
            >
              Nurture
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1), transparent 60%)',
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
    background: 'linear-gradient(135deg, #065f46 0%, #111827 100%)',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_15 />
  </div>
);

// Add Google Fonts for Inter
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
