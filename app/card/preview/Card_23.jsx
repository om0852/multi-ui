// React Live compatible Card_23 component with inline styles and global dependencies
const { useState } = React;
const { motion } = window.framerMotion;

const ShimmerEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute w-[200%] h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          transform: 'skewX(-20deg)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

const Card_23 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default props
  const props = {
    title: 'Modern UI Design Trends',
    description: 'Discover the latest trends in UI/UX design that will dominate the digital landscape in the coming year.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    btnText: 'Read More'
  };

  const categories = ['Design', 'Technology', 'Trends'];

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
        boxShadow: '0 8px 32px rgba(244, 63, 94, 0.1)',
      }}
    >
      <div className="relative">
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${props.imageUrl})`,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: isHovered ? 'brightness(0.8)' : 'brightness(1)',
              transition: 'all 0.5s ease',
            }}
          />
          <ShimmerEffect isHovered={isHovered} />
        </div>

        <motion.div
          className="absolute top-4 left-4 flex space-x-2"
          animate={isHovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categories.map((category, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium text-white rounded-full"
              style={{
                background: 'rgba(244, 63, 94, 0.9)',
                backdropFilter: 'blur(4px)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
              }}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <motion.span
            animate={isHovered ? { color: '#F43F5E' } : { color: '#9CA3AF' }}
            transition={{ duration: 0.3 }}
          >
            5 min read
          </motion.span>
          <span>•</span>
          <span>2 days ago</span>
        </div>

        <motion.h3
          className="text-xl font-bold text-white"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm line-clamp-3"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.description}
        </motion.p>

        <motion.div
          className="pt-4 flex items-center justify-between"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={props.link}
            className="text-rose-400 font-medium text-sm flex items-center space-x-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{props.btnText}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          <div className="flex items-center space-x-4">
            <motion.button
              className="text-gray-400 hover:text-rose-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.button>
            <motion.button
              className="text-gray-400 hover:text-rose-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </motion.button>
          </div>
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
    background: '#111827',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_23 />
  </div>
);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
