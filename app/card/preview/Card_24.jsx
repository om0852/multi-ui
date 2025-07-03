// React Live compatible Card_24 component with inline styles and global dependencies
const { useState } = React;
const { motion } = window.framerMotion;

const GlowEffect = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
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
              background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent)',
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

const Card_24 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default props
  const props = {
    title: 'Premium Membership',
    description: 'Unlock exclusive content and features with our premium membership plan. Get access to all our resources and more!',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    btnText: 'Get Started',
    featured: false
  };

  return (
    <motion.div
      className="relative rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden w-[380px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8))',
        boxShadow: '0 8px 32px rgba(14, 165, 233, 0.1)',
        border: '1px solid rgba(14, 165, 233, 0.2)',
      }}
    >
      <GlowEffect isHovered={isHovered} />

      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: `url(${props.imageUrl})`,
            }}
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              animate={isHovered ? {
                y: -2,
                color: '#0284C7',
              } : {
                y: 0,
                color: '#FFFFFF',
              }}
              transition={{ duration: 0.3 }}
            >
              {props.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4 line-clamp-2"
              animate={isHovered ? { opacity: 0.9 } : { opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {props.description}
            </motion.p>

            <motion.a
              href={props.link}
              className="inline-block py-2 px-6 rounded-lg bg-sky-500 text-white font-medium cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {props.btnText}
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05), transparent 70%)',
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
    <Card_24 />
  </div>
);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
