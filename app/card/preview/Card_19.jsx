
const HologramEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(${120 * i}deg,
                transparent 0%,
                rgba(124, 58, 237, 0.1) 25%,
                rgba(236, 72, 153, 0.1) 50%,
                rgba(34, 211, 238, 0.1) 75%,
                transparent 100%
              )
            `,
            filter: 'blur(2px)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

const GlowingLines = ({ isHovered }) => {
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
            background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), transparent)',
            filter: 'blur(1px)',
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
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

const Card_19 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default props
  const props = {
    title: 'HOLOGRAPHIC',
    description: 'Step into the future with our holographic interface. Experience the next generation of UI with stunning visual effects and smooth animations.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    btnText: 'ENTER PORTAL'
  };

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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(124, 58, 237, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <HologramEffect isHovered={isHovered} />
      <GlowingLines isHovered={isHovered} />

      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center"
          animate={isHovered ? {
            rotate: [0, 90],
            scale: [1, 1.1, 1],
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
              strokeWidth={1.5}
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          animate={isHovered ? {
            textShadow: [
              '0 0 8px rgba(124, 58, 237, 0.3)',
              '0 0 12px rgba(124, 58, 237, 0.5)',
              '0 0 8px rgba(124, 58, 237, 0.3)',
            ],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {props.title}
        </motion.h3>

        <motion.p
          className="text-gray-300/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.description}
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={props.link}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: [
                '0 0 20px rgba(124, 58, 237, 0.5)',
                '0 0 30px rgba(124, 58, 237, 0.7)',
                '0 0 20px rgba(124, 58, 237, 0.5)',
              ],
            }}
            whileTap={{ scale: 0.95 }}
          >
            {props.btnText}
          </motion.a>
          <motion.button
            className="px-4 py-2 rounded-lg text-violet-300 text-sm font-medium"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 8px rgba(124, 58, 237, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(124, 58, 237, 0.1)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
            }}
          >
            Interface
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1), transparent 70%)',
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
    background: '#0f0f1a',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_19 />
  </div>
);

// Add Google Fonts
const fontLink1 = document.createElement('link');
fontLink1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink1.rel = 'stylesheet';
document.head.appendChild(fontLink1);

const fontLink2 = document.createElement('link');
fontLink2.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
fontLink2.rel = 'stylesheet';
document.head.appendChild(fontLink2);
