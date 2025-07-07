const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar20 = ({
  progress = 75,
  height = "h-4",
  color = "bg-blue-500",
  backgroundColor = "bg-gray-100",
  animationDuration = 1.5,
  showCounter = true,
  isAnimated = true,
  stripeDirection = "horizontal",
  stripeSpeed = "normal"
}) => {
  const [counter, setCounter] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Counter animation
  React.useEffect(() => {
    let timer;
    if (showCounter) {
      const increment = progress / (animationDuration * 30); // 30 FPS
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current >= progress) {
          current = progress;
          clearInterval(timer);
          setIsAnimating(false);
        } else {
          setIsAnimating(true);
        }
        setCounter(current);
      };
      
      updateCounter();
      timer = setInterval(updateCounter, 1000 / 30);
    } else {
      setCounter(progress);
    }
    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  const startAnimation = () => {
    setCounter(0);
    setIsAnimating(true);
    
    const increment = progress / (animationDuration * 30);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= progress) {
        current = progress;
        clearInterval(timer);
        setIsAnimating(false);
      }
      setCounter(current);
    }, 1000 / 30);
    
    return () => clearInterval(timer);
  };

  // Get animation duration for the stripe animation
  const getStripeAnimation = () => {
    if (!isAnimated) return 'none';
    
    switch(stripeSpeed) {
      case 'slow': return 'stripeMove 2s linear infinite';
      case 'fast': return 'stripeMove 0.5s linear infinite';
      case 'faster': return 'stripeMove 0.3s linear infinite';
      default: return 'stripeMove 1s linear infinite'; // normal
    }
  };

  // Get stripe direction style
  const getStripeStyle = () => {
    const baseColor = color.replace('bg-', '');
    const colorMap = {
      'blue-500': '#3b82f6',
      'green-500': '#10b981',
      'red-500': '#ef4444',
      'yellow-500': '#eab308',
      'purple-500': '#a855f7',
      'pink-500': '#ec4899',
      'indigo-500': '#6366f1',
      'teal-500': '#14b8a6'
    };
    
    const hexColor = colorMap[baseColor] || '#3b82f6';
    
    if (stripeDirection === 'diagonal') {
      return {
        backgroundImage: `repeating-linear-gradient(
          45deg,
          ${hexColor} 25%,
          transparent 25%,
          transparent 50%,
          ${hexColor} 50%,
          ${hexColor} 75%,
          transparent 75%,
          transparent
        )`,
        backgroundSize: '20px 20px',
        animation: getStripeAnimation()
      };
    } else if (stripeDirection === 'vertical') {
      return {
        backgroundImage: `repeating-linear-gradient(
          0deg,
          ${hexColor} 25%,
          transparent 25%,
          transparent 50%,
          ${hexColor} 50%,
          ${hexColor} 75%,
          transparent 75%,
          transparent
        )`,
        backgroundSize: '20px 20px',
        animation: getStripeAnimation().replace('stripeMove', 'stripeMoveVertical')
      };
    } else { // horizontal
      return {
        backgroundImage: `repeating-linear-gradient(
          90deg,
          ${hexColor} 25%,
          transparent 25%,
          transparent 50%,
          ${hexColor} 50%,
          ${hexColor} 75%,
          transparent 75%,
          transparent
        )`,
        backgroundSize: '20px 100%',
        animation: getStripeAnimation()
      };
    }
  };

  // Color options for the progress bar
  const colorOptions = [
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Yellow', color: 'bg-yellow-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Pink', color: 'bg-pink-500' },
    { name: 'Indigo', color: 'bg-indigo-500' },
    { name: 'Teal', color: 'bg-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <style jsx>{`
        @keyframes stripeMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 0; }
        }
        @keyframes stripeMoveVertical {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        .stripe-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Moving Striped Progress Bar
        </h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Progress: {Math.round(counter)}%
                    </span>
                    {isAnimating && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        {isAnimated ? 'Animated' : 'Paused'}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      {isAnimating ? 'Restart' : 'Animate'}
                    </button>
                    
                    <div className="flex items-center space-x-2 px-3 border rounded-md">
                      <input 
                        type="checkbox" 
                        id="toggleAnimation" 
                        checked={isAnimated} 
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-500 rounded border-gray-300"
                      />
                      <label htmlFor="toggleAnimation" className="text-sm text-gray-700">
                        Animate
                      </label>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`w-full ${height} ${backgroundColor} rounded-md overflow-hidden relative`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`h-full ${color} relative`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${counter}%`,
                    }}
                    transition={{
                      duration: animationDuration,
                      ease: "easeInOut"
                    }}
                  >
                    <div 
                      className="stripe-pattern"
                      style={getStripeStyle()}
                    />
                  </motion.div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={counter}
                    onChange={(e) => setCounter(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-500">100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Stripe Direction</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['horizontal', 'vertical', 'diagonal'].map((direction) => (
                      <button
                        key={direction}
                        onClick={() => {}}
                        className={`py-2 text-xs rounded-md ${stripeDirection === direction ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {direction.charAt(0).toUpperCase() + direction.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Animation Speed</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['slow', 'normal', 'fast', 'faster'].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => {}}
                        className={`py-2 text-xs rounded-md ${stripeSpeed === speed ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {speed.charAt(0).toUpperCase() + speed.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Color Options</h3>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {colorOptions.map((colorOption) => (
                    <button
                      key={colorOption.color}
                      onClick={() => {}}
                      className={`h-8 rounded-md overflow-hidden relative group ${color === colorOption.color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                      title={colorOption.name}
                    >
                      <div className={`w-full h-full ${colorOption.color} relative`}>
                        <div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                            backgroundSize: '20px 20px',
                            animation: 'stripeMove 1s linear infinite'
                          }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    value={height}
                    onChange={(e) => {}}
                  >
                    <option value="h-2">Thin (h-2)</option>
                    <option value="h-3">Small (h-3)</option>
                    <option value="h-4">Medium (h-4)</option>
                    <option value="h-5">Large (h-5)</option>
                    <option value="h-6">X-Large (h-6)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Animation Duration</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    value={animationDuration}
                    onChange={(e) => {}}
                  >
                    <option value={0.5}>Fast (0.5s)</option>
                    <option value={1}>Normal (1s)</option>
                    <option value={1.5}>Slow (1.5s)</option>
                    <option value={2}>Very Slow (2s)</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <div className="flex items-center space-x-2 w-full">
                    <input 
                      type="checkbox" 
                      id="showCounter" 
                      checked={showCounter} 
                      onChange={() => {}}
                      className="h-4 w-4 text-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="showCounter" className="text-sm font-medium text-gray-700">
                      Show Counter
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Usage Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">File Upload</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>uploading-image.jpg</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-blue-500 relative" style={{ width: '65%' }}>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                          backgroundSize: '20px 100%',
                          animation: 'stripeMove 1s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">System Update</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Installing updates...</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-green-500 relative" style={{ width: '85%' }}>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                          backgroundSize: '20px 20px',
                          animation: 'stripeMove 1s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Vertical Stripes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing data...</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-purple-500 relative" style={{ width: '45%' }}>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                          backgroundSize: '20px 20px',
                          animation: 'stripeMoveVertical 1s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Fast Diagonal Stripes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Download complete</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-pink-500 relative" style={{ width: '100%' }}>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                          backgroundSize: '20px 20px',
                          animation: 'stripeMove 0.3s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ProgressBar20 />;
};

render(<App />);
