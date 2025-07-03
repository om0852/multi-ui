const Isometric3DClock = () => {
  const [time, setTime] = useState(new Date());
  const [rotateX, setRotateX] = useState(30);
  const [rotateY, setRotateY] = useState(-45);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle mouse/touch events for 3D rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
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
    
    setRotateY(prev => (prev + deltaX * 0.5) % 360);
    setRotateX(prev => Math.max(-90, Math.min(90, prev + deltaY * 0.5)));
    
    setLastPosition({ x: currentX, y: currentY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
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
  
  // Get time parts
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  // Generate colors based on time
  const hue = (time.getHours() * 15 + time.getMinutes() * 0.25) % 360;
  const color1 = `hsl(${hue}, 80%, 60%)`;
  const color2 = `hsl(${(hue + 120) % 360}, 80%, 60%)`;
  const color3 = `hsl(${(hue + 240) % 360}, 80%, 60%)`;
  
  // 3D Cube face component
  const CubeFace = ({ children, transform, color, borderColor = 'rgba(255,255,255,0.1)' }) => (
    <div 
      className="absolute flex items-center justify-center text-white font-bold"
      style={{
        width: '200px',
        height: '200px',
        background: color,
        border: `1px solid ${borderColor}`,
        transform,
        backfaceVisibility: 'visible',
        transformStyle: 'preserve-3d',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 20px rgba(0,0,0,0.2)'
      }}
    >
      {children}
    </div>
  );
  
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* 3D Cube Container */}
      <div 
        className="relative w-64 h-64"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease',
        }}
      >
        {/* Front face (hours) */}
        <CubeFace 
          transform="translateZ(100px)" 
          color={color1}
        >
          <div className="text-center">
            <div className="text-5xl font-bold">{hours}</div>
            <div className="text-sm mt-2">HOURS</div>
          </div>
        </CubeFace>
        
        {/* Right face (minutes) */}
        <CubeFace 
          transform="rotateY(90deg) translateZ(100px)" 
          color={color2}
        >
          <div className="text-center">
            <div className="text-5xl font-bold">{minutes}</div>
            <div className="text-sm mt-2">MINUTES</div>
          </div>
        </CubeFace>
        
        {/* Back face (seconds) */}
        <CubeFace 
          transform="rotateY(180deg) translateZ(100px)" 
          color={color3}
        >
          <div className="text-center">
            <div className="text-5xl font-bold">{seconds}</div>
            <div className="text-sm mt-2">SECONDS</div>
          </div>
        </CubeFace>
        
        {/* Left face (date) */}
        <CubeFace 
          transform="rotateY(-90deg) translateZ(100px)" 
          color="rgba(0,0,0,0.7)"
        >
          <div className="text-center text-white">
            <div className="text-2xl">
              {time.toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div className="text-4xl font-bold my-1">
              {time.getDate()}
            </div>
            <div className="text-lg">
              {time.toLocaleDateString('en-US', { month: 'short' })}
            </div>
          </div>
        </CubeFace>
        
        {/* Top face (digital time) */}
        <CubeFace 
          transform="rotateX(90deg) translateZ(100px)" 
          color="rgba(255,255,255,0.1)"
        >
          <div className="text-center">
            <div className="text-2xl font-mono">{formatTime()}</div>
            <div className="text-xs mt-2 opacity-70">DRAG TO ROTATE</div>
          </div>
        </CubeFace>
        
        {/* Bottom face (controls) */}
        <CubeFace 
          transform="rotateX(-90deg) translateZ(100px)" 
          color="rgba(0,0,0,0.5)"
        >
          <div className="text-center text-white text-xs p-2">
            <div className="mb-2">3D ISOMETRIC CLOCK</div>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color1 }}></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color2 }}></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color3 }}></div>
            </div>
          </div>
        </CubeFace>
      </div>
      
      {/* Digital display */}
      <div className="mt-16 text-center">
        <div className="text-4xl font-mono text-white mb-2">
          {formatTime()}
        </div>
        <div className="text-gray-400">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
      
      {/* Instructions */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Drag to rotate the 3D cube</p>
        <p className="mt-1 text-xs">Colors change based on the current time</p>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

render(<Isometric3DClock />);
