const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative py-3 px-6 bg-stone-50 text-stone-800 font-medium shadow-md border border-stone-200 transform transition-all duration-200 hover:shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-200 before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)] ${className || ''}`}
    >
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">📄</span>
      </span>
    </motion.button>
  );
};

const animations = {
  fold: {
    initial: { 
      opacity: 0,
      x: "-100%",
      rotateY: 90,
      transformPerspective: 2000,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: "-100%",
      rotateY: 90,
      transition: {
        duration: 0.5
      }
    },
  },
  origami: {
    initial: { 
      opacity: 0,
      scale: 0.8,
      rotateX: 90,
      transformOrigin: "top",
      transformPerspective: 2000,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      rotateX: 90,
      transition: {
        duration: 0.4
      }
    },
  },
  unfold: {
    initial: { 
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left",
    },
    animate: { 
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      scaleX: 0,
      transition: {
        duration: 0.3
      }
    },
  },
};

const DrawerContent = ({
  children,
  isOpen,
  onClose,
  animationType = "fold",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.fold;

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
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-stone-900/10 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-stone-50 border border-stone-200 shadow-xl transform-gpu ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50" />
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white text-stone-600 border border-stone-200 shadow-sm hover:bg-stone-50 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-200"
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
            <div className="relative h-full overflow-y-auto custom-scrollbar">
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
  const [animationType, setAnimationType] = React.useState('fold');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          <option value="fold">Fold</option>
          <option value="origami">Origami</option>
          <option value="unfold">Unfold</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Paper Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-stone-800">Paper Craft</h2>
              <p className="mt-2 text-stone-600">Experience the art of digital paper folding with smooth transitions.</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white rounded border border-stone-200">
                <h3 className="font-medium text-stone-800">Origami Animations</h3>
                <p className="text-sm text-stone-600 mt-1">Elegant folding transitions</p>
              </div>
              <div className="p-4 bg-white rounded border border-stone-200">
                <h3 className="font-medium text-stone-800">Paper Textures</h3>
                <p className="text-sm text-stone-600 mt-1">Subtle and refined patterns</p>
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
