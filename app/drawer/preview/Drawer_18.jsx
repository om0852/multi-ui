const Drawer = ({ children, className }) => {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
};

const DrawerTrigger = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative py-3 px-6 rounded-lg overflow-hidden bg-indigo-950 text-indigo-200 font-medium border border-indigo-500/30 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTY3LCAxMzksIDI1MCwgMC4yKSIvPjwvc3ZnPg==')] before:opacity-30 hover:before:opacity-50 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
};

const animations = {
  cosmic: {
    initial: { 
      opacity: 0, 
      scale: 1.1, 
      filter: "brightness(1.5)" 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      filter: "brightness(1)",
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      filter: "brightness(1.5)",
      transition: { 
        duration: 0.4 
      } 
    },
  },
  nebula: {
    initial: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(4px) brightness(1.5)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px) brightness(1.5)",
      transition: {
        duration: 0.5
      }
    }
  },
  stardust: {
    initial: {
      opacity: 0,
      y: 20,
      rotateX: 10,
      transformOrigin: "center"
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      rotateX: 10,
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
  animationType = "cosmic",
  position = "right",
  className,
}) => {
  const animation = animations[animationType] || animations.cosmic;

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
            className="absolute inset-0 bg-indigo-950/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={`fixed p-6 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 border border-indigo-500/20 shadow-2xl shadow-indigo-500/20 ${positionClasses} ${className || ''}`}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTY3LCAxMzksIDI1MCwgMC4yKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.1),transparent)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-indigo-300/60 hover:text-indigo-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-indigo-200">
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
  const [animationType, setAnimationType] = React.useState('cosmic');
  const [position, setPosition] = React.useState('right');

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <select 
          value={animationType}
          onChange={(e) => setAnimationType(e.target.value)}
          className="p-2 rounded bg-indigo-900/50 border border-indigo-500/30 text-indigo-200"
        >
          <option value="cosmic">Cosmic</option>
          <option value="nebula">Nebula</option>
          <option value="stardust">Stardust</option>
        </select>
        <select 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 rounded bg-indigo-900/50 border border-indigo-500/30 text-indigo-200"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Cosmic Drawer
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
                Cosmic Explorer
              </h2>
              <p className="mt-2 text-indigo-200/80">Journey through the stars</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <h3 className="font-bold text-indigo-100">Galactic Data</h3>
                <p className="text-sm text-indigo-200/80 mt-1">Explore the universe</p>
              </div>
              <div className="p-4 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <h3 className="font-bold text-indigo-100">Stellar Navigation</h3>
                <p className="text-sm text-indigo-200/80 mt-1">Find your way home</p>
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
