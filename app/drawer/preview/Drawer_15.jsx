const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  aurora: {
    initial: { 
      opacity: 0, 
      scale: 0.98, 
      filter: "hue-rotate(-30deg)" 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      filter: "hue-rotate(0deg)",
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      filter: "hue-rotate(30deg)",
      transition: { 
        duration: 0.4 
      } 
    },
  },
  wave: {
    initial: { 
      opacity: 0,
      y: 20,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    animate: {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.4
      }
    }
  },
  float: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  }
};

const DrawerContent = ({
  children,
  isOpen,
  onClose,
  animationType = "aurora",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.aurora;

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
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-pink-500/90 backdrop-blur-xl border border-white/20 ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
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

// Example Usage
const Example = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState('aurora');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded bg-white/10 backdrop-blur-sm text-white border border-white/20"
        >
          <option value="aurora">Aurora</option>
          <option value="wave">Wave</option>
          <option value="float">Float</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded bg-white/10 backdrop-blur-sm text-white border border-white/20"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Aurora Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Aurora UI
              </h2>
              <p className="mt-2 text-blue-100/90">Beautiful gradient effects and smooth animations</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <h3 className="font-bold text-white">Gradient Magic</h3>
                <p className="text-sm text-blue-100/80 mt-1">Smooth color transitions</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <h3 className="font-bold text-white">Modern Design</h3>
                <p className="text-sm text-blue-100/80 mt-1">Clean and elegant interface</p>
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
