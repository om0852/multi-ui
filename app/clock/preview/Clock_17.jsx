const NeonGlowClock = () => {
  const [time, setTime] = useState(new Date());
  const [glowIntensity, setGlowIntensity] = useState(1);
  const [isFlickering, setIsFlickering] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      
      // Random flicker effect (5% chance)
      if (Math.random() < 0.05) {
        setIsFlickering(true);
        setTimeout(() => setIsFlickering(false), 100 + Math.random() * 200);
      }
      
      // Pulsing glow effect
      setGlowIntensity(0.8 + Math.sin(Date.now() / 1000) * 0.2);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
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
  
  // Generate neon color based on time
  const getNeonColor = () => {
    const hue = (time.getHours() * 15 + time.getMinutes() * 0.25) % 360;
    return `hsl(${hue}, 100%, 70%)`;
  };
  
  const neonColor = getNeonColor();
  const glowColor = `${neonColor}${Math.floor(glowIntensity * 100).toString(16).padStart(2, '0')}`;
  
  // Neon text component
  const NeonText = ({ children, size = 'text-4xl', className = '' }) => (
    <span 
      className={`${size} font-bold ${isFlickering ? 'opacity-30' : ''} transition-opacity duration-100 ${className}`}
      style={{
        color: neonColor,
        textShadow: `
          0 0 5px ${neonColor},
          0 0 10px ${neonColor},
          0 0 20px ${glowColor},
          0 0 40px ${glowColor},
          0 0 80px ${glowColor}
        `,
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </span>
  );
  
  // Neon border component
  const NeonBorder = ({ className = '' }) => (
    <div 
      className={`absolute inset-0 border-2 rounded-lg pointer-events-none ${className}`}
      style={{
        borderColor: neonColor,
        boxShadow: `
          inset 0 0 5px ${neonColor},
          inset 0 0 10px ${glowColor},
          0 0 5px ${neonColor},
          0 0 10px ${glowColor}
        `
      }}
    />
  );
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(${neonColor} 1px, transparent 1px),
          linear-gradient(90deg, ${neonColor} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}></div>
      
      <div className="relative z-10 w-full max-w-2xl">
        {/* Main clock display */}
        <div className="relative p-8 md:p-12 mb-12 rounded-lg bg-black bg-opacity-70 backdrop-blur-sm">
          <NeonBorder />
          
          <div className="text-center">
            {/* Time */}
            <div className="mb-2">
              <NeonText size="text-6xl md:text-8xl">
                {formatTime().split(':').slice(0, 2).join(':')}
              </NeonText>
              <NeonText size="text-4xl md:text-6xl" className="opacity-70">
                :{time.getSeconds().toString().padStart(2, '0')}
              </NeonText>
            </div>
            
            {/* Date */}
            <div className="mt-6">
              <NeonText size="text-xl md:text-2xl" className="opacity-80">
                {formatDate()}
              </NeonText>
            </div>
            
            {/* Week progress */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full"
                  style={{
                    width: `${(time.getDay() * 24 + time.getHours()) / (7 * 24) * 100}%`,
                    background: `linear-gradient(90deg, ${neonColor}, ${getNeonColor((time.getHours() + 1) % 24)})`,
                    boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Color indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div 
            className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{ 
              backgroundColor: '#ff00ff',
              boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff'
            }}
            onClick={() => setNeonColor('#ff00ff')}
          ></div>
          <div 
            className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{ 
              backgroundColor: '#00ffff',
              boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
            }}
            onClick={() => setNeonColor('#00ffff')}
          ></div>
          <div 
            className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{ 
              backgroundColor: '#ffff00',
              boxShadow: '0 0 10px #ffff00, 0 0 20px #ffff00'
            }}
            onClick={() => setNeonColor('#ffff00')}
          ></div>
          <div 
            className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{ 
              backgroundColor: '#ff7700',
              boxShadow: '0 0 10px #ff7700, 0 0 20px #ff7700'
            }}
            onClick={() => setNeonColor('#ff7700')}
          ></div>
          <div 
            className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{ 
              backgroundColor: '#00ff77',
              boxShadow: '0 0 10px #00ff77, 0 0 20px #00ff77'
            }}
            onClick={() => setNeonColor('#00ff77')}
          >
            <div className="w-full h-full rounded-full" style={{
              background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
              animation: 'spin 2s linear infinite'
            }}></div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="text-center text-gray-600 text-sm mt-12">
          <p>NEON GLOW CLOCK</p>
          <p className="mt-1">The color changes based on the time of day</p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .neon-flicker {
          animation: flicker 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

render(<NeonGlowClock />);
