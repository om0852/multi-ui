
const animations = {
  slideLeft: {
    initial: { opacity: 0, x: -300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      x: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -300,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 }
    },
  },
  slideRight: {
    initial: { opacity: 0, x: 300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      x: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: 300,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 }
    },
  },
  slideUp: {
    initial: { opacity: 0, y: 300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      y: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 300,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 }
    },
  },
  slideDown: {
    initial: { opacity: 0, y: -300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      y: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -300,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 }
    },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -90 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -90 },
  },
  bounce: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: [0, -10, 0] },
    exit: { opacity: 0, y: -50 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
  },
};

function Drawer({ children, className }) {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
}

function DrawerTrigger({ children, onClick, className }) {
  return (
    <button
      className={`relative inline-flex items-center px-6 py-3 overflow-hidden text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg transform transition-all duration-200 hover:scale-105 ${className || ''}`}
      onClick={onClick}
    >
      <span className="relative">{children}</span>
    </button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "slideLeft",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.slideRight;

  const positionClasses = {
    left: "left-0 top-0 bottom-0 w-96",
    right: "right-0 top-0 bottom-0 w-96",
    top: "top-0 left-0 right-0 h-96",
    bottom: "bottom-0 left-0 right-0 h-auto",
  };

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`fixed ${positionClasses[position]} bg-white/80 backdrop-blur-lg shadow-2xl p-6 border border-white/20 ${className || ''}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-colors duration-200 focus:outline-none"
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
        </button>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function DrawerHeader({ children, className }) {
  return <div className={`mb-6 border-b border-gray-200/50 pb-4 ${className || ''}`}>{children}</div>;
}

function DrawerTitle({ children, className }) {
  return (
    <h2 className={`text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 ${className || ''}`}>
      {children}
    </h2>
  );
}

function DrawerDescription({ children, className }) {
  return <p className={`text-gray-600 mt-2 leading-relaxed ${className || ''}`}>{children}</p>;
}

function DrawerFooter({ children, className }) {
  return (
    <div className={`mt-6 flex justify-end space-x-4 border-t border-gray-200/50 pt-4 ${className || ''}`}>
      {children}
    </div>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('slideRight');
  const [position, setPosition] = useState('right');

  const animationTypes = [
    'slideLeft', 'slideRight', 'slideUp', 'slideDown', 
    'fade', 'zoomIn', 'zoomOut', 'rotate', 'bounce', 'flip'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Modern Drawer Component</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Animation Type</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {animationTypes.map(type => (
              <button
                key={type}
                onClick={() => setAnimationType(type)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  animationType === type 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-700">Position</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  position === pos 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Drawer>
              <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
                Open Drawer
              </DrawerTrigger>
              <DrawerContent
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                animationType={animationType}
                position={position}
              >
                <DrawerHeader>
                  <DrawerTitle>Modern Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer is using the "{animationType}" animation and is positioned to the {position}.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                    <h3 className="font-medium text-gray-800">Feature 1</h3>
                    <p className="text-gray-600 text-sm">Smooth animations and transitions</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                    <h3 className="font-medium text-gray-800">Feature 2</h3>
                    <p className="text-gray-600 text-sm">Glass morphism design</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                    <h3 className="font-medium text-gray-800">Feature 3</h3>
                    <p className="text-gray-600 text-sm">Fully customizable appearance</p>
                  </div>
                </div>
                <DrawerFooter>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert('Action performed!')}
                    className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-colors duration-200"
                  >
                    Confirm
                  </button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
