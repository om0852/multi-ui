
const animations = {
  elegant: {
    initial: { 
      opacity: 0,
      x: 20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.4
      }
    },
  },
  minimal: {
    initial: { 
      opacity: 0,
      y: 10,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3
      }
    },
  },
  fade: {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "linear"
      }
    },
    exit: { 
      opacity: 0,
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
      className={`relative py-2.5 px-5 rounded-full
        bg-white text-gray-900
        border border-gray-200
        shadow-sm
        hover:bg-gray-50
        active:bg-gray-100
        transform transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-gray-200
        text-sm font-medium
        ${className || ''}`}
    >
      {children}
    </button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "elegant",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed bg-white p-6
    shadow-[0_0_50px_rgba(0,0,0,0.1)]
    ${position === 'left' ? 'left-0 top-0 bottom-0 w-96' :
      position === 'right' ? 'right-0 top-0 bottom-0 w-96' :
      position === 'top' ? 'top-0 left-0 right-0 h-96' :
      'bottom-0 left-0 right-0 h-auto'}`;

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/5 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses} transform-gpu ${className || ''}`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full
              text-gray-400 hover:text-gray-500
              hover:bg-gray-100
              transform transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
  const [animationType, setAnimationType] = useState('elegant');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'elegant', 'minimal', 'fade'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-900 mb-3">
            Minimal Drawer
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A clean and elegant drawer component with subtle animations and a focus on content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Animation Type
            </h2>
            <div className="flex flex-wrap gap-2">
              {animationTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setAnimationType(type)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    animationType === type 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Position
            </h2>
            <div className="flex flex-wrap gap-2">
              {positions.map(pos => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    position === pos 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
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
              <div className="space-y-6 pt-8">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {animationType === 'elegant' && 'Elegant Design'}
                    {animationType === 'minimal' && 'Minimal Interface'}
                    {animationType === 'fade' && 'Smooth Transitions'}
                  </h2>
                  <p className="mt-2 text-gray-500 leading-relaxed">
                    {animationType === 'elegant' && 'Experience our clean and elegant interface with smooth animations.'}
                    {animationType === 'minimal' && 'A minimal approach that puts your content first.'}
                    {animationType === 'fade' && 'Subtle fades that enhance the user experience.'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <h3 className="font-medium text-gray-900">Clean Interface</h3>
                    <p className="text-sm text-gray-500 mt-1">Focus on what matters most with our distraction-free design.</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <h3 className="font-medium text-gray-900">Responsive</h3>
                    <p className="text-sm text-gray-500 mt-1">Looks great on all devices and screen sizes.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <h3 className="font-medium text-gray-900">Customizable</h3>
                    <p className="text-sm text-gray-500 mt-1">Easily adapts to your design system.</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-100">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => alert("Action confirmed!")}
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>Try different animation types and positions to see the effect.</p>
          <p className="mt-1">Current: {animationType} animation, {position} position</p>
        </div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
