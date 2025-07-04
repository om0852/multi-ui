
const animations = {
  leaf: {
    initial: { 
      opacity: 0,
      x: -100,
      rotate: -20,
      scale: 0.9,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: -100,
      rotate: -20,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    },
  },
  growth: {
    initial: { 
      opacity: 0,
      scale: 0.6,
      y: 50,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.6,
      y: 50,
      transition: {
        duration: 0.5
      }
    },
  },
  breeze: {
    initial: { 
      opacity: 0,
      x: 100,
      skewX: 10,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: [10, -5, 3, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: 100,
      skewX: 10,
      transition: {
        duration: 0.5
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative py-3 px-6 rounded-full
        bg-gradient-to-br from-green-500 to-emerald-600
        text-white font-medium
        shadow-lg shadow-green-500/20
        border border-green-400/50
        overflow-hidden
        transform transition-all duration-300
        hover:shadow-xl hover:shadow-green-500/30
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${className || ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_60%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">🌿</span>
      </span>
    </motion.button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "leaf",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed p-6
    bg-gradient-to-br from-green-50 to-emerald-50
    border-l-2 border-green-200
    shadow-2xl shadow-green-900/5
    ${position === 'left' ? 'left-0 top-0 bottom-0 w-96' :
      position === 'right' ? 'right-0 top-0 bottom-0 w-96' :
      position === 'top' ? 'top-0 left-0 right-0 h-96' :
      'bottom-0 left-0 right-0 h-auto'}`;

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses} transform-gpu ${className || ''}`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzIyYzU1ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-40" />
        <div className="absolute top-4 right-4">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full
              bg-white text-green-600
              shadow-md shadow-green-900/5
              hover:shadow-lg hover:text-green-700
              transform transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-green-500"
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
  const [animationType, setAnimationType] = useState('leaf');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'leaf', 'growth', 'breeze'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  const getAnimationLabel = (type) => {
    switch(type) {
      case 'leaf': return 'Falling Leaf';
      case 'growth': return 'Plant Growth';
      case 'breeze': return 'Gentle Breeze';
      default: return type;
    }
  };

  const getAnimationEmoji = (type) => {
    switch(type) {
      case 'leaf': return '🍃';
      case 'growth': return '🌱';
      case 'breeze': return '💨';
      default: return '';
    }
  };

  const natureFacts = [
    "🌳 A single tree can absorb as much as 48 pounds of carbon dioxide per year.",
    "🌊 The ocean produces over half of the world's oxygen.",
    "🦋 Butterflies taste with their feet.",
    "🌿 The Amazon Rainforest is home to about 10% of all known species.",
    "🐝 Honey never spoils. You can eat 3000-year-old honey!",
    "🌎 Earth is the only planet not named after a god.",
    "🌻 Sunflowers can clean radioactive waste from the soil.",
    "🦉 Owls can rotate their necks 270 degrees."
  ];

  const getRandomFact = () => {
    return natureFacts[Math.floor(Math.random() * natureFacts.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Nature's Drawer
          </h1>
          <p className="text-green-700 max-w-2xl mx-auto">
            Experience the organic beauty of nature with these smooth, flowing animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 p-6 rounded-2xl border-2 border-green-100 shadow-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              ANIMATION STYLE
            </h2>
            <div className="flex flex-wrap gap-3">
              {animationTypes.map(type => (
                <motion.button
                  key={type}
                  onClick={() => setAnimationType(type)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2
                    ${animationType === type 
                      ? 'bg-green-600 text-white border-green-700 shadow-md' 
                      : 'bg-white text-green-700 border-green-200 hover:bg-green-50 hover:border-green-300'
                    }`}
                >
                  {getAnimationEmoji(type)} {getAnimationLabel(type)}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="bg-white/70 p-6 rounded-2xl border-2 border-green-100 shadow-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              POSITION
            </h2>
            <div className="flex flex-wrap gap-3">
              {positions.map(pos => (
                <motion.button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2
                    ${position === pos 
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-md' 
                      : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300'
                    }`}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <Drawer>
            <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
              Open Nature Drawer
            </DrawerTrigger>
            <DrawerContent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              animationType={animationType}
              position={position}
            >
              <div className="space-y-6 p-4">
                <div className="text-center">
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                    <span className="text-3xl">
                      {animationType === 'leaf' ? '🍃' : 
                       animationType === 'growth' ? '🌱' : '💨'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-green-800">
                    {getAnimationLabel(animationType)}
                  </h2>
                  <p className="text-green-600 mt-2">
                    {animationType === 'leaf' && 'Smooth, flowing animation like a leaf on the wind'}
                    {animationType === 'growth' && 'Gentle growth animation inspired by nature'}
                    {animationType === 'breeze' && 'Light, airy movement like a summer breeze'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/70 rounded-xl border border-green-100 shadow-sm">
                    <h3 className="font-semibold text-green-800">Nature Fact</h3>
                    <p className="text-green-700 text-sm mt-1">{getRandomFact()}</p>
                  </div>
                  
                  <div className="p-4 bg-white/70 rounded-xl border border-green-100 shadow-sm">
                    <h3 className="font-semibold text-green-800">Current Settings</h3>
                    <p className="text-green-700 text-sm mt-1">
                      Animation: {getAnimationLabel(animationType)}<br />
                      Position: {position.charAt(0).toUpperCase() + position.slice(1)}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/70 rounded-xl border border-green-100 shadow-sm">
                    <h3 className="font-semibold text-green-800">Did You Know?</h3>
                    <p className="text-green-700 text-sm mt-1">
                      The patterns in nature follow mathematical principles found in the Fibonacci sequence.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 mt-6 border-t border-green-200">
                  <motion.button
                    onClick={() => setIsDrawerOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2
                      bg-white text-green-700
                      border-2 border-green-200
                      rounded-lg
                      text-sm font-medium
                      shadow-sm
                      hover:bg-green-50 hover:border-green-300
                      transition-all duration-200"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={() => alert("Nature is amazing! 🌿\n\nThanks for exploring with us.")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2
                      bg-gradient-to-r from-green-500 to-emerald-600 text-white
                      border-2 border-green-600
                      rounded-lg
                      text-sm font-medium
                      shadow-md shadow-green-500/20
                      hover:shadow-lg hover:shadow-green-500/30
                      transition-all duration-200"
                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="text-center text-green-600 text-sm">
          <p>🌱 Try different animations and positions to see the natural flow! 🌿</p>
          <p className="mt-1 text-green-500">
            Current: {getAnimationLabel(animationType)} • {position.charAt(0).toUpperCase() + position.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
