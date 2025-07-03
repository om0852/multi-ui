const InkEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0.1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: `radial-gradient(circle at ${50 + (i - 1) * 20}% ${50 + (i - 1) * 20}%, rgba(0, 0, 0, 0.1), transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

const BrushStroke = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute h-px w-full top-[20%]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)',
        }}
        animate={isHovered ? {
          scaleX: [0, 1, 1],
          opacity: [0, 1, 0],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </motion.div>
  );
};

const Card_17 = () => {
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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <InkEffect isHovered={isHovered} />
      <BrushStroke isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-medium text-gray-800"
          style={{ fontFamily: '"Noto Serif", serif' }}
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Zen Simplicity
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Embrace the beauty of minimalism. Find peace in clean design and subtle animations that enhance without overwhelming.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-gray-600 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.03), transparent 70%)',
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
    background: '#f8f9fa',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_17 />
  </div>
);

// Add Google Fonts
const fontLink1 = document.createElement('link');
fontLink1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink1.rel = 'stylesheet';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600;700&display=swap';
fontLink2.rel = 'stylesheet';
document.head.appendChild(fontLink2);
