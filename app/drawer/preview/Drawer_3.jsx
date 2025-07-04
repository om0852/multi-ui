
const animations = {
  perspective: {
    initial: { 
      opacity: 0, 
      rotateY: 90,
      x: "100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1, 
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      rotateY: 90,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
  },
  fold: {
    initial: { 
      opacity: 0,
      rotateX: 90,
      y: "-100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateX: 90,
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
  },
  flip: {
    initial: { 
      opacity: 0,
      rotateY: -90,
      x: "-100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateY: -90,
      x: "-100%",
      transition: {
        duration: 0.3
      }
    },
  },
  unfold: {
    initial: { 
      opacity: 0,
      rotateX: -90,
      y: "100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateX: -90,
      y: "100%",
      transition: {
        duration: 0.3
      }
    },
  },
};

function Drawer({ children, className }) {
  return <div className={`relative z-50 ${className || ''}`}>{children}</div>;
}

function DrawerTrigger({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-6 rounded-xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        text-white font-medium
        transform transition-all duration-200
        hover:scale-105 hover:shadow-lg
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        ${className || ''}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
    </button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "perspective",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed bg-gradient-to-br from-white via-white to-gray-50 p-6
    backdrop-blur-xl shadow-2xl
    ${position === 'left' ? 'left-0 top-0 bottom-0 w-96' :
      position === 'right' ? 'right-0 top-0 bottom-0 w-96' :
      position === 'top' ? 'top-0 left-0 right-0 h-96' :
      'bottom-0 left-0 right-0 h-auto'}`;

  return (
    <div className="fixed inset-0 z-50 perspective-1000">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses}
          origin-right
          border border-gray-200
          bg-clip-padding backdrop-filter
          transform-gpu
          ${className || ''}`}
      >
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200
              transform transition-all duration-200 hover:rotate-90
              focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <svg
              className="w-5 h-5 text-gray-600"
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
        </div>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('perspective');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'perspective', 'fold', 'flip', 'unfold'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          3D Perspective Drawer
        </h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Animation Type
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {animationTypes.map(type => (
              <button
                key={type}
                onClick={() => setAnimationType(type)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  animationType === type 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Position
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  position === pos 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {pos.charAt(0).toUpperCase() + pos.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Drawer>
              <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
                Open 3D Drawer
              </DrawerTrigger>
              <DrawerContent
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                animationType={animationType}
                position={position}
              >
                <div className="space-y-6 pt-8">
                  <div>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      3D Perspective Drawer
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Experience our innovative 3D drawer with perspective animations and modern design.
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                      <h3 className="font-semibold text-indigo-900">3D Animations</h3>
                      <p className="text-sm text-indigo-600">Smooth perspective transitions</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                      <h3 className="font-semibold text-purple-900">Modern Design</h3>
                      <p className="text-sm text-purple-600">Clean and minimal interface</p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-indigo-50 border border-pink-100">
                      <h3 className="font-semibold text-pink-900">Interactive</h3>
                      <p className="text-sm text-pink-600">Try different animations and positions</p>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-100">
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => alert("Action confirmed!")}
                      className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {animationTypes.map(type => (
              <div key={type} className="p-4 border rounded-lg">
                <h3 className="font-medium text-gray-800">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {type === 'perspective' && '3D rotation from the side'}
                  {type === 'fold' && 'Folds down from the top'}
                  {type === 'flip' && 'Flips in from the left'}
                  {type === 'unfold' && 'Unfolds from the bottom'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
