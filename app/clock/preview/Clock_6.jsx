const GradientAnimatedClock = () => {
  const [time, setTime] = useState(new Date());
  const [gradientAngle, setGradientAngle] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Animate gradient
    const gradientInterval = setInterval(() => {
      setGradientAngle(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => {
      clearInterval(timer);
      clearInterval(gradientInterval);
    };
  }, []);
  
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  
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
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        background: `linear-gradient(${gradientAngle}deg, ${color1}, ${color2}, ${color3})`,
        transition: 'background 1s ease-in-out',
      }}
    >
      <div className="relative w-72 h-72 rounded-full bg-black bg-opacity-20 backdrop-blur-sm p-6 shadow-2xl">
        {/* Clock face */}
        <div className="relative w-full h-full rounded-full border-4 border-white border-opacity-30">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const size = i % 3 === 0 ? 12 : 6;
            const x = Math.sin(angle) * 120 + 132;
            const y = -Math.cos(angle) * 120 + 132;
            
            return (
              <div 
                key={i}
                className="absolute rounded-full bg-white bg-opacity-70"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${x - size/2}px`,
                  top: `${y - size/2}px`,
                  transition: 'all 0.3s ease',
                }}
              />
            );
          })}
          
          {/* Hour hand */}
          <div 
            className="absolute w-2 h-16 bg-white rounded-full transform origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-4px',
              marginTop: '-60%',
              transform: `rotate(${hourDegrees}deg)`,
              transformOrigin: 'bottom center',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)',
              transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
            }}
          />
          
          {/* Minute hand */}
          <div 
            className="absolute w-1.5 h-24 bg-white rounded-full transform origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-3px',
              marginTop: '-80%',
              transform: `rotate(${minuteDegrees}deg)`,
              transformOrigin: 'bottom center',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
            }}
          />
          
          {/* Second hand */}
          <div 
            className="absolute w-1 h-28 bg-white rounded-full transform origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-1px',
              marginTop: '-90%',
              transform: `rotate(${secondDegrees}deg)`,
              transformOrigin: 'bottom center',
              boxShadow: '0 0 5px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s cubic-bezier(0.4, 2.1, 0.8, 1)',
            }}
          />
          
          {/* Center dot */}
          <div 
            className="absolute w-4 h-4 rounded-full bg-white"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-8px',
              marginTop: '-8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              zIndex: 10,
            }}
          />
        </div>
      </div>
      
      <div className="mt-8 text-center text-white text-opacity-90">
        <div className="text-4xl font-light tracking-wider mb-2">
          {time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })}
        </div>
        <div className="text-lg font-light">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
      
      <div className="mt-8 flex space-x-4">
        <div className="w-8 h-8 rounded-full" style={{ background: color1 }}></div>
        <div className="w-8 h-8 rounded-full" style={{ background: color2 }}></div>
        <div className="w-8 h-8 rounded-full" style={{ background: color3 }}></div>
      </div>
    </div>
  );
};

render(<GradientAnimatedClock />);
