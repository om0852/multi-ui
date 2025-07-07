const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar4 = ({
  progress = 75,
  show = true,
  onClose = () => console.log("Overlay closed"),
  overlayColor = "bg-black bg-opacity-60",
  circleColor = "stroke-blue-500",
  trackColor = "stroke-gray-200",
}) => {
  const [isOpen, setIsOpen] = React.useState(show);
  const [currentProgress, setCurrentProgress] = React.useState(0);

  React.useEffect(() => {
    setIsOpen(show);
  }, [show]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProgress(prev => {
        if (prev >= progress) {
          clearInterval(timer);
          return progress;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [progress]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const circleSize = 120;
  const strokeWidth = 10;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Circular Progress Overlay</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Demo Controls</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentProgress(0)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Reset Progress
                </button>
                <button
                  onClick={() => setCurrentProgress(prev => Math.min(100, prev + 10))}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Add 10%
                </button>
              </div>
              <div className="pt-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Progress: {currentProgress}%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click below to show the circular progress overlay</p>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Show Overlay
              </button>
            </div>

            {isOpen && (
              <div className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor}`}>
                <div className="relative flex flex-col items-center bg-white p-8 rounded-xl shadow-2xl">
                  <button
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <div className="relative">
                    <svg
                      width={circleSize}
                      height={circleSize}
                      className="transform -rotate-90"
                    >
                      <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        className={trackColor}
                        fill="none"
                      />
                      <motion.circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        className={`${circleColor} drop-shadow-sm`}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-gray-800">{currentProgress}%</span>
                      <span className="text-sm text-gray-500 mt-1">Completed</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-medium text-gray-800">Uploading Files</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {currentProgress < 30 && "Preparing files..."}
                      {currentProgress >= 30 && currentProgress < 70 && "Uploading..."}
                      {currentProgress >= 70 && currentProgress < 100 && "Almost there..."}
                      {currentProgress === 100 && "Completed!"}
                    </p>
                  </div>

                  <div className="mt-6 w-full max-w-xs">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${currentProgress}%` }}
                      />
                    </div>
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
  return <ProgressBar4 />;
};

render(<App />);
