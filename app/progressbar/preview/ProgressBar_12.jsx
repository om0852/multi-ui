const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar12 = ({
  progress = 75,
  show = true,
  onClose = () => console.log("Overlay closed"),
  barColor = "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500",
  overlayColor = "bg-black bg-opacity-70"
}) => {
  const [isOpen, setIsOpen] = React.useState(show);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isRetroMode, setIsRetroMode] = React.useState(true);
  const [showScanlines, setShowScanlines] = React.useState(true);

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

  // Add scanlines effect
  React.useEffect(() => {
    if (!showScanlines) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .retro-scanlines {
        position: relative;
        overflow: hidden;
      }
      .retro-scanlines::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 50%
        );
        background-size: 100% 4px;
        pointer-events: none;
        z-index: 10;
      }
      .retro-border {
        border: 2px solid #333;
        box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
      }
      .retro-button {
        position: relative;
        border: 2px solid #333;
        background: #f0f0f0;
        color: #333;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.1s ease;
      }
      .retro-button:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [showScanlines]);

  return (
    <div className={`min-h-screen ${isRetroMode ? 'bg-gray-200' : 'bg-gradient-to-br from-gray-50 to-gray-100'} p-8 ${showScanlines ? 'retro-scanlines' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 text-center ${isRetroMode ? 'text-gray-800 font-mono' : 'text-gray-800'}`}>
          {isRetroMode ? 'RETRO PROGRESS BAR' : 'Retro Style Progress Bar'}
        </h1>
        
        <div className="space-y-8">
          <div className={`p-6 ${isRetroMode ? 'bg-white retro-border' : 'bg-white rounded-xl shadow-md'}`}>
            <h2 className={`text-xl font-semibold mb-6 ${isRetroMode ? 'text-gray-800 font-mono' : 'text-gray-700'}`}>
              {isRetroMode ? 'INTERACTIVE DEMO' : 'Interactive Demo'}
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isRetroMode ? 'text-gray-800 font-mono' : 'text-gray-700'}`}>
                    {isRetroMode ? 'PROGRESS:' : 'Progress:'} {currentProgress}%
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={startAnimation}
                      className={`px-4 py-2 ${isRetroMode ? 'retro-button' : 'bg-indigo-500 text-white rounded-md hover:bg-indigo-600'} transition-colors text-sm`}
                    >
                      {isRetroMode ? 'START' : 'Start'}
                    </button>
                    <button
                      onClick={() => setIsRetroMode(!isRetroMode)}
                      className={`px-3 py-1 text-xs ${isRetroMode ? 'retro-button' : 'bg-gray-200 text-gray-700 rounded hover:bg-gray-300'}`}
                    >
                      {isRetroMode ? 'MODE: RETRO' : 'Toggle Retro Mode'}
                    </button>
                    {isRetroMode && (
                      <button
                        onClick={() => setShowScanlines(!showScanlines)}
                        className={`px-3 py-1 text-xs ${isRetroMode ? 'retro-button' : 'bg-gray-200 text-gray-700 rounded hover:bg-gray-300'}`}
                      >
                        {showScanlines ? 'SCANLINES: ON' : 'SCANLINES: OFF'}
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={`w-full h-6 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                  <motion.div
                    className={`h-full ${barColor} ${isRetroMode ? '' : 'rounded-full'}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${currentProgress}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`text-xs ${isRetroMode ? 'font-mono' : 'text-gray-600'}`}>0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentProgress}
                    onChange={(e) => setCurrentProgress(parseInt(e.target.value))}
                    className={`flex-1 h-2 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'}`}
                  />
                  <span className={`text-xs ${isRetroMode ? 'font-mono' : 'text-gray-600'}`}>100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className={`text-sm font-medium ${isRetroMode ? 'font-mono' : 'text-gray-700'}`}>
                    {isRetroMode ? 'LOADING...' : 'Loading'}
                  </h3>
                  <div className={`w-full h-4 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                    <motion.div 
                      className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 ${isRetroMode ? '' : 'rounded-full'}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '65%' }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-sm font-medium ${isRetroMode ? 'font-mono' : 'text-gray-700'}`}>
                    {isRetroMode ? 'COMPLETE!' : 'Complete'}
                  </h3>
                  <div className={`w-full h-4 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                    <motion.div 
                      className={`h-full bg-gradient-to-r from-green-400 to-emerald-500 ${isRetroMode ? '' : 'rounded-full'}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-sm font-medium ${isRetroMode ? 'font-mono' : 'text-gray-700'}`}>
                    {isRetroMode ? 'WARNING' : 'Warning'}
                  </h3>
                  <div className={`w-full h-4 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                    <motion.div 
                      className={`h-full bg-gradient-to-r from-amber-400 to-orange-500 ${isRetroMode ? '' : 'rounded-full'}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-sm font-medium ${isRetroMode ? 'font-mono' : 'text-gray-700'}`}>
                    {isRetroMode ? 'ERROR' : 'Error'}
                  </h3>
                  <div className={`w-full h-4 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                    <motion.div 
                      className={`h-full bg-gradient-to-r from-red-500 to-pink-500 ${isRetroMode ? '' : 'rounded-full'}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative h-48 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-100 rounded-xl border border-gray-200'} overflow-hidden flex items-center justify-center`}>
            <div className="text-center">
              <p className={`mb-4 ${isRetroMode ? 'font-mono text-gray-800' : 'text-gray-600'}`}>
                {isRetroMode ? 'CLICK BELOW TO SHOW OVERLAY' : 'Click below to show the retro progress overlay'}
              </p>
              <button 
                onClick={startAnimation}
                className={`px-6 py-2 ${isRetroMode ? 'retro-button text-xl' : 'bg-indigo-500 text-white rounded-lg hover:bg-indigo-600'} transition-colors`}
              >
                {isRetroMode ? 'START' : 'Show Overlay'}
              </button>
            </div>

            {isOpen && (
              <div 
                className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor} transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
              >
                <div 
                  className={`relative w-11/12 md:w-2/3 lg:w-1/2 ${isRetroMode ? 'bg-gray-100 retro-border p-6' : 'bg-white rounded-xl shadow-2xl p-6'} mx-4`}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className={`absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center ${isRetroMode ? 'bg-red-500 retro-button' : 'bg-red-500 text-white rounded-full hover:bg-red-600'} focus:outline-none`}
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <h2 className={`mb-4 ${isRetroMode ? 'text-2xl font-mono' : 'text-xl font-semibold text-gray-800'}`}>
                    {isRetroMode ? 'PROCESSING...' : 'Processing Your Request'}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className={`w-full h-6 ${isRetroMode ? 'bg-gray-300 retro-border' : 'bg-gray-200 rounded-full'} overflow-hidden`}>
                      <motion.div
                        className={`h-full ${barColor} ${isRetroMode ? '' : 'rounded-full'}`}
                        initial={{ width: '0%' }}
                        animate={{ width: `${currentProgress}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${isRetroMode ? 'font-mono' : 'text-gray-600'}`}>
                        {currentProgress < 30 && (isRetroMode ? 'INITIALIZING...' : 'Initializing...')}
                        {currentProgress >= 30 && currentProgress < 70 && (isRetroMode ? `PROCESSING... ${currentProgress}%` : `Processing... ${currentProgress}%`) }
                        {currentProgress >= 70 && currentProgress < 100 && (isRetroMode ? `FINALIZING... ${currentProgress}%` : `Finalizing... ${currentProgress}%`) }
                        {currentProgress === 100 && (isRetroMode ? 'COMPLETE! 100%' : 'Complete! 100%')}
                      </span>
                    </div>
                    
                    {currentProgress === 100 && (
                      <div className={`mt-4 p-3 ${isRetroMode ? 'bg-green-200 border-2 border-green-800 font-mono' : 'bg-green-50 text-green-700 rounded-lg border border-green-200'}`}>
                        {isRetroMode ? '✅ PROCESS COMPLETED SUCCESSFULLY!' : '✅ Your request has been processed successfully!'}
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
  return <ProgressBar12 />;
};

render(<App />);
