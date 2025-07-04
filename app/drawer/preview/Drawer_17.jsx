const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative py-3 px-6 rounded-full bg-gradient-to-br from-green-600 to-green-700 text-green-50 font-medium border border-green-400/30 shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 hover:from-green-500 hover:to-green-600 transition-all duration-300 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  nature: {
    initial: { 
      opacity: 0, 
      scale: 0.95, 
      y: 10 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: 10,
      transition: { 
        duration: 0.4 
      } 
    },
  },
  forest: {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
      scale: 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
      scale: 0.98,
      transition: {
        duration: 0.4
      }
    }
  },
  meadow: {
    initial: {
      opacity: 0,
      rotateX: 10,
      transformOrigin: "bottom"
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      rotateX: 10,
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
  animationType = "nature",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.nature;

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
            className="absolute inset-0 bg-green-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-2xl shadow-green-900/20 ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-green-600/60 hover:text-green-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-green-800">
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
  const [animationType, setAnimationType] = React.useState('nature');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded border border-green-200 bg-green-50 text-green-800"
        >
          <option value="nature">Nature</option>
          <option value="forest">Forest</option>
          <option value="meadow">Meadow</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded border border-green-200 bg-green-50 text-green-800"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

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
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-green-900">
                Nature Inspired
              </h2>
              <p className="mt-2 text-green-700/80">Bringing the outdoors in</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/50 rounded-lg border border-green-100">
                <h3 className="font-bold text-green-800">Organic Shapes</h3>
                <p className="text-sm text-green-700/80 mt-1">Inspired by natural forms</p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border border-green-100">
                <h3 className="font-bold text-green-800">Eco-Friendly</h3>
                <p className="text-sm text-green-700/80 mt-1">Sustainable design choices</p>
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
