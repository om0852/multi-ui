
const animations = {
  bounce: {
    initial: { 
      opacity: 0,
      scale: 0.3,
      y: 100,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        type: "spring",
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.3,
      y: 100,
      transition: {
        duration: 0.3
      }
    },
  },
  elastic: {
    initial: { 
      opacity: 0,
      scale: 0.8,
      x: 300,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      x: 300,
      transition: {
        duration: 0.3
      }
    },
  },
  wobble: {
    initial: { 
      opacity: 0,
      rotate: -10,
      y: 100,
    },
    animate: { 
      opacity: 1,
      rotate: [10, -8, 6, -4, 2, 0],
      y: 0,
      transition: {
        duration: 1,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      rotate: 10,
      y: 100,
      transition: {
        duration: 0.3
      }
    },
  },
};

function Drawer({ children, className }) {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
}

function DrawerTrigger({ children, onClick, className }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-full
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        text-white font-medium
        shadow-lg shadow-purple-500/30
        border-2 border-white
        transform transition-all duration-200
        hover:shadow-xl hover:shadow-purple-500/40
        focus:outline-none focus:ring-4 focus:ring-purple-500/30
        ${className || ''}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        <span className="text-xl">✨</span>
      </span>
    </motion.button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "bounce",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed p-6
    bg-gradient-to-br from-white via-purple-50 to-pink-50
    border-l-4 border-purple-500
    ${position === 'left' ? 'left-0 top-0 bottom-0 w-96' :
      position === 'right' ? 'right-0 top-0 bottom-0 w-96' :
      position === 'top' ? 'top-0 left-0 right-0 h-96' :
      'bottom-0 left-0 right-0 h-auto'}
    shadow-2xl shadow-purple-500/20`;

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses} transform-gpu ${className || ''}`}
      >
        <div className="absolute top-4 right-4">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full
              bg-white text-purple-500
              shadow-md shadow-purple-500/20
              hover:shadow-lg hover:shadow-purple-500/30
              transform transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </motion.button>
        </div>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('bounce');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'bounce', 'elastic', 'wobble'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  const getAnimationEmoji = (type) => {
    switch(type) {
      case 'bounce': return '🦘';
      case 'elastic': return '🎯';
      case 'wobble': return '🦑';
      default: return '✨';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
            Fun & Playful Drawer
          </h1>
          <p className="text-purple-600 max-w-2xl mx-auto">
            Experience delightful animations and a cheerful interface that brings joy to your users!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-white"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <span>Animation Type</span>
              <span className="text-2xl">🎨</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {animationTypes.map(type => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnimationType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1
                    ${animationType === type 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
                      : 'bg-white text-purple-600 border-2 border-purple-100 hover:bg-purple-50'
                    }`}
                >
                  {getAnimationEmoji(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-white"
          >
            <h2 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
              <span>Position</span>
              <span className="text-2xl">📌</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {positions.map(pos => (
                <motion.button
                  key={pos}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPosition(pos)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${position === pos 
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md' 
                      : 'bg-white text-indigo-600 border-2 border-indigo-100 hover:bg-indigo-50'
                    }`}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Drawer>
            <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
              Open Fun Drawer
            </DrawerTrigger>
            <DrawerContent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              animationType={animationType}
              position={position}
            >
              <div className="space-y-6 pt-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    {animationType === 'bounce' && 'Bouncy Fun! 🎈'}
                    {animationType === 'elastic' && 'Elastic Magic! 🎯'}
                    {animationType === 'wobble' && 'Wobbly Time! 🦑'}
                  </h2>
                  <p className="mt-2 text-purple-600">
                    {animationType === 'bounce' && 'Bounce along with our playful interface!'}
                    {animationType === 'elastic' && 'Experience the snappy elastic animations!'}
                    {animationType === 'wobble' && 'Wiggle and wobble with delight!'}
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {['🌟', '🎨', '🎉', '🌈', '✨'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-4 rounded-xl bg-white shadow-lg border-2 border-white hover:border-purple-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{emoji}</span>
                        <div>
                          <h3 className="font-bold text-purple-700">
                            {['Awesome Feature', 'Playful Element', 'Fun Component', 'Delightful UI', 'Joyful Design'][i]}
                          </h3>
                          <p className="text-sm text-purple-500">
                            {[
                              'Makes users smile',
                              'Brings joy to interfaces',
                              'Enhances engagement',
                              'Adds personality',
                              'Creates delight'
                            ][i]}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-purple-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2 rounded-full text-purple-600 hover:text-purple-700 font-medium transition-colors border-2 border-purple-100 hover:border-purple-200"
                  >
                    Maybe Later
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert("Yay! 🎉\n\nYou've discovered the magic of playful UI!")}
                    className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-md shadow-purple-500/30"
                  >
                    Let's Play! 🚀
                  </motion.button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center text-purple-500 text-sm"
        >
          <p>✨ Try different animations and positions to see the magic! ✨</p>
          <p className="mt-1 text-purple-400">Current: {animationType} animation • {position} position</p>
        </motion.div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
