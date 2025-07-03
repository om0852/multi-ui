const Interactive3DOrbProgressBar = ({
  value,
  max = 100,
  size = 160,
  strokeWidth = 8,
  glowIntensity = 0.5,
  particleCount = 30,
  baseColor = "#3B82F6",
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  
  // State for animation and interaction
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
  
  // Generate a random HSL color with controlled saturation and lightness
  const generateColor = (baseHue = 210, saturation = 80, lightness = 60) => {
    // Add some variation to the base hue
    const hue = (baseHue + Math.random() * 60 - 30) % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  
  // Generate particles for the orb
  useEffect(() => {
    const newParticles = [];
    const baseHue = parseInt(baseColor.split(',')[0].split('(')[1]);
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles more densely around the poles
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      
      // Convert spherical to Cartesian coordinates
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      // Random size and opacity for visual interest
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.5;
      
      // Generate a color in the same hue range as baseColor
      const color = generateColor(baseHue, 80, 60 + Math.random() * 20);
      
      newParticles.push({
        id: i,
        x, y, z,
        size,
        opacity,
        color,
        speed: Math.random() * 0.01 + 0.005,
        angle: Math.random() * Math.PI * 2,
      });
    }
    
    setParticles(newParticles);
  }, [particleCount, baseColor]);
  
  // Animate particles
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setParticles(prevParticles => 
          prevParticles.map(p => ({
            ...p,
            angle: (p.angle + p.speed) % (Math.PI * 2),
          }))
        );
      }, 16);
      
      return () => clearInterval(interval);
    }
  }, [isDragging]);
  
  // Animate progress
  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1500; // 1.5 seconds for the animation
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      // Update current value
      const newValue = startValue + (endValue - startValue) * easedProgress;
      setCurrentValue(newValue);
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [value, max]);
  
  // Handle mouse/touch interaction
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
    
    setRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x + deltaY * 0.5)),
      y: prev.y + deltaX * 0.5,
    }));
    
    setLightPosition({
      x: Math.max(0, Math.min(100, lightPosition.x - deltaX * 0.1)),
      y: Math.max(0, Math.min(100, lightPosition.y - deltaY * 0.1)),
    });
    
    setLastMousePos({ x: currentX, y: currentY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Generate gradient ID
  const gradientId = `orb-gradient-${baseColor.replace('#', '')}`;
  
  // Calculate 3D position for particles based on rotation
  const getParticlePosition = (particle) => {
    // Apply rotation
    const cosX = Math.cos(rotation.x * (Math.PI / 180));
    const sinX = Math.sin(rotation.x * (Math.PI / 180));
    const cosY = Math.cos(rotation.y * (Math.PI / 180));
    const sinY = Math.sin(rotation.y * (Math.PI / 180));
    
    // Rotate around X and Y axes
    let x = particle.x;
    let y = particle.y * cosX - particle.z * sinX;
    let z = particle.y * sinX + particle.z * cosX;
    
    const x2 = x * cosY - z * sinY;
    const z2 = x * sinY + z * cosY;
    
    // Project 3D to 2D with perspective
    const scale = 1 / (1.5 + z2 * 0.5);
    const screenX = x2 * scale * radius * 0.8 + size / 2;
    const screenY = y * scale * radius * 0.8 + size / 2;
    
    // Calculate size based on z-depth
    const sizeScale = (z2 + 1.5) / 2.5; // Normalize to 0-1 range
    const finalSize = particle.size * (0.5 + sizeScale * 0.5);
    
    return {
      x: screenX,
      y: screenY,
      size: finalSize,
      opacity: particle.opacity * (0.3 + sizeScale * 0.7),
      z: z2,
    };
  };
  
  // Sort particles by z-index for proper rendering
  const sortedParticles = [...particles]
    .map(p => ({
      ...p,
      pos: getParticlePosition(p),
    }))
    .sort((a, b) => a.pos.z - b.pos.z);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
          Interactive 3D Orb
        </h1>
        <p className="text-gray-400 mb-8">Drag to rotate and explore</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div 
            className="relative select-none touch-none"
            style={{ 
              width: size, 
              height: size,
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            <svg 
              className="w-full h-full" 
              viewBox={`0 0 ${size} ${size}`}
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }}
            >
              <defs>
                {/* Orb gradient */}
                <radialGradient 
                  id={gradientId} 
                  cx="50%" 
                  cy="50%" 
                  r="70%" 
                  fx={`${lightPosition.x}%`} 
                  fy={`${lightPosition.y}%`}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={baseColor} />
                  <stop offset="100%" stopColor={baseColor} stopOpacity="0.3" />
                </radialGradient>
                
                {/* Glow effect */}
                <filter id="orb-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation={glowIntensity * 10} result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* Light reflection */}
                <radialGradient 
                  id="light-reflection" 
                  cx="50%" 
                  cy="50%" 
                  r="50%" 
                  fx="30%" 
                  fy="30%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Outer glow */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius * 0.9}
                fill={`url(#${gradientId})`}
                filter="url(#orb-glow)"
                opacity={0.5 * glowIntensity}
              />
              
              {/* Main orb */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius * 0.8}
                fill={`url(#${gradientId})`}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
                }}
              />
              
              {/* Light reflection */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius * 0.7}
                fill="url(#light-reflection)"
                opacity="0.3"
              />
              
              {/* Progress ring */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius * 0.9}
                fill="none"
                stroke="white"
                strokeWidth={strokeWidth * 0.5}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentStrokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: currentStrokeDashoffset }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                  opacity: 0.8,
                  filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))',
                }}
              />
              
              {/* Particles */}
              {sortedParticles.map((particle) => {
                const pos = particle.pos;
                const isVisible = pos.z > -0.5; // Only show particles on the front
                
                return isVisible ? (
                  <circle
                    key={particle.id}
                    cx={pos.x}
                    cy={pos.y}
                    r={pos.size}
                    fill={particle.color}
                    opacity={pos.opacity}
                    style={{
                      transition: 'all 0.1s ease-out',
                      transform: `rotate(${particle.angle}rad)`,
                    }}
                  />
                ) : null;
              })}
              
              {/* Center text */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill="white"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
            </svg>
            
            {/* Interaction hint */}
            {!isDragging && rotation.x === 0 && rotation.y === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white/50 text-xs bg-black/30 px-2 py-1 rounded-full">
                  Drag to rotate
                </div>
              </div>
            )}
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200 border border-blue-700/50">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Animating...
                </span>
              </div>
            )}
          </div>
          
          <div className="w-full">
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-medium text-gray-300">
                Value: {value} / {max}
              </label>
              <span className="text-sm text-gray-400">
                {Math.round(currentValue)} / {max}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={max}
              value={value}
              onChange={(e) => onChange && onChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => onSizeChange && onSizeChange(parseInt(e.target.value))}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-white"
              >
                <option value="120">Small (120px)</option>
                <option value="140">Medium (140px)</option>
                <option value="160">Large (160px)</option>
                <option value="180">X-Large (180px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Glow: {Math.round(glowIntensity * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={glowIntensity}
                onChange={(e) => onGlowIntensityChange && onGlowIntensityChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Particles: {particleCount}
            </label>
            <input
              type="range"
              min="10"
              max="50"
              value={particleCount}
              onChange={(e) => onParticleCountChange && onParticleCountChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">Base Color</label>
            <div className="flex space-x-2">
              {['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color) => (
                <button
                  key={color}
                  onClick={() => onBaseColorChange && onBaseColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${baseColor === color ? 'ring-2 ring-offset-2 ring-white' : 'border-transparent'}`}
                  style={{ 
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}80`,
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPercentage"
                  checked={showPercentage}
                  onChange={(e) => onTogglePercentage && onTogglePercentage(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-300">
                  Show percentage
                </label>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Interactive3DOrbProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(160);
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [particleCount, setParticleCount] = useState(30);
  const [baseColor, setBaseColor] = useState("#3B82F6");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("3D orb animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("3D orb animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(160);
    setStrokeWidth(8);
    setGlowIntensity(0.5);
    setParticleCount(30);
    setBaseColor("#3B82F6");
    setShowPercentage(true);
  };

  return (
    <Interactive3DOrbProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      glowIntensity={glowIntensity}
      particleCount={particleCount}
      baseColor={baseColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onGlowIntensityChange={setGlowIntensity}
      onParticleCountChange={setParticleCount}
      onBaseColorChange={setBaseColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<Interactive3DOrbProgressBarDemo />);
