const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar16 = ({
  progress = 75,
  height = "h-4",
  color = "bg-gradient-to-r from-purple-500 to-pink-500",
  backgroundColor = "bg-gray-100",
  rounded = true,
  animationDuration = 1.5,
  showCounter = true,
  pulseIntensity = "medium",
  isPulsing = true
}) => {
  const [counter, setCounter] = React.useState(0);
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

  // Calculate pulse effect based on intensity
  const getPulseStyle = () => {
    switch(pulseIntensity) {
      case 'low':
        return `0 0 5px ${color}, 0 0 10px ${color}`;
      case 'high':
        return `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`;
      case 'subtle':
        return `0 0 3px ${color}, 0 0 6px ${color}`;
      default: // medium
        return `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
    }
  };

  // Get animation variants for the pulse effect
  const getPulseVariants = () => {
    if (!isPulsing) return {};
    
    return {
      animate: {
        opacity: [0.8, 1, 0.8],
        boxShadow: [
          `0 0 5px ${color}, 0 0 10px ${color}`,
          `0 0 20px ${color}, 0 0 40px ${color}`,
          `0 0 5px ${color}, 0 0 10px ${color}`
        ]
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Pulsing Progress Bar
        </h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Progress: {Math.round(counter)}%
                    </span>
                    {isAnimating && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-pink-100 text-pink-800 rounded-full">
                        Pulsing
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-500/30"
                    >
                      Start Pulse
                    </button>
                    
                    <div className="flex items-center space-x-2 px-3 border rounded-md">
                      <span className="text-xs text-gray-600">Intensity</span>
                      <select 
                        className="bg-white text-gray-700 border-0 text-sm focus:outline-none focus:ring-0"
                        value={pulseIntensity}
                        onChange={(e) => {}}
                      >
                        <option value="subtle">Subtle</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2 px-3 border rounded-md">
                      <input 
                        type="checkbox" 
                        id="togglePulse" 
                        checked={isPulsing} 
                        onChange={() => {}}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-500"
                      />
                      <label htmlFor="togglePulse" className="text-sm text-gray-700">
                        Pulse
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className={`w-full ${height} ${backgroundColor} ${rounded ? 'rounded-full' : ''} overflow-hidden relative`}>
                  <motion.div
                    className={`h-full ${color} ${rounded ? 'rounded-full' : ''} relative`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${counter}%`,
                      ...(isPulsing ? getPulseVariants().animate : {})
                    }}
                    transition={{
                      width: { duration: animationDuration, ease: "easeInOut" },
                      ...(isPulsing ? getPulseVariants().transition : {})
                    }}
                    style={!isPulsing ? { boxShadow: getPulseStyle() } : {}}
                  />
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Subtle Pulse</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '65%',
                        opacity: [0.9, 1, 0.9],
                        boxShadow: [
                          '0 0 3px #3b82f6, 0 0 6px #3b82f6',
                          '0 0 5px #3b82f6, 0 0 10px #3b82f6',
                          '0 0 3px #3b82f6, 0 0 6px #3b82f6'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Medium Pulse</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '85%',
                        opacity: [0.8, 1, 0.8],
                        boxShadow: [
                          '0 0 10px #ec4899, 0 0 20px #ec4899',
                          '0 0 20px #ec4899, 0 0 40px #ec4899',
                          '0 0 10px #ec4899, 0 0 20px #ec4899'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">High Intensity</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '75%',
                        opacity: [0.7, 1, 0.7],
                        boxShadow: [
                          '0 0 10px #10b981, 0 0 20px #10b981',
                          '0 0 30px #10b981, 0 0 50px #10b981',
                          '0 0 10px #10b981, 0 0 20px #10b981'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Neon Effect</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '55%',
                        opacity: [0.6, 1, 0.6],
                        boxShadow: [
                          '0 0 5px #06b6d4, 0 0 10px #06b6d4',
                          '0 0 20px #06b6d4, 0 0 30px #06b6d4, 0 0 40px #06b6d4',
                          '0 0 5px #06b6d4, 0 0 10px #06b6d4'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pulse Speed</label>
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
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="showCounter" 
                        checked={showCounter} 
                        onChange={() => {}}
                        className="h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-500"
                      />
                      <label htmlFor="showCounter" className="text-sm font-medium text-gray-700">
                        Show Counter
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">File Upload</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>uploading-image.jpg</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '65%',
                        opacity: [0.9, 1, 0.9],
                        boxShadow: [
                          '0 0 5px #3b82f6, 0 0 10px #3b82f6',
                          '0 0 15px #3b82f6, 0 0 25px #3b82f6',
                          '0 0 5px #3b82f6, 0 0 10px #3b82f6'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
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
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '85%',
                        opacity: [0.8, 1, 0.8],
                        boxShadow: [
                          '0 0 10px #ec4899, 0 0 20px #ec4899',
                          '0 0 20px #ec4899, 0 0 40px #ec4899',
                          '0 0 10px #ec4899, 0 0 20px #ec4899'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Processing Data</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Analyzing data...</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '45%',
                        opacity: [0.7, 1, 0.7],
                        boxShadow: [
                          '0 0 10px #10b981, 0 0 20px #10b981',
                          '0 0 30px #10b981, 0 0 50px #10b981',
                          '0 0 10px #10b981, 0 0 20px #10b981'
                        ]
                      }}
                      transition={{
                        width: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
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
  );
};

const App = () => {
  return <ProgressBar16 />;
};

render(<App />);
