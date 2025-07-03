const InteractiveOrbitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [rotation, setRotation] = useState({ x: 20, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [zoom, setZoom] = useState(1);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Auto-rotate
    let animationId;
    if (autoRotate) {
      const animate = () => {
        setRotation(prev => ({
          ...prev,
          y: (prev.y + 0.1) % 360
        }));
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    
    return () => {
      clearInterval(timer);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [autoRotate]);
  
  // Mouse/touch event handlers for rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setLastPosition({
      x: e.clientX || e.touches[0].clientX,
      y: e.clientY || e.touches[0].clientY
    });
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX || e.touches[0].clientX;
    const currentY = e.clientY || e.touches[0].clientY;
    
    const deltaX = currentX - lastPosition.x;
    const deltaY = currentY - lastPosition.y;
    
    setRotation(prev => ({
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
    
    setLastPosition({ x: currentX, y: currentY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle zoom
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom(prev => Math.max(0.5, Math.min(2, prev - e.deltaY * 0.001)));
  };
  
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
  
  // Generate orbital positions based on time
  const getOrbitalPositions = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    return [
      // Hours (inner orbit)
      {
        label: 'HOURS',
        value: hours % 12 || 12,
        radius: 60,
        angle: (hours / 12) * Math.PI * 2,
        size: 20,
        color: '#ff4d4d',
        textColor: '#fff',
        orbitColor: 'rgba(255, 77, 77, 0.3)'
      },
      // Minutes (middle orbit)
      {
        label: 'MIN',
        value: minutes,
        radius: 100,
        angle: (minutes / 60) * Math.PI * 2,
        size: 15,
        color: '#4d94ff',
        textColor: '#fff',
        orbitColor: 'rgba(77, 148, 255, 0.3)'
      },
      // Seconds (outer orbit)
      {
        label: 'SEC',
        value: seconds,
        radius: 140,
        angle: (seconds / 60) * Math.PI * 2,
        size: 10,
        color: '#4dffb8',
        textColor: '#fff',
        orbitColor: 'rgba(77, 255, 184, 0.3)'
      },
      // AM/PM indicator (small orbit)
      {
        label: hours >= 12 ? 'PM' : 'AM',
        value: '',
        radius: 30,
        angle: (hours / 24) * Math.PI * 2,
        size: 12,
        color: '#ffcc4d',
        textColor: '#000',
        orbitColor: 'rgba(255, 204, 77, 0.3)'
      }
    ];
  };
  
  const orbitals = getOrbitalPositions();
  
  return (
    <div 
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden flex flex-col items-center justify-center p-6"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onWheel={handleWheel}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* 3D Orbital System */}
      <div 
        className="relative w-64 h-64 md:w-96 md:h-96"
        style={{
          transform: `scale(${zoom})`,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transition: 'transform 0.3s ease'
        }}
      >
        {/* Center point */}
        <div 
          className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.8)',
            zIndex: 10
          }}
        ></div>
        
        {/* Orbital paths */}
        {showOrbits && orbitals.map((orbital, index) => (
          <div 
            key={`orbit-${index}`}
            className="absolute top-1/2 left-1/2 rounded-full border border-dashed transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${orbital.radius * 2}px`,
              height: `${orbital.radius * 2}px`,
              borderColor: orbital.orbitColor,
              transform: '-translateX(-50%) -translateY(-50%) rotateX(60deg)'
            }}
          ></div>
        ))}
        
        {/* Orbiting elements */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'transform 0.5s ease'
          }}
        >
          {orbitals.map((orbital, index) => {
            const x = Math.cos(orbital.angle) * orbital.radius;
            const z = Math.sin(orbital.angle) * orbital.radius;
            const y = Math.sin(orbital.angle * 0.5) * 20; // Add some vertical movement
            
            return (
              <div 
                key={`orbiter-${index}`}
                className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{
                  width: `${orbital.size}px`,
                  height: `${orbital.size}px`,
                  backgroundColor: orbital.color,
                  transform: `
                    translateX(calc(-50% + ${x}px)) 
                    translateY(calc(-50% + ${y}px)) 
                    translateZ(${z}px)
                  `,
                  boxShadow: `0 0 15px ${orbital.color}`,
                  zIndex: 5
                }}
              >
                {showLabels && (
                  <span 
                    className="absolute whitespace-nowrap text-xs font-bold"
                    style={{
                      color: orbital.textColor,
                      transform: 'translateY(-20px)',
                      textShadow: '0 0 5px rgba(0,0,0,0.5)'
                    }}
                  >
                    {orbital.label} {orbital.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Digital display */}
      <div 
        className="mt-12 text-center bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        style={{
          transform: `translateZ(50px)`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        <div className="text-4xl md:text-5xl font-mono text-white mb-2">
          {formatTime()}
        </div>
        <div className="text-gray-300">
          {formatDate()}
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${
            autoRotate
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {autoRotate ? 'Auto-rotating' : 'Paused'}
        </button>
        
        <button
          onClick={() => setShowOrbits(!showOrbits)}
          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${
            showOrbits
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {showOrbits ? 'Hide Orbits' : 'Show Orbits'}
        </button>
        
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${
            showLabels
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {showLabels ? 'Hide Labels' : 'Show Labels'}
        </button>
        
        <div className="flex items-center bg-gray-800 rounded-lg px-3">
          <button 
            onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
            className="text-gray-300 hover:text-white px-2 py-1"
          >
            -
          </button>
          <span className="text-sm text-gray-300 mx-2 w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button 
            onClick={() => setZoom(prev => Math.min(2, prev + 0.1))}
            className="text-gray-300 hover:text-white px-2 py-1"
          >
            +
          </button>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>Drag to rotate • Scroll to zoom • Click buttons to toggle features</p>
        <p className="mt-1 text-xs">3D Orbital Clock • Interactive Demo</p>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          overflow-x: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </div>
  );
};

render(<InteractiveOrbitalClock />);
