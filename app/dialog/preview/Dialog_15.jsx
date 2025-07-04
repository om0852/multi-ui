
const animationStyles = {
  hologram: {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 1.2, opacity: 0, y: -20 },
    transition: { type: "spring", damping: 15 }
  },
  warpSpeed: {
    initial: { scale: 2, opacity: 0, rotate: 45 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: -45 },
    transition: { type: "spring", damping: 20 }
  },
  teleport: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4 }
  },
  quantum: {
    initial: { x: -300, opacity: 0, skewX: "45deg" },
    animate: { x: 0, opacity: 1, skewX: "0deg" },
    exit: { x: 300, opacity: 0, skewX: "-45deg" },
    transition: { type: "spring", damping: 15 }
  }
};

function StyledDialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
  className,
}) {
  const animation = animationStyles[animationType];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              {...animation}
              className={`relative bg-black/80 border border-cyan-500/30 rounded-lg
                w-full max-w-lg overflow-hidden backdrop-blur-xl max-h-[90vh] overflow-y-auto ${className || ""}`}
            >
              {/* Holographic effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSg2LCAxODIsIDIxMiwgMC4yKSIvPjwvc3ZnPg==')] opacity-20" />
              
              {/* Scanning line effect */}
              <motion.div
                animate={{
                  y: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              />

              {/* Content container */}
              <div className="relative p-4 sm:p-6 md:p-8">
                <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                    bg-cyan-950 hover:bg-cyan-900 rounded text-cyan-500
                    transition-colors border border-cyan-500/30 text-lg sm:text-xl"
                >
                  ✕
                </motion.button>
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function StyledDialogTrigger({ children, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 sm:px-8 py-2 sm:py-3 bg-black/80 text-cyan-500 font-medium rounded
        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 
        transition-all duration-300 border border-cyan-500/30
        backdrop-blur-xl relative overflow-hidden group text-sm sm:text-base ${className || ""}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

function StyledDialogHeader({ children, className }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mb-4 sm:mb-6 ${className || ""}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500 flex items-center gap-2">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse" />
        {children}
      </h2>
    </motion.div>
  );
}

function StyledDialogDescription({ children, className }) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`text-xs sm:text-sm md:text-base text-cyan-100 leading-relaxed ${className || ""}`}
    >
      {children}
    </motion.p>
  );
}

function StyledDialogFooter({ children, className }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

function getTechInfo(type) {
  switch(type) {
    case 'hologram':
      return {
        title: 'Holographic Interface',
        description: 'Advanced holographic display system activated. All systems functioning at optimal levels.',
        icon: '👁️',
        action: 'Engage'
      };
    case 'warpSpeed':
      return {
        title: 'Warp Drive Online',
        description: 'Warp drive systems are online and ready for faster-than-light travel. Coordinates locked in.',
        icon: '🚀',
        action: 'Initiate Warp'
      };
    case 'teleport':
      return {
        title: 'Teleportation Ready',
        description: 'Quantum teleportation matrix is calibrated and ready for matter transmission.',
        icon: '✨',
        action: 'Beam Up'
      };
    case 'quantum':
    default:
      return {
        title: 'Quantum Computer',
        description: 'Quantum processing unit is online. Ready to solve complex calculations instantly.',
        icon: '⚛️',
        action: 'Compute'
      };
  }
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("hologram");
  
  const tech = getTechInfo(animationType);

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen flex flex-col items-center justify-center space-y-6 sm:space-y-8 
      bg-gradient-to-br from-gray-900 to-black">
      
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium rounded
              ${animationType === type 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50'} 
              transition-colors`}
            onClick={() => setAnimationType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Activate System
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <div className="text-center">
            <div className="text-5xl mb-3">{tech.icon}</div>
            <StyledDialogHeader>
              {tech.title}
            </StyledDialogHeader>
            <StyledDialogDescription>
              {tech.description}
            </StyledDialogDescription>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded
                  transition-colors text-sm sm:text-base border border-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("System activated!");
                }}
                className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded
                  transition-colors text-sm sm:text-base border border-cyan-500/30"
              >
                {tech.action}
              </button>
            </StyledDialogFooter>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

render(<DialogExample />);
