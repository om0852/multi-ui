const GlassMorphismClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const [showDate, setShowDate] = useState(true);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time based on 12/24 hour setting
  const formatTime = () => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: showSeconds ? '2-digit' : undefined,
      hour12: !is24Hour
    };
    
    return time.toLocaleTimeString('en-US', options);
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
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-2xl">
        {/* Main clock container */}
        <div 
          className="relative p-8 rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
          }}
        >
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`,
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              zIndex: -1,
            }}
          />
          
          {/* Clock face */}
          <div className="relative z-10">
            {/* Time display */}
            <div className="text-center mb-6">
              <div 
                className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  fontFamily: 'monospace',
                  letterSpacing: '-2px',
                }}
              >
                {formatTime()}
              </div>
              
              {showDate && (
                <div className="text-lg text-gray-300 font-light">
                  {formatDate()}
                </div>
              )}
            </div>
            
            {/* Timezone and location */}
            <div className="flex justify-center items-center mt-8 space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {new Date().toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2]}
              </div>
            </div>
            
            {/* Controls */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIs24Hour(!is24Hour)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  is24Hour 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {is24Hour ? '24-Hour' : '12-Hour'}
              </button>
              
              <button
                onClick={() => setShowSeconds(!showSeconds)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  showSeconds 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {showSeconds ? 'Hide Seconds' : 'Show Seconds'}
              </button>
              
              <button
                onClick={() => setShowDate(!showDate)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  showDate 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {showDate ? 'Hide Date' : 'Show Date'}
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 mix-blend-overlay transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 mix-blend-overlay transform -translate-x-32 translate-y-32"></div>
        </div>
        
        {/* Color indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color1 }}></div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color2 }}></div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color3 }}></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

render(<GlassMorphismClock />);
