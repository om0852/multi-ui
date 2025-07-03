const GradientMorphingClock = () => {
  const [time, setTime] = useState(new Date());
  const [gradientAngle, setGradientAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setTime(new Date());
      }
    }, 1000);
    
    // Animate gradient
    const gradientInterval = setInterval(() => {
      if (!isPaused) {
        setGradientAngle(prev => (prev + 0.5) % 360);
      }
    }, 50);
    
    return () => {
      clearInterval(timer);
      clearInterval(gradientInterval);
    };
  }, [isPaused]);
  
  // Generate gradient colors based on time
  const getGradientColors = () => {
    const hue1 = (time.getHours() * 15) % 360;
    const hue2 = (hue1 + 120) % 360;
    const hue3 = (hue2 + 120) % 360;
    
    return [
      `hsl(${hue1}, 80%, 60%)`,
      `hsl(${hue2}, 80%, 60%)`,
      `hsl(${hue3}, 80%, 60%)`,
    ];
  };
  
  const [color1, color2, color3] = getGradientColors();
  
  // Format time for display
  const formatTime = (includeSeconds = true) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: includeSeconds ? '2-digit' : undefined,
      hour12: true
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
  
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-6 transition-all duration-1000"
      style={{
        background: `linear-gradient(${gradientAngle}deg, ${color1}, ${color2}, ${color3})`,
        transition: 'background 2s ease-in-out',
      }}
    >
      <div className="w-full max-w-2xl text-center">
        {/* Time display */}
        <div className="mb-8">
          <div 
            className="text-8xl md:text-9xl font-bold text-white mb-2 text-shadow-lg"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1
            }}
          >
            {formatTime(false)}
          </div>
          <div 
            className="text-3xl md:text-4xl text-white opacity-90 mb-4"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              letterSpacing: '2px'
            }}
          >
            {formatTime().split(' ')[1]}
          </div>
          <div 
            className="text-xl text-white opacity-80"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400
            }}
          >
            {formatDate()}
          </div>
        </div>
        
        {/* Color indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div 
            className="w-8 h-8 rounded-full shadow-lg transition-all duration-1000"
            style={{ backgroundColor: color1 }}
          ></div>
          <div 
            className="w-8 h-8 rounded-full shadow-lg transition-all duration-1000"
            style={{ backgroundColor: color2 }}
          ></div>
          <div 
            className="w-8 h-8 rounded-full shadow-lg transition-all duration-1000"
            style={{ backgroundColor: color3 }}
          ></div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 flex items-center"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isPaused ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
            </svg>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          
          <div className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-full text-sm font-medium backdrop-blur-sm flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Gradient Morphing Clock
          </div>
        </div>
        
        {/* Time segments */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { label: 'HOURS', value: time.getHours() % 12 || 12 },
            { label: 'MINUTES', value: time.getMinutes().toString().padStart(2, '0') },
            { label: 'SECONDS', value: time.getSeconds().toString().padStart(2, '0') }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-white">{item.value}</div>
              <div className="text-xs text-white text-opacity-70 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-text {
          background: linear-gradient(45deg, ${color1}, ${color2}, ${color3});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

render(<GradientMorphingClock />);
