const Tilt3DClock = () => {
  const [time, setTime] = useState(new Date());
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  
  // Mouse/touch interaction handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({
      x: e.clientX || e.touches[0].clientX,
      y: e.clientY || e.touches[0].clientY,
    });
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const currentY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (currentX === undefined || currentY === undefined) return;
    
    const deltaX = currentX - lastMousePos.x;
    const deltaY = currentY - lastMousePos.y;
    
    setTilt(prev => ({
      x: Math.max(-30, Math.min(30, prev.x - deltaY * 0.5)),
      y: Math.max(-30, Math.min(30, prev.y + deltaX * 0.5)),
    }));
    
    setLastMousePos({ x: currentX, y: currentY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Reset tilt when mouse leaves
      setTimeout(() => {
        setTilt({ x: 0, y: 0 });
      }, 300);
    }
  };
  
  // Calculate shadow and highlight based on tilt
  const shadowX = -tilt.y * 0.3;
  const shadowY = tilt.x * 0.3;
  const highlightX = -tilt.y * 0.1;
  const highlightY = tilt.x * 0.1;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div 
        className="relative w-72 h-72"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          transform: 'perspective(1000px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="w-full h-full rounded-3xl p-6 transition-all duration-300"
          style={{
            background: 'linear-gradient(145deg, #1f2937, #111827)',
            boxShadow: `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.5), 
                       ${highlightX}px ${highlightY}px 10px rgba(255,255,255,0.05)`,
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          }}
        >
          {/* Clock face */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div 
              className="absolute inset-0 opacity-80"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                filter: 'blur(20px)',
                transform: 'translateZ(-1px)',
              }}
            />
            
            {/* Clock face content */}
            <div className="relative z-10 w-full h-full flex flex-col p-6">
              {/* Digital time */}
              <div className="text-white text-opacity-90 text-center mb-6">
                <div className="text-4xl font-light tracking-wider">
                  {time.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </div>
                <div className="text-sm text-white text-opacity-60 mt-1">
                  {time.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              {/* Analog clock */}
              <div className="relative flex-1 flex items-center justify-center">
                {/* Hour markers */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * (Math.PI / 180);
                  const size = i % 3 === 0 ? 8 : 4;
                  const x = Math.sin(angle) * 70 + 50;
                  const y = -Math.cos(angle) * 70 + 50;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute rounded-full bg-white bg-opacity-70"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  );
                })}
                
                {/* Hour hand */}
                <div 
                  className="absolute w-1.5 h-10 bg-white rounded-full transform origin-bottom"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-3px',
                    marginTop: '-30%',
                    transform: `rotate(${hourDegrees}deg)`,
                    transformOrigin: 'bottom center',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
                  }}
                />
                
                {/* Minute hand */}
                <div 
                  className="absolute w-1 h-16 bg-white rounded-full transform origin-bottom"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1.5px',
                    marginTop: '-50%',
                    transform: `rotate(${minuteDegrees}deg)`,
                    transformOrigin: 'bottom center',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
                  }}
                />
                
                {/* Second hand */}
                <div 
                  className="absolute w-0.5 h-20 bg-red-400 rounded-full transform origin-bottom"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-0.5px',
                    marginTop: '-60%',
                    transform: `rotate(${secondDegrees}deg)`,
                    transformOrigin: 'bottom center',
                    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s cubic-bezier(0.4, 2.1, 0.8, 1)',
                  }}
                />
                
                {/* Center dot */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-white"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    zIndex: 10,
                  }}
                />
              </div>
              
              {/* Tilt indicator */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-black bg-opacity-30 backdrop-blur-sm">
                  <span className="text-xs text-white text-opacity-70">
                    Tilt: {Math.round(tilt.y)}°, {Math.round(tilt.x)}°
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-white text-opacity-70">
        <p className="text-sm">Drag to tilt the clock in 3D space</p>
        <p className="text-xs mt-1 text-white text-opacity-50">
          {isDragging ? 'Dragging...' : 'Release to reset'}
        </p>
      </div>
    </div>
  );
};

render(<Tilt3DClock />);
