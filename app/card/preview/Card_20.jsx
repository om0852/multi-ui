// React Live compatible Card_20 component with inline styles and global dependencies
const { useState } = React;
const { motion } = window.framerMotion;

const Card_20 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeToggles, setActiveToggles] = useState(new Set([1, 3]));
  
  // Default props
  const props = {
    title: 'Settings Panel',
    description: 'Customize your experience with these settings',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1729&q=80',
    btnText: 'Save Settings'
  };

  const toggleSetting = (id) => {
    setActiveToggles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const settings = [
    { id: 1, name: 'Notifications', description: 'Receive alerts and updates' },
    { id: 2, name: 'Dark Mode', description: 'Enable dark theme' },
    { id: 3, name: 'Auto-Sync', description: 'Sync data automatically' },
    { id: 4, name: 'Sound Effects', description: 'Play interface sounds' },
  ];

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {props.title}
        </motion.h3>

        <motion.p className="text-gray-400 text-sm mb-6">
          {props.description}
        </motion.p>

        <div className="space-y-4">
          {settings.map((setting, i) => (
            <motion.div
              key={setting.id}
              className="flex items-center justify-between"
              initial={false}
              animate={isHovered ? {
                x: 0,
                opacity: 1,
              } : {
                x: 0,
                opacity: 0.9,
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div>
                <div className="text-gray-200 font-medium">{setting.name}</div>
                <div className="text-sm text-gray-500">{setting.description}</div>
              </div>
              <motion.button
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  activeToggles.has(setting.id) ? 'bg-emerald-500' : 'bg-gray-600'
                }`}
                onClick={() => toggleSetting(setting.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute w-4 h-4 bg-white rounded-full top-1"
                  initial={false}
                  animate={{
                    left: activeToggles.has(setting.id) ? '24px' : '4px',
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 pt-4 border-t border-gray-800"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={props.link}
            className="block w-full px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium text-center cursor-pointer"
            whileHover={{
              scale: 1.02,
              backgroundColor: '#059669',
            }}
            whileTap={{ scale: 0.98 }}
          >
            {props.btnText}
          </motion.a>
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
    background: '#0f172a',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  }}>
    <Card_20 />
  </div>
);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
