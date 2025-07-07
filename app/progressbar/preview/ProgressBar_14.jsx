const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar14 = ({
  progress = 75,
  height = "h-4",
  color = "bg-blue-500",
  backgroundColor = "bg-gray-100",
  rounded = true,
  animationDuration = 1,
  showCounter = true,
  glowIntensity = "medium"
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

  // Calculate glow effect based on intensity
  const getGlowStyle = () => {
    switch(glowIntensity) {
      case 'low':
        return `0 0 5px ${color}, 0 0 10px ${color}`;
      case 'high':
        return `0 0 20px ${color}, 0 0 40px ${color}`;
      case 'pulse':
        return {
          boxShadow: [
            `0 0 5px ${color}, 0 0 10px ${color}`,
            `0 0 20px ${color}, 0 0 30px ${color}`,
            `0 0 5px ${color}, 0 0 10px ${color}`
          ]
        };
      default: // medium
        return `0 0 10px ${color}, 0 0 20px ${color}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Glowing Progress Bar
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 text-gray-200">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-300">
                      Progress: {Math.round(counter)}%
                    </span>
                    {isAnimating && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-blue-900 text-blue-200 rounded-full">
                        Animating
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                      Animate
                    </button>
                    
                    <select 
                      className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={glowIntensity}
                      onChange={(e) => {}}
                    >
                      <option value="low">Low Glow</option>
                      <option value="medium">Medium Glow</option>
                      <option value="high">High Glow</option>
                      <option value="pulse">Pulse Effect</option>
                    </select>
                  </div>
                </div>
                
                <div 
                  className={`w-full ${height} ${backgroundColor} ${rounded ? 'rounded-full' : ''} overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-inner' : ''}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`h-full ${color} ${rounded ? 'rounded-full' : ''} relative`}
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: `${counter}%`,
                      ...(glowIntensity === 'pulse' ? {
                        boxShadow: [
                          `0 0 5px ${color}, 0 0 10px ${color}`,
                          `0 0 20px ${color}, 0 0 30px ${color}`,
                          `0 0 5px ${color}, 0 0 10px ${color}`
                        ]
                      } : {})
                    }}
                    transition={{ 
                      duration: animationDuration, 
                      ease: "easeInOut",
                      ...(glowIntensity === 'pulse' ? {
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      } : {})
                    }}
                    style={glowIntensity !== 'pulse' ? { boxShadow: getGlowStyle() } : {}}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-400">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={counter}
                    onChange={(e) => setCounter(parseInt(e.target.value))}
                    className="flex-1 h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-400">100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-300">Blue Glow</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-300">Pink Glow</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 15px #ec4899, 0 0 30px #ec4899' }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-300">Green Glow</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 10px #10b981, 0 0 20px #10b981' }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-300">Purple Glow</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 15px #8b5cf6, 0 0 30px #8b5cf6' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Height</label>
                    <select 
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label className="block text-sm font-medium text-gray-300 mb-1">Animation Speed</label>
                    <select 
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="showCounter" 
                        checked={showCounter} 
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
                      />
                      <label htmlFor="showCounter" className="text-sm font-medium text-gray-300">
                        Show Counter
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Usage Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">File Upload</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">uploading-image.jpg</span>
                    <span className="font-medium text-blue-400">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">System Update</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Installing updates...</span>
                    <span className="font-medium text-green-400">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 15px #10b981, 0 0 30px #10b981' }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Processing Data</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Analyzing data...</span>
                    <span className="font-medium text-purple-400">45%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1.5 }}
                      style={{ boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6' }}
                    />
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
  return <ProgressBar14 />;
};

render(<App />);
