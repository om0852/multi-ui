
const animationStyles = {
  powerUp: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: -180, opacity: 0 },
    transition: { type: "spring", damping: 12 }
  },
  levelUp: {
    initial: { y: 100, opacity: 0, scale: 0.3 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -100, opacity: 0, scale: 0.3 },
    transition: { type: "spring", bounce: 0.5 }
  },
  gameOver: {
    initial: { scale: 2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  combo: {
    initial: { x: -300, rotate: -45, opacity: 0 },
    animate: { x: 0, rotate: 0, opacity: 1 },
    exit: { x: 300, rotate: 45, opacity: 0 },
    transition: { type: "spring", damping: 20 }
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
            className="fixed inset-0 bg-black/75 backdrop-blur-[2px] z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              {...animation}
              className={`relative bg-[#1a1b2e] border-4 border-[#4a5568] rounded-lg
                p-4 sm:p-6 w-full max-w-[90%] sm:max-w-md md:max-w-lg shadow-[0_0_20px_rgba(66,153,225,0.5)]
                [image-rendering:pixelated] overflow-y-auto max-h-[90vh] ${className || ""}`}
            >
              {/* Pixel corners */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#48bb78]" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#48bb78]" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#48bb78]" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#48bb78]" />
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-1 right-1 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                  bg-red-500 hover:bg-red-600 text-white font-bold rounded z-10 text-lg sm:text-xl"
              >
                ×
              </motion.button>
              {children}
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
      className={`px-6 sm:px-8 py-2 sm:py-3 bg-[#48bb78] text-white font-bold rounded
        shadow-[0_4px_0_#2f855a] hover:shadow-[0_2px_0_#2f855a] 
        hover:translate-y-[2px] transition-all duration-150
        border-2 border-[#276749] text-sm sm:text-base ${className || ""}`}
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
      className={`mb-3 sm:mb-4 text-center ${className || ""}`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#48bb78] uppercase
        tracking-wider [text-shadow:2px_2px_0_#276749]">
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
      className={`text-xs sm:text-sm md:text-base text-gray-300 text-center leading-relaxed
        [text-shadow:1px_1px_0_#000] ${className || ""}`}
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
      className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("powerUp");

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#2d3748] min-h-screen flex flex-col items-center justify-center space-y-6 sm:space-y-8">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded
              ${animationType === type ? 'bg-[#48bb78]' : 'bg-[#4a5568]'} text-white
              hover:opacity-90 transition-opacity border-2 border-[#2d3748]`}
            onClick={() => setAnimationType(type)}
          >
            {type.replace(/([A-Z])/g, ' $1').trim()}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          GAME DIALOG
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            {animationType === 'gameOver' ? 'GAME OVER' : 
             animationType === 'levelUp' ? 'LEVEL UP!' :
             animationType === 'combo' ? 'COMBO!' : 'POWER UP!'}
          </StyledDialogHeader>
          <StyledDialogDescription>
            {animationType === 'gameOver' ? 'Better luck next time!' :
             animationType === 'levelUp' ? 'You reached a new level!' :
             animationType === 'combo' ? 'Amazing combo! Keep it up!' : 
             'Power up collected! Your abilities have been enhanced!'}
          </StyledDialogDescription>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded
                border-2 border-gray-700 text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="px-4 py-2 bg-[#48bb78] hover:bg-[#38a169] text-white rounded
                border-2 border-[#2f855a] text-sm sm:text-base"
            >
              Continue
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

render(<DialogExample />);
