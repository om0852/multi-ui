

const LeafParticles = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3"
          style={{
            left: `${20 + i * 15}%`,
            top: '-20%',
          }}
          animate={{
            y: ['0%', '500%'],
            x: ['0%', `${(i % 2 === 0 ? 100 : -100)}%`],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-emerald-500/30"
            fill="currentColor"
          >
            <path d="M21.88 2.15L20.68 2.55L18.2 3.33C18.2 3.33 16.36 3.91 15.87 3.9C15.38 3.89 14.31 3.28 13.99 3.12C13.67 2.96 10.8 2.36 9.36 2.41C7.92 2.46 6.5 2.88 6.5 2.88L4.75 3.5L2.13 4.35L2 4.44L2.06 4.75L2.15 4.71C2.15 4.71 3.87 4.97 4.41 5.12C4.94 5.27 5.23 5.56 5.23 5.56C5.23 5.56 4.57 5.9 4.17 6.19C3.77 6.47 3.5 6.88 3.5 6.88L3.76 7.15C3.76 7.15 4.77 6.86 5.14 6.81C5.51 6.76 6.11 6.81 6.11 6.81C6.11 6.81 5.83 7.05 5.67 7.37C5.5 7.68 5.5 8.15 5.5 8.15L5.85 8.23C5.85 8.23 6.93 7.63 7.32 7.46C7.71 7.29 8.34 7.11 8.34 7.11C8.34 7.11 8.39 7.46 8.4 7.69C8.4 7.92 8.4 8.15 8.4 8.15C8.4 8.15 9.13 7.81 9.5 7.63C9.87 7.46 10.39 7.11 10.39 7.11L10.63 7.34C10.63 7.34 10.07 7.92 9.88 8.27C9.69 8.62 9.68 8.89 9.68 8.89L10.03 8.96L11.44 8.37C11.44 8.37 11.73 8.71 11.87 8.93C12 9.15 12.2 9.74 12.2 9.74L12.43 9.62C12.43 9.62 12.33 8.9 12.33 8.71C12.33 8.52 12.36 8.13 12.36 8.13C12.36 8.13 13.45 7.93 13.87 7.83C14.29 7.73 14.87 7.56 14.87 7.56L14.87 7.92C14.87 7.92 14.47 8.55 14.34 8.86C14.21 9.17 14.11 9.63 14.11 9.63L14.44 9.71C14.44 9.71 15.56 8.89 16.17 8.5C16.77 8.11 17.3 7.8 17.3 7.8C17.3 7.8 17.49 8.45 17.51 8.73C17.53 9.01 17.53 9.33 17.53 9.33L17.84 9.41C17.84 9.41 18.68 8.77 19.06 8.41C19.44 8.04 19.87 7.45 19.87 7.45L20.1 7.57C20.1 7.57 19.85 8.3 19.75 8.58C19.65 8.86 19.51 9.21 19.51 9.21L19.87 9.29C19.87 9.29 21.11 8.25 21.37 8.03C21.63 7.81 22 7.34 22 7.34L22 6.87C22 6.87 21.03 7.21 20.6 7.32C20.17 7.43 19.3 7.56 19.3 7.56C19.3 7.56 20.5 6.88 21.07 6.53C21.63 6.19 22 5.87 22 5.87L22 5.39C22 5.39 20.14 5.88 19.65 6.01C19.16 6.14 18.16 6.38 18.16 6.38L21.05 5.15L22 4.71V4.23L21.88 2.15Z" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};

const FlowingWave = ({ isHovered }) => {
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
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 20}% ${50 + (i - 1) * 20}%, rgba(16, 185, 129, 0.1), transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

const Card_18 = () => {
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
        boxShadow: '0 4px 30px rgba(16, 185, 129, 0.1)',
      }}
    >
      <LeafParticles isHovered={isHovered} />
      <FlowingWave isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-6 h-6 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-medium text-emerald-900"
          style={{ fontFamily: '"Playfair Display", serif' }}
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Natural Growth
        </motion.h3>

        <motion.p
          className="text-emerald-700/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Experience the harmony of nature through organic design. Watch as elements flow and grow with life-like animations.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-emerald-700 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05), transparent 70%)',
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
    background: '#f0fdf4',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_18 />
  </div>
);

// Add Google Fonts
const fontLink1 = document.createElement('link');
fontLink1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink1.rel = 'stylesheet';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap';
fontLink2.rel = 'stylesheet';
document.head.appendChild(fontLink2);
