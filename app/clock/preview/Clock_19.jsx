const HolographicDisplayClock = () => {
  const [time, setTime] = useState(new Date());
  const [hue, setHue] = useState(200);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      
      // Update hue based on seconds (full cycle every minute)
      setHue((time.getSeconds() * 6 + time.getMilliseconds() * 0.006) % 360);
      
      // Random glitch effect (5% chance)
      if (Math.random() < 0.05) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 50 + Math.random() * 150);
      }
    }, 1000 / 60); // 60fps for smooth animation
    
    // Animate scanline
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 0.5) % 100);
    }, 20);
    
    return () => {
      clearInterval(timer);
      clearInterval(scanlineInterval);
    };
  }, [time]);
  
  // Format time for display
  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };
  
  // Format date
  const formatDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Generate holographic effect colors
  const primaryColor = `hsl(${hue}, 100%, 60%)`;
  const secondaryColor = `hsl(${(hue + 60) % 360}, 100%, 60%)`;
  const tertiaryColor = `hsl(${(hue + 120) % 360}, 100%, 60%)`;
  
  // Holographic text component
  const HolographicText = ({ children, size = 'text-4xl', className = '' }) => (
    <div 
      className={`${size} font-bold text-center ${className}`}
      style={{
        color: primaryColor,
        textShadow: `
          0 0 5px ${primaryColor},
          0 0 10px ${primaryColor},
          0 0 20px ${secondaryColor},
          0 0 40px ${tertiaryColor}
        `,
        position: 'relative',
        zIndex: 10,
        transform: isGlitching ? `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)` : 'none',
        opacity: isGlitching ? 0.8 : 1,
        transition: 'all 0.1s ease'
      }}
    >
      {children}
    </div>
  );
  
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center p-6">
      {/* Holographic grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center center',
          animation: 'gridMove 20s linear infinite',
        }}
      ></div>
      
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent ${Math.max(0, scanlinePosition - 5)}%,
            rgba(0, 255, 255, 0.1) ${scanlinePosition}%,
            transparent ${Math.min(100, scanlinePosition + 5)}%,
            transparent 100%
          )`,
          opacity: 0.5
        }}
      ></div>
      
      {/* Glitch overlay */}
      {isGlitching && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              0deg,
              transparent 0%,
              rgba(0, 255, 255, 0.1) 50%,
              transparent 100%
            )`,
            opacity: 0.8,
            transform: 'scale(1.02)'
          }}
        ></div>
      )}
      
      {/* Main display */}
      <div 
        className="relative z-10 w-full max-w-2xl p-8 rounded-lg"
        style={{
          backgroundColor: 'rgba(0, 20, 30, 0.7)',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: `
            inset 0 0 20px rgba(0, 255, 255, 0.1),
            0 0 30px rgba(0, 255, 255, 0.1),
            0 0 50px rgba(0, 200, 255, 0.2)
          `,
          backdropFilter: 'blur(5px)',
          transform: 'perspective(1000px) rotateX(5deg)',
          transformStyle: 'preserve-3d',
          overflow: 'hidden'
        }}
      >
        {/* Corner decorations */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => {
          const isTop = corner.includes('top');
          const isLeft = corner.includes('left');
          
          return (
            <div 
              key={corner}
              className={`absolute ${isTop ? 'top-4' : 'bottom-4'} ${isLeft ? 'left-4' : 'right-4'}`}
              style={{
                width: '20px',
                height: '20px',
                borderTop: `2px solid ${primaryColor}`,
                borderLeft: `2px solid ${primaryColor}`,
                borderRight: isLeft ? 'none' : `2px solid ${primaryColor}`,
                borderBottom: isTop ? 'none' : `2px solid ${primaryColor}`,
                borderTopLeftRadius: isTop && isLeft ? '5px' : '0',
                borderTopRightRadius: isTop && !isLeft ? '5px' : '0',
                borderBottomLeftRadius: !isTop && isLeft ? '5px' : '0',
                borderBottomRightRadius: !isTop && !isLeft ? '5px' : '0',
                boxShadow: `0 0 10px ${primaryColor}`,
                opacity: 0.8
              }}
            ></div>
          );
        })}
        
        {/* Time display */}
        <div className="text-center mb-8">
          <HolographicText size="text-6xl md:text-8xl" className="mb-2">
            {formatTime()}
          </HolographicText>
          <HolographicText size="text-xl md:text-2xl" className="opacity-80">
            {formatDate()}
          </HolographicText>
        </div>
        
        {/* Status indicators */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            { label: 'SYSTEM', value: 'ONLINE', color: '#0f0' },
            { label: 'POWER', value: '100%', color: primaryColor },
            { label: 'SIGNAL', value: 'STRONG', color: '#0ff' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-cyan-400 mb-1">{item.label}</div>
              <div 
                className="text-sm font-mono"
                style={{
                  color: item.color,
                  textShadow: `0 0 5px ${item.color}`
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
        
        {/* Frequency visualization */}
        <div className="mt-8 h-16 flex items-end justify-center gap-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const height = 20 + Math.sin(Date.now() / 200 + i * 0.5) * 15 + 
                          Math.sin(Date.now() / 300 + i * 0.3) * 10;
            const opacity = 0.3 + Math.abs(Math.sin(Date.now() / 1000 + i * 0.2)) * 0.7;
            
            return (
              <div 
                key={i}
                className="w-1.5 rounded-t"
                style={{
                  height: `${height}px`,
                  background: `linear-gradient(to top, ${primaryColor}, ${secondaryColor})`,
                  opacity,
                  transition: 'all 0.1s ease-out'
                }}
              ></div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 opacity-50 text-center"
        style={{
          textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
          fontFamily: 'monospace',
          letterSpacing: '2px'
        }}
      >
        HOLOGRAPHIC DISPLAY SYSTEM v3.7.2
      </div>
      
      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .holographic-flicker {
          animation: flicker 0.5s infinite;
        }
        
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          overflow-x: hidden;
          background: #000;
          color: #fff;
          font-family: 'Rajdhani', 'Arial', sans-serif;
        }
      `}</style>
    </div>
  );
};

render(<HolographicDisplayClock />);
