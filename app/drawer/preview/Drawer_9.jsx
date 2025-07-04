
const animations = {
  hologram: {
    initial: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px) brightness(2)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px) brightness(2)",
      transition: {
        duration: 0.4
      }
    },
  },
  scan: {
    initial: { 
      opacity: 0,
      y: "100%",
      clipPath: "inset(100% 0 0 0)",
    },
    animate: { 
      opacity: 1,
      y: "0%",
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
      }
    },
    exit: { 
      opacity: 0,
      y: "100%",
      clipPath: "inset(100% 0 0 0)",
      transition: {
        duration: 0.4
      }
    },
  },
  glitch: {
    initial: { 
      opacity: 0,
      x: 50,
      skewX: 10,
      filter: "hue-rotate(90deg)",
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: [10, -5, 3, 0],
      filter: "hue-rotate(0deg)",
      transition: {
        duration: 0.5,
        times: [0, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: 50,
      skewX: 10,
      filter: "hue-rotate(90deg)",
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
      whileHover={{ scale: 1.05, filter: "hue-rotate(30deg)" }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-lg
        bg-black
        text-cyan-400 font-mono
        border border-cyan-500/50
        shadow-[0_0_20px_rgba(34,211,238,0.3)]
        overflow-hidden
        transform transition-all duration-300
        hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
        ${className || ''}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.3),transparent_60%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">⚡</span>
      </span>
    </motion.button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "hologram",
  position = "right",
  className,
}) {
  const animation = animations[animationType];

  const positionClasses = `fixed p-6
    bg-black/90 backdrop-blur-xl
    border border-cyan-500/30
    shadow-[0_0_50px_rgba(34,211,238,0.2)]
    ${position === 'left' ? 'left-0 top-0 bottom-0 w-96' :
      position === 'right' ? 'right-0 top-0 bottom-0 w-96' :
      position === 'top' ? 'top-0 left-0 right-0 h-96' :
      'bottom-0 left-0 right-0 h-auto'}`;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cyan-900/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`${positionClasses} transform-gpu ${className || ''}`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_50%)]" />
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg
                  bg-black/50 text-cyan-400
                  border border-cyan-500/30
                  shadow-[0_0_10px_rgba(34,211,238,0.2)]
                  hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                  transform transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
            <div className="relative h-full overflow-y-auto text-cyan-400 font-mono">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('hologram');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'hologram', 'scan', 'glitch'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  const getAnimationLabel = (type) => {
    switch(type) {
      case 'hologram': return 'Hologram';
      case 'scan': return 'Scan';
      case 'glitch': return 'Glitch';
      default: return type;
    }
  };

  const getAnimationEmoji = (type) => {
    switch(type) {
      case 'hologram': return '👁️';
      case 'scan': return '📡';
      case 'glitch': return '🌌';
      default: return '';
    }
  };

  const techQuotes = [
    "The future is already here – it's just not evenly distributed. - William Gibson",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Technology is a useful servant but a dangerous master. - Christian Lous Lange",
    "The Web as I envisaged it, we have not seen it yet. - Tim Berners-Lee",
    "The advance of technology is based on making it fit in so that you don't really even notice it. - Bill Gates"
  ];

  const getRandomQuote = () => {
    return techQuotes[Math.floor(Math.random() * techQuotes.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          >
            Holographic Interface
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="text-cyan-300/80 max-w-2xl mx-auto font-mono"
          >
            Experience the future of UI with our advanced holographic drawer system
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
          >
            <h2 className="text-xl font-bold text-cyan-300 mb-4 font-mono">
              ANIMATION STYLE
            </h2>
            <div className="flex flex-wrap gap-2">
              {animationTypes.map(type => (
                <motion.button
                  key={type}
                  onClick={() => setAnimationType(type)}
                  whileHover={{ y: -2, boxShadow: '0 0 15px rgba(34,211,238,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-200 border
                    ${animationType === type 
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                      : 'bg-black/30 text-cyan-400/70 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40'
                    }`}
                >
                  {getAnimationEmoji(type)} {getAnimationLabel(type)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
          >
            <h2 className="text-xl font-bold text-cyan-300 mb-4 font-mono">
              POSITION
            </h2>
            <div className="flex flex-wrap gap-2">
              {positions.map(pos => (
                <motion.button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  whileHover={{ y: -2, boxShadow: '0 0 15px rgba(34,211,238,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-200 border
                    ${position === pos 
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                      : 'bg-black/30 text-cyan-400/70 border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40'
                    }`}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          className="flex justify-center mb-12"
        >
          <Drawer>
            <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
              INITIALIZE HOLOGRAM
            </DrawerTrigger>
            <DrawerContent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              animationType={animationType}
              position={position}
            >
              <div className="space-y-6 p-2">
                <div className="text-center">
                  <div className="inline-block p-3 bg-cyan-900/30 rounded-full mb-4 border border-cyan-500/30">
                    <span className="text-3xl">
                      {animationType === 'hologram' ? '👁️' : 
                       animationType === 'scan' ? '📡' : '🌌'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-cyan-300 mb-2 font-mono">
                    {getAnimationLabel(animationType)} MODE
                  </h2>
                  <p className="text-cyan-400/80 text-sm">
                    {animationType === 'hologram' && 'Holographic projection initialized'}
                    {animationType === 'scan' && 'Scanning complete. Systems nominal.'}
                    {animationType === 'glitch' && 'Glitch effect engaged. Systems stable.'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
                    <h3 className="font-bold text-cyan-300 font-mono">System Status</h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-cyan-400/70">Animation:</span>
                        <span className="text-cyan-300 font-mono">{getAnimationLabel(animationType)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyan-400/70">Position:</span>
                        <span className="text-cyan-300 font-mono">{position.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyan-400/70">Power:</span>
                        <span className="text-green-400 font-mono">100%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
                    <h3 className="font-bold text-cyan-300 font-mono mb-2">Quote of the Day</h3>
                    <p className="text-cyan-400/80 text-sm italic">"{getRandomQuote()}"</p>
                  </div>
                  
                  <div className="p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
                    <h3 className="font-bold text-cyan-300 font-mono mb-2">Tech Specs</h3>
                    <ul className="text-cyan-400/80 text-sm space-y-1">
                      <li>• React 18 + Framer Motion</li>
                      <li>• Hardware-accelerated animations</li>
                      <li>• Responsive design</li>
                      <li>• Zero dependencies</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pt-4 mt-6 border-t border-cyan-500/20">
                  <motion.button
                    onClick={() => setIsDrawerOpen(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2
                      bg-cyan-500/10 text-cyan-300
                      border border-cyan-500/30
                      rounded-md
                      text-sm font-mono
                      hover:bg-cyan-500/20 hover:border-cyan-500/50
                      transition-all duration-200"
                  >
                    DISMISS
                  </motion.button>
                  <motion.button
                    onClick={() => alert("SYSTEM: Holographic interface confirmed.\n\nThank you for experiencing the future of UI.")}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(34,211,238,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2
                      bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                      border border-cyan-400/50
                      rounded-md
                      text-sm font-mono
                      shadow-[0_0_15px_rgba(34,211,238,0.2)]
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                      transition-all duration-200"
                  >
                    CONFIRM
                  </motion.button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
          className="text-center text-cyan-500/50 text-sm font-mono"
        >
          <p>SYSTEM: Ready for holographic projection</p>
          <p className="mt-1">Current mode: {getAnimationLabel(animationType)} • {position.toUpperCase()}</p>
        </motion.div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
