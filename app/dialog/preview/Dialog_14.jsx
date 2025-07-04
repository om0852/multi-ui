const animationStyles = {
  bubble: {
    initial: { scale: 0.3, y: 100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 1.2, y: -50, opacity: 0 },
    transition: { type: "spring", damping: 8 }
  },
  reaction: {
    initial: { scale: 1.5, rotate: -10, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.5, rotate: 10, opacity: 0 },
    transition: { type: "spring", damping: 12 }
  },
  dissolve: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
    transition: { duration: 0.4 }
  },
  catalyst: {
    initial: { x: -100, y: 50, rotate: -30, opacity: 0 },
    animate: { x: 0, y: 0, rotate: 0, opacity: 1 },
    exit: { x: 100, y: -50, rotate: 30, opacity: 0 },
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
            className="fixed inset-0 bg-emerald-900/30 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              {...animation}
              className={`relative bg-white rounded-lg w-full max-w-[90%] sm:max-w-md md:max-w-lg overflow-hidden overflow-y-auto max-h-[90vh] ${className || ""}`}
            >
              {/* Lab glassware effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white/90" />
              
              {/* Bubbling effect */}
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-200 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-0 left-2/4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-300 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-0 left-3/4 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-100 rounded-full"
                />
              </div>

              {/* Content container */}
              <div className="relative p-4 sm:p-6">
                <div className="absolute top-0 left-0 w-12 sm:w-16 h-0.5 bg-emerald-500 rounded-full" />
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-0.5 bg-emerald-500 rounded-full" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-1 right-1 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                    bg-emerald-100 hover:bg-emerald-200 rounded-full text-emerald-700
                    transition-colors z-10 text-lg sm:text-xl"
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
      className={`px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-400 to-green-500
        text-white font-medium rounded-lg shadow-lg 
        hover:shadow-emerald-500/30 transition-all duration-300
        border border-emerald-600/20 text-sm sm:text-base ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

function StyledDialogHeader({ children, className }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mb-3 sm:mb-5 ${className || ""}`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-700 flex items-center gap-2">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full" />
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
      className={`text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed ${className || ""}`}
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
      className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

function getReactionInfo(type) {
  switch(type) {
    case 'bubble':
      return {
        title: 'Chemical Reaction',
        description: 'Observing gas formation in the solution. This is a sign of an active chemical reaction.',
        icon: '🧪',
        action: 'Add Catalyst'
      };
    case 'reaction':
      return {
        title: 'Precipitation',
        description: 'Solid particles are forming in the solution, indicating a successful precipitation reaction.',
        icon: '⚗️',
        action: 'Analyze'
      };
    case 'dissolve':
      return {
        title: 'Solution Ready',
        description: 'The solute has completely dissolved in the solvent, forming a homogeneous mixture.',
        icon: '🧫',
        action: 'Continue'
      };
    case 'catalyst':
    default:
      return {
        title: 'Reaction Complete',
        description: 'The reaction has reached equilibrium. The catalyst has been recovered and can be reused.',
        icon: '🔬',
        action: 'Next Step'
      };
  }
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("bubble");
  
  const reaction = getReactionInfo(animationType);

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen flex flex-col items-center justify-center space-y-6 sm:space-y-8 
      bg-gradient-to-br from-emerald-50 to-green-100">
      
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium rounded-lg
              ${animationType === type 
                ? 'bg-emerald-500 text-white' 
                : 'bg-white text-emerald-700 hover:bg-emerald-100'} 
              transition-colors shadow-sm`}
            onClick={() => setAnimationType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Start Experiment
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <div className="text-center">
            <div className="text-5xl mb-3">{reaction.icon}</div>
            <StyledDialogHeader>
              {reaction.title}
            </StyledDialogHeader>
            <StyledDialogDescription>
              {reaction.description}
            </StyledDialogDescription>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg
                  transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Experiment data saved!");
                }}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg
                  transition-colors text-sm sm:text-base"
              >
                {reaction.action}
              </button>
            </StyledDialogFooter>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

render(<DialogExample />);
