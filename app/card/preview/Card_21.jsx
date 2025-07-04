// React Live compatible Card_21 component with inline styles and global dependencies

const Card_21 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default props
  const props = {
    title: 'Modern Card Design',
    description: 'A sleek and modern card component with smooth hover effects and clean typography. Perfect for showcasing products or articles.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    btnText: 'View Details'
  };

  return (
    <motion.div
      className="relative w-[350px] rounded-xl overflow-hidden bg-white shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.div
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {props.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {props.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['New', 'Featured', 'Trending'].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.a
            href={props.link}
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-medium text-sm cursor-pointer"
            whileHover={{ backgroundColor: '#ea580c' }}
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
        </motion.div>
      </div>

      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div
            className="absolute transform rotate-45 bg-orange-500 text-white text-xs font-bold py-1 right-[-34px] top-[32px] w-[170px] text-center"
          >
            FEATURED
          </div>
        </div>
      </motion.div>
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
    backgroundColor: '#f8fafc',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_21 />
  </div>
);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
