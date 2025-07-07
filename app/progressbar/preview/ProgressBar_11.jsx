const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar11 = ({
  progress = 75,
  show = true,
  onClose = () => console.log("Overlay closed"),
  barColor = "bg-gradient-to-r from-indigo-500 to-purple-600",
  overlayColor = "bg-black bg-opacity-70"
}) => {
  const [isOpen, setIsOpen] = React.useState(show);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const startAnimation = () => {
    setIsOpen(true);
    setIsAnimating(true);
    setCurrentProgress(0);
    
    const interval = setInterval(() => {
      setCurrentProgress(prev => {
        if (prev >= progress) {
          clearInterval(interval);
          setTimeout(() => setIsAnimating(false), 1000);
          return progress;
        }
        return prev + 1;
      });
    }, 30);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Pulsing Progress Bar</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Progress: {currentProgress}%
                  </span>
                  <button
                    onClick={startAnimation}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors text-sm"
                  >
                    Start Animation
                  </button>
                </div>
                
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${barColor} rounded-full`}
                    animate={{
                      width: `${currentProgress}%`,
                      scaleX: currentProgress === 100 ? 1.05 : 1,
                    }}
                    initial={{ width: "0%", scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      scale: {
                        repeat: currentProgress === 100 ? Infinity : 0,
                        duration: 0.8,
                        repeatType: "reverse",
                      },
                    }}
                  />
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentProgress}
                  onChange={(e) => setCurrentProgress(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Default</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '65%',
                        scaleX: 1.05,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        scale: {
                          repeat: Infinity,
                          duration: 0.8,
                          repeatType: "reverse",
                        },
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Success</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '100%',
                        scaleX: 1.05,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        scale: {
                          repeat: Infinity,
                          duration: 0.8,
                          repeatType: "reverse",
                        },
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Warning</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '85%',
                        scaleX: 1.05,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        scale: {
                          repeat: Infinity,
                          duration: 0.8,
                          repeatType: "reverse",
                        },
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Error</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '45%',
                        scaleX: 1.05,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        scale: {
                          repeat: Infinity,
                          duration: 0.8,
                          repeatType: "reverse",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click below to show the pulsing progress overlay</p>
              <button 
                onClick={startAnimation}
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Show Overlay
              </button>
            </div>

            {isOpen && (
              <div 
                className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor} transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
              >
                <div 
                  className="relative w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-xl shadow-2xl p-6 mx-4"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Processing Your Request</h2>
                  
                  <div className="space-y-4">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${barColor} rounded-full`}
                        animate={{
                          width: `${currentProgress}%`,
                          scaleX: currentProgress === 100 ? 1.05 : 1,
                        }}
                        initial={{ width: "0%", scaleX: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          scale: {
                            repeat: currentProgress === 100 ? Infinity : 0,
                            duration: 0.8,
                            repeatType: "reverse",
                          },
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        {currentProgress < 30 && "Starting..."}
                        {currentProgress >= 30 && currentProgress < 70 && `Processing... ${currentProgress}%`}
                        {currentProgress >= 70 && currentProgress < 100 && `Finishing up... ${currentProgress}%`}
                        {currentProgress === 100 && "Complete! 100%"}
                      </span>
                    </div>
                    
                    {currentProgress === 100 && (
                      <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
                        ✅ Your request has been processed successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ProgressBar11 />;
};

render(<App />);
