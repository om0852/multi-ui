// React Live compatible Card_22 component with inline styles and global dependencies

const WavePattern = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 20}% ${50 + (i - 1) * 20}%, rgba(99, 102, 241, 0.1), transparent 70%)`,
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

const Card_22 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default props
  const props = {
    title: 'Ocean Waves',
    description: 'Experience the calming effect of ocean waves with this interactive card. Hover to see the wave animation.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    btnText: 'Explore More'
  };

  return (
    <motion.div
      className="relative w-[350px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
      }}
    >
      <WavePattern isHovered={isHovered} />

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-2"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.description}
        </motion.p>

        <motion.a
          href={props.link}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium text-sm cursor-pointer"
          whileHover={{
            backgroundColor: '#4F46E5',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {props.btnText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1), transparent 70%)',
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
    background: '#0f172a',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_22 />
  </div>
);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
