const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`py-2 px-4 rounded bg-gray-50 text-gray-800 border border-gray-200 hover:bg-gray-100 transition-colors duration-200 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  slide: {
    initial: { 
      opacity: 0, 
      x: 20 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { 
        duration: 0.2 
      } 
    },
  },
  fade: {
    initial: { 
      opacity: 0,
      scale: 0.98
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.15
      }
    }
  },
  scale: {
    initial: {
      opacity: 0,
      scale: 0.95,
      transformOrigin: position => {
        if (position === 'left') return 'left center';
        if (position === 'right') return 'right center';
        if (position === 'top') return 'center top';
        return 'center bottom';
      }
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  }
};

const DrawerContent = ({
  children,
  isOpen,
  onClose,
  animationType = "slide",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.slide;
  
  // Handle dynamic transform origin for scale animation
  const transformOrigin = position === 'left' ? 'left center' : 
                        position === 'right' ? 'right center' :
                        position === 'top' ? 'center top' : 'center bottom';
  
  const scaleAnimation = {
    ...animation,
    initial: { 
      ...animation.initial,
      transformOrigin: typeof animation.initial.transformOrigin === 'function' 
        ? animation.initial.transformOrigin(position)
        : transformOrigin
    },
    animate: {
      ...animation.animate,
      transformOrigin: transformOrigin
    }
  };

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
            className="absolute inset-0 bg-black/5"
            onClick={onClose}
          />
          <motion.div
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            exit={scaleAnimation.exit}
            className={`fixed p-6 bg-white shadow-sm ${positionClasses} ${className || ''}`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full text-gray-600">
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
  const [animationType, setAnimationType] = React.useState('slide');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 text-sm rounded border border-gray-300"
        >
          <option value="slide">Slide</option>
          <option value="fade">Fade</option>
          <option value="scale">Scale</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 text-sm rounded border border-gray-300"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Minimal Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-900">Minimal UI</h2>
              <p className="mt-1 text-gray-500">Clean and simple interface</p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <h3 className="font-medium text-gray-800">Lightweight</h3>
                <p className="mt-1 text-sm text-gray-500">No unnecessary elements</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <h3 className="font-medium text-gray-800">Focused</h3>
                <p className="mt-1 text-sm text-gray-500">Clear hierarchy and spacing</p>
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
