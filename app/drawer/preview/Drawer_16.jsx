const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative py-3 px-6 rounded bg-amber-100 border-2 border-amber-900 text-amber-900 font-mono shadow-[4px_4px_0_0_rgba(120,53,15,1)] hover:shadow-[2px_2px_0_0_rgba(120,53,15,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  retro: {
    initial: { 
      opacity: 0, 
      y: 20, 
      rotateX: 45 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      rotateX: 45,
      transition: { 
        duration: 0.3 
      } 
    },
  },
  pixel: {
    initial: {
      opacity: 0,
      scale: 0.9,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.3
      }
    }
  },
  vhs: {
    initial: {
      opacity: 0,
      y: 20,
      filter: "hue-rotate(-30deg)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "hue-rotate(0deg)",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "hue-rotate(30deg)",
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
  animationType = "retro",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.retro;

  const positionClasses = {
    left: "left-0 top-0 bottom-0 w-96",
    right: "right-0 top-0 bottom-0 w-96",
    top: "top-0 left-0 right-0 h-96",
    bottom: "bottom-0 left-0 right-0 h-auto",
  }[position] || "right-0 top-0 bottom-0 w-96";

  const shadowClass = {
    left: "shadow-[-8px_8px_0_0_rgba(120,53,15,1)]",
    right: "shadow-[8px_8px_0_0_rgba(120,53,15,1)]",
    top: "shadow-[0_8px_0_0_rgba(120,53,15,1)]",
    bottom: "shadow-[0_-8px_0_0_rgba(120,53,15,1)]",
  }[position] || "shadow-[8px_8px_0_0_rgba(120,53,15,1)]";

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-900/20"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-amber-100 border-2 border-amber-900 ${shadowClass} ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-amber-900/20" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-900/20" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-amber-900/60 hover:text-amber-900"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full font-mono text-amber-900">
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
  const [animationType, setAnimationType] = React.useState('retro');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded border-2 border-amber-900 bg-amber-100 text-amber-900 font-mono"
        >
          <option value="retro">Retro</option>
          <option value="pixel">Pixel</option>
          <option value="vhs">VHS</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded border-2 border-amber-900 bg-amber-100 text-amber-900 font-mono"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Retro Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType={animationType}
          position={position}
          className="font-mono"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">
                RETRO INTERFACE
              </h2>
              <p className="mt-2 text-amber-900/80">A blast from the past</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-amber-50 border-2 border-amber-900">
                <h3 className="font-bold text-amber-900">VINTAGE STYLE</h3>
                <p className="text-sm text-amber-900/80 mt-1">Classic 80s aesthetic</p>
              </div>
              <div className="p-4 bg-amber-50 border-2 border-amber-900">
                <h3 className="font-bold text-amber-900">PIXEL PERFECT</h3>
                <p className="text-sm text-amber-900/80 mt-1">Sharp and crisp</p>
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
