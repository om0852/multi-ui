const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-lg overflow-hidden bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-medium shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 transition-all duration-300 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  sunset: {
    initial: { 
      opacity: 0, 
      y: -20, 
      filter: "saturate(1.5)" 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: "saturate(1)",
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      filter: "saturate(1.5)",
      transition: { 
        duration: 0.4 
      } 
    },
  },
  dawn: {
    initial: {
      opacity: 0,
      y: 20,
      filter: "brightness(1.3)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "brightness(1)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "brightness(1.3)",
      transition: {
        duration: 0.4
      }
    }
  },
  dusk: {
    initial: {
      opacity: 0,
      scale: 0.98,
      rotateX: 5
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      rotateX: 5,
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
  animationType = "sunset",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.sunset;

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
            className="absolute inset-0 bg-orange-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 border border-white/10 shadow-2xl shadow-orange-500/20 ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
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

// Example Usage
const Example = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [animationType, setAnimationType] = React.useState('sunset');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded bg-orange-600/20 border border-orange-500/30 text-orange-100"
        >
          <option value="sunset">Sunset</option>
          <option value="dawn">Dawn</option>
          <option value="dusk">Dusk</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded bg-orange-600/20 border border-orange-500/30 text-orange-100"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Sunset Drawer
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
                Sunset Gradient
              </h2>
              <p className="mt-2 text-orange-100/90">Warm and inviting interface</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-white">Colorful</h3>
                <p className="text-sm text-orange-100/80 mt-1">Vibrant gradient effects</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-white">Modern</h3>
                <p className="text-sm text-orange-100/80 mt-1">Sleek and contemporary</p>
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
