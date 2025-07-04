
const animations = {
  typewriter: {
    initial: { 
      opacity: 0,
      x: "-100%",
      skewX: -20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      }
    },
    exit: { 
      opacity: 0,
      x: "-100%",
      skewX: -20,
      transition: {
        duration: 0.3
      }
    },
  },
  oldTV: {
    initial: { 
      opacity: 0,
      scale: 0.8,
      filter: "brightness(0)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      filter: "brightness(0)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideShow: {
    initial: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    animate: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
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
      className={`relative py-3 px-6
        bg-amber-100
        text-amber-900 font-serif
        border-4 border-amber-900
        shadow-[4px_4px_0_0_rgba(120,53,15,1)]
        hover:shadow-[2px_2px_0_0_rgba(120,53,15,1)]
        hover:translate-x-[2px] hover:translate-y-[2px]
        active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
        transition-all duration-200
        focus:outline-none
        ${className || ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      <span className="relative uppercase tracking-widest">{children}</span>
    </button>
  );
}

function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "typewriter",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed p-8
    bg-amber-100
    border-4 border-amber-900
    shadow-[8px_8px_0_0_rgba(120,53,15,1)]
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
        className="absolute inset-0 bg-amber-900/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses} transform-gpu ${className || ''}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="p-2
              bg-amber-200 text-amber-900
              border-2 border-amber-900
              shadow-[2px_2px_0_0_rgba(120,53,15,1)]
              hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all duration-200
              focus:outline-none"
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
        </div>
        <div className="relative h-full overflow-y-auto font-serif">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('typewriter');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'typewriter', 'oldTV', 'slideShow'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  const getAnimationLabel = (type) => {
    switch(type) {
      case 'typewriter': return 'Typewriter';
      case 'oldTV': return 'Old TV';
      case 'slideShow': return 'Slide Show';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">
            Vintage Drawer
          </h1>
          <p className="text-amber-800 max-w-2xl mx-auto font-serif">
            Experience the nostalgia of classic design with a modern twist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-amber-100 p-6 border-4 border-amber-900 shadow-[4px_4px_0_0_rgba(120,53,15,1)]">
            <h2 className="text-xl font-bold text-amber-900 mb-4 font-serif">
              ANIMATION STYLE
            </h2>
            <div className="flex flex-wrap gap-2">
              {animationTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setAnimationType(type)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-2
                    ${animationType === type 
                      ? 'bg-amber-900 text-amber-100 border-amber-900 shadow-[2px_2px_0_0_rgba(120,53,15,1)]' 
                      : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-200 hover:border-amber-400'
                    }`}
                >
                  {getAnimationLabel(type)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-amber-100 p-6 border-4 border-amber-900 shadow-[4px_4px_0_0_rgba(120,53,15,1)]">
            <h2 className="text-xl font-bold text-amber-900 mb-4 font-serif">
              POSITION
            </h2>
            <div className="flex flex-wrap gap-2">
              {positions.map(pos => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-2
                    ${position === pos 
                      ? 'bg-amber-900 text-amber-100 border-amber-900 shadow-[2px_2px_0_0_rgba(120,53,15,1)]' 
                      : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-200 hover:border-amber-400'
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
              Open Vintage Drawer
            </DrawerTrigger>
            <DrawerContent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              animationType={animationType}
              position={position}
            >
              <div className="space-y-8 pt-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 uppercase tracking-wider font-serif">
                    {animationType === 'typewriter' && 'Typewriter Era'}
                    {animationType === 'oldTV' && 'Old TV Effect'}
                    {animationType === 'slideShow' && 'Slide Show'}
                  </h2>
                  <p className="mt-2 text-amber-800 font-medium font-serif">
                    {animationType === 'typewriter' && 'The classic typewriter animation takes you back.'}
                    {animationType === 'oldTV' && 'Remember the old TV static effect?'}
                    {animationType === 'slideShow' && 'A nostalgic slide projector effect.'}
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    '🎞️ Vintage Design',
                    '📜 Classic Typography',
                    '📺 Retro Animations',
                    '🎨 Warm Color Palette',
                    '🖼️ Polaroid-Style Cards'
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-amber-50 border-2 border-amber-900 relative">
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-300 border border-amber-900"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-300 border border-amber-900"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-300 border border-amber-900"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-300 border border-amber-900"></div>
                      <h3 className="font-bold text-amber-900 font-serif">{item}</h3>
                      <p className="text-sm text-amber-800 mt-1">
                        {[
                          'Timeless design elements from the past',
                          'Beautiful serif fonts for that classic look',
                          'Smooth animations inspired by retro technology',
                          'Warm amber and brown tones for nostalgia',
                          'Photo corners and borders for that album feel'
                        ][i]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-4 pt-6 mt-6 border-t-2 border-amber-900/30">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2
                      bg-amber-200 text-amber-900
                      border-2 border-amber-900
                      shadow-[2px_2px_0_0_rgba(120,53,15,1)]
                      hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                      uppercase tracking-wider text-sm font-medium font-serif
                      transition-all duration-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert("Vintage action confirmed! 🎩\n\nThanks for taking a trip down memory lane with us.")}
                    className="px-6 py-2
                      bg-amber-900 text-amber-100
                      border-2 border-amber-900
                      shadow-[2px_2px_0_0_rgba(120,53,15,1)]
                      hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                      uppercase tracking-wider text-sm font-medium font-serif
                      transition-all duration-200"
                  >
                    Take Me Back
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="mt-16 text-center text-amber-700 text-sm font-serif">
          <p>✨ Try different animations and positions to see the vintage magic! ✨</p>
          <p className="mt-1 text-amber-600">
            Current: {getAnimationLabel(animationType)} • {position.charAt(0).toUpperCase() + position.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

render(<DrawerExample />);
