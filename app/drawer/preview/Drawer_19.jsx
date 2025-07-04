const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] before:bg-[length:250%_250%] hover:before:animate-[shimmer_2s_linear_infinite] transition-all duration-300 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  wave: {
    initial: { 
      opacity: 0, 
      y: 50, 
      filter: "blur(10px)" 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)",
      transition: { 
        duration: 0.5 
      } 
    },
  },
  ripple: {
    initial: {
      opacity: 0,
      scale: 0.95,
      borderRadius: "40px"
    },
    animate: {
      opacity: 1,
      scale: 1,
      borderRadius: "12px",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      borderRadius: "40px",
      transition: {
        duration: 0.5
      }
    }
  },
  splash: {
    initial: {
      opacity: 0,
      y: 20,
      filter: "brightness(1.2)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "brightness(1)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.4
      }
    }
  }
};

const DrawerContent = ({
  children,
  isOpen,
  onClose,
  animationType = "wave",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.wave;

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
            className="absolute inset-0 bg-cyan-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-gradient-to-br from-cyan-500 to-blue-600 border border-white/10 shadow-2xl shadow-cyan-500/20 ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_8s_linear_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-white">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Keyframes for the shimmer animation
const keyframes = `
  @keyframes shimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 100% 0; }
  }
`;

// Add the keyframes to the document head
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(keyframes));
document.head.appendChild(style);

// Example Usage
const Example = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState('wave');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded bg-cyan-600/20 border border-cyan-500/30 text-cyan-100"
        >
          <option value="wave">Wave</option>
          <option value="ripple">Ripple</option>
          <option value="splash">Splash</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded bg-cyan-600/20 border border-cyan-500/30 text-cyan-100"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Wave Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Liquid Motion
              </h2>
              <p className="mt-2 text-cyan-100/90">Smooth animations and transitions</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-white">Fluid Design</h3>
                <p className="text-sm text-cyan-100/80 mt-1">Smooth and responsive</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-white">Interactive</h3>
                <p className="text-sm text-cyan-100/80 mt-1">Engaging user experience</p>
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
