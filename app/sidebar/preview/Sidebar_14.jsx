
const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { 
      id: 'home', 
      icon: 'home', 
      label: 'Home', 
      color: '#FF00FF' 
    },
    { 
      id: 'profile', 
      icon: 'user', 
      label: 'Profile', 
      color: '#00FFFF' 
    },
    { 
      id: 'messages', 
      icon: 'mail', 
      label: 'Messages', 
      color: '#FF00AA', 
      notifications: 3 
    },
    { 
      id: 'code', 
      icon: 'code', 
      label: 'Code', 
      color: '#00FF00' 
    },
    { 
      id: 'analytics', 
      icon: 'chart', 
      label: 'Analytics', 
      color: '#FF3300' 
    },
    { 
      id: 'notifications', 
      icon: 'bell', 
      label: 'Alerts', 
      color: '#FFFF00', 
      notifications: 5 
    },
    { 
      id: 'settings', 
      icon: 'cog', 
      label: 'Settings', 
      color: '#00FF99' 
    },
  ];

  // Icon mapping
  const getIcon = (iconName, isActive = false) => {
    const iconColor = isActive ? 'currentColor' : 'currentColor';
    const icons = {
      home: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      user: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      mail: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      code: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      chart: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bell: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      cog: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      search: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative min-h-screen bg-gray-950 text-white"
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
      }}
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-4 top-8 bg-cyan-500 rounded-full p-2 text-black shadow-lg hover:shadow-cyan-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Logo */}
      <div className="flex items-center p-4 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          }}
        >
          <motion.div
            animate={{
              boxShadow: ['0 0 20px rgba(0, 255, 255, 0.5)', '0 0 40px rgba(0, 255, 255, 0.8)', '0 0 20px rgba(0, 255, 255, 0.5)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-xl"
          />
          <span className="relative text-2xl font-bold text-black">N</span>
        </motion.div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-4"
            >
              <h1 className="text-xl font-bold text-cyan-500">NEON</h1>
              <p className="text-xs text-cyan-300">CYBERPUNK v2.0</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="relative px-4 mb-8">
        <div className="absolute left-7 top-1/2 -translate-y-1/2">
          {getIcon('search')}
        </div>
        <input
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className="w-full bg-gray-900/50 rounded-xl py-3 pl-12 pr-4 text-sm text-cyan-500 placeholder-cyan-700 border border-cyan-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.1)',
          }}
        />
      </div>

      {/* Menu Items */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            className={`relative w-full flex items-center rounded-xl p-3 transition-all ${
              activeItem === item.id
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Neon Glow Background */}
            <AnimatePresence>
              {(activeItem === item.id || hoveredItem === item.id) && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    boxShadow: `0 0 20px ${item.color}50`,
                    border: `1px solid ${item.color}50`,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
              className="relative"
              animate={{
                color: activeItem === item.id ? item.color : undefined,
              }}
            >
              {getIcon(item.icon, activeItem === item.id)}
            </motion.div>

            {/* Label */}
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 text-sm font-medium"
                  style={{
                    color: activeItem === item.id ? item.color : undefined,
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            {item.notifications && (
              <motion.div
                className={`ml-auto ${!isExpanded && 'mr-0'} px-2 py-1 rounded-full text-xs`}
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                  border: `1px solid ${item.color}50`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.notifications}
              </motion.div>
            )}
          </motion.button>
        ))}
      </nav>

      {/* User Profile */}
      <motion.div
        className="absolute bottom-4 left-4 right-4"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="relative p-4 rounded-xl bg-gray-900 cursor-pointer"
          whileHover={{ y: -2 }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
            border: '1px solid rgba(0, 255, 255, 0.1)',
          }}
        >
          <div className="relative flex items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ['0 0 20px rgba(0, 255, 255, 0.5)', '0 0 40px rgba(0, 255, 255, 0.8)', '0 0 20px rgba(0, 255, 255, 0.5)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://ui-avatars.com/api/?background=0D9488&color=fff"
                alt="Profile"
                className="relative w-10 h-10 rounded-full border-2 border-cyan-500"
              />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  <div className="text-sm font-medium text-cyan-500">CyberUser</div>
                  <div className="text-xs text-cyan-700">Level 42</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Neon Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Card {item}</h3>
                <p className="text-gray-400 text-sm">
                  This is a sample card with some content. Hover to see the border glow effect.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

render(<App />);
