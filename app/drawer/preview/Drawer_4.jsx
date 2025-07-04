
const animations = {
  glitch: {
    initial: { 
      opacity: 0,
      x: "100%",
      skew: 20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skew: [20, -10, 5, 0],
      transition: {
        duration: 0.4,
        times: [0, 0.2, 0.4, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: "100%",
      skew: [-20, 10, -5, 20],
      transition: {
        duration: 0.3
      }
    },
  },
  matrix: {
    initial: { 
      opacity: 0,
      y: "100%",
      scale: 0.9,
      rotateX: 45,
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: "100%",
      scale: 0.9,
      rotateX: 45,
      transition: {
        duration: 0.3
      }
    },
  },
  cyber: {
    initial: { 
      opacity: 0,
      x: "-100%",
      rotate: -10,
      scale: 0.8,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0,
      x: "-100%",
      rotate: 10,
      scale: 0.8,
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
        bg-black text-cyan-400 font-mono
        border-2 border-cyan-400
        shadow-[0_0_10px_rgba(0,255,255,0.3)]
        hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        transform transition-all duration-200
        hover:scale-105
        before:absolute before:inset-0
        before:border-2 before:border-cyan-400/50
        before:translate-x-1 before:translate-y-1
        hover:before:translate-x-2 hover:before:translate-y-2
        before:transition-transform before:duration-200
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
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
  animationType = "glitch",
  position = "right",
  className,
}) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = `fixed bg-black/95 p-6
    border-2 border-cyan-400
    shadow-[0_0_30px_rgba(0,255,255,0.3)]
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
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/70 backdrop-blur"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={`${positionClasses} transform-gpu ${className || ''}`}
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 opacity-30 blur" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={onClose}
            className="p-2 bg-black/50 text-cyan-400
              border border-cyan-400/50
              hover:bg-cyan-400/10
              transform transition-all duration-200
              hover:scale-110 hover:rotate-90
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
        <div className="relative h-full overflow-y-auto text-cyan-400 font-mono">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [animationType, setAnimationType] = useState('glitch');
  const [position, setPosition] = useState('right');
  
  const animationTypes = [
    'glitch', 'matrix', 'cyber'
  ];
  
  const positions = ['left', 'right', 'top', 'bottom'];

  // Glitch effect for the background
  const glitchText = (text) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="inline-block hover:animate-float"
        style={{
          animationDelay: `${i * 0.05}s`,
          textShadow: '0 0 5px rgba(34, 211, 238, 0.8)'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            {glitchText('CYBERPUNK_UI')}
          </h1>
          <p className="text-cyan-400/80 font-mono">
            &gt; System ready. Awaiting user input...
          </p>
          <div className="absolute inset-0 bg-cyan-400/5 -z-10 rounded-xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border-2 border-cyan-400/30 bg-black/50 rounded-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
              &gt; ANIMATION_TYPE
            </h2>
            <div className="flex flex-wrap gap-2">
              {animationTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setAnimationType(type)}
                  className={`px-4 py-2 font-mono text-sm
                    ${animationType === type 
                      ? 'bg-cyan-400 text-black' 
                      : 'bg-black/50 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10'
                    }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 border-2 border-cyan-400/30 bg-black/50 rounded-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
              &gt; POSITION
            </h2>
            <div className="flex flex-wrap gap-2">
              {positions.map(pos => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  className={`px-4 py-2 font-mono text-sm
                    ${position === pos 
                      ? 'bg-blue-500 text-black' 
                      : 'bg-black/50 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10'
                    }`}
                >
                  {pos.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Drawer>
            <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
              LAUNCH_CYBERPUNK_UI.EXE
            </DrawerTrigger>
            <DrawerContent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              animationType={animationType}
              position={position}
            >
              <div className="space-y-6 pt-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    SYSTEM://CYBERPUNK-UI
                  </h2>
                  <p className="mt-2 text-cyan-400/80 font-mono">
                    &gt; Initializing {animationType} module...
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-bold text-cyan-400 font-mono">&gt; NEURAL_LINK_STATUS</h3>
                    <p className="text-sm text-cyan-400/70 font-mono">Connection: {Math.floor(Math.random() * 30 + 70)}%</p>
                  </div>
                  
                  <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-bold text-cyan-400 font-mono">&gt; SYSTEM_DIAGNOSTICS</h3>
                    <p className="text-sm text-cyan-400/70 font-mono">
                      {['CPU', 'GPU', 'RAM', 'NEURAL_INTERFACE'].map(component => (
                        <span key={component} className="block">
                          {component}: {Math.floor(Math.random() * 30 + 70)}% {component === 'NEURAL_INTERFACE' ? '✓' : ''}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-bold text-cyan-400 font-mono">&gt; ANIMATION_SETTINGS</h3>
                    <p className="text-sm text-cyan-400/70 font-mono">
                      Type: {animationType.toUpperCase()}<br />
                      Position: {position.toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-cyan-400/30">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2 bg-black/50 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors font-mono"
                  >
                    TERMINATE
                  </button>
                  <button
                    onClick={() => alert("SYSTEM ACTIVATED\n\n> Initializing cybernetic enhancements...\n> Neural interface connected\n> Ready for user input")}
                    className="px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors font-mono"
                  >
                    ACTIVATE
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="mt-12 p-6 border-2 border-cyan-400/30 rounded-lg bg-black/50">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
            &gt; SYSTEM_STATUS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['POWER', 'SECURITY', 'NETWORK', 'STORAGE'].map((item, i) => (
              <div key={i} className="p-3 border border-cyan-400/30 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-cyan-400/80 text-sm font-mono">{item}</span>
                  <span className="text-cyan-400 text-xs font-mono">
                    {Math.floor(Math.random() * 30 + 70)}%
                  </span>
                </div>
                <div className="h-1.5 bg-cyan-400/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${Math.floor(Math.random() * 30 + 70)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

render(<DrawerExample />);
