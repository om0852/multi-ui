const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-lg bg-black text-purple-500 border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  neon: {
    initial: { 
      opacity: 0, 
      x: 50, 
      filter: "brightness(2) blur(5px)" 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      filter: "brightness(1) blur(0px)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      x: 50, 
      filter: "brightness(2) blur(5px)",
      transition: { 
        duration: 0.3 
      } 
    },
  },
  cyber: {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "hue-rotate(90deg)"
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "hue-rotate(0deg)",
      transition: {
        duration: 0.5,
        ease: "circOut"
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "hue-rotate(-90deg)",
      transition: {
        duration: 0.4
      }
    }
  },
  matrix: {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.5
      }
    }
  }
};

const DrawerContent = ({
  children,
  isOpen,
  onClose,
  animationType = "neon",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.neon;

  const positionClasses = {
    left: "left-0 top-0 bottom-0 w-96",
    right: "right-0 top-0 bottom-0 w-96",
    top: "top-0 left-0 right-0 h-96",
    bottom: "bottom-0 left-0 right-0 h-auto",
  }[position] || "right-0 top-0 bottom-0 w-96";

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-black border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] ${positionClasses} ${className || ''}`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-purple-500 hover:text-purple-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full text-purple-500">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Example Usage
const Example = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState('neon');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded border border-purple-500 bg-black text-purple-500"
        >
          <option value="neon">Neon</option>
          <option value="cyber">Cyber</option>
          <option value="matrix">Matrix</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded border border-purple-500 bg-black text-purple-500"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Cyber Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
          className="bg-gradient-to-br from-black to-gray-900"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Cyberpunk UI
              </h2>
              <p className="mt-2 text-purple-400/80">High-tech, low-life interface</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-black/50 border border-purple-500/30 rounded">
                <h3 className="font-bold text-purple-400">Neon Glow</h3>
                <p className="text-sm text-purple-400/60 mt-1">Vibrant cyberpunk aesthetics</p>
              </div>
              <div className="p-4 bg-black/50 border border-purple-500/30 rounded">
                <h3 className="font-bold text-pink-400">Dark Theme</h3>
                <p className="text-sm text-pink-400/60 mt-1">Easy on the eyes</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

// Render the example for React Live
render(<Example />);
