const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar6 = ({
  progress = 75,
  show = true,
  onClose = () => console.log("Overlay closed"),
  barColor = "border-emerald-500",
  overlayColor = "bg-black bg-opacity-60"
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

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Circular Progress Overlay</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Demo Controls</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={startAnimation}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Start Animation
                </button>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Progress: {currentProgress}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentProgress}
                    onChange={(e) => setCurrentProgress(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <div className="text-sm font-medium text-gray-700 mb-4">Preview</div>
                <div className="relative w-40 h-40 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      transform="rotate(-90 100 100)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".3em"
                      className="text-2xl font-bold fill-gray-800"
                    >
                      {currentProgress}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click below to show the circular progress overlay</p>
              <button 
                onClick={startAnimation}
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
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
                  className="relative w-72 h-72 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <div className="relative w-56 h-56">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="14"
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="14"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        transform="rotate(-90 100 100)"
                      />
                      <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                        className="text-4xl font-bold fill-gray-800"
                      >
                        {currentProgress}%
                      </text>
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        className="text-sm font-medium fill-gray-500"
                      >
                        {currentProgress < 30 && "Starting..."}
                        {currentProgress >= 30 && currentProgress < 70 && "In Progress"}
                        {currentProgress >= 70 && currentProgress < 100 && "Almost There!"}
                        {currentProgress === 100 && "Complete!"}
                      </text>
                    </svg>
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
  return <ProgressBar6 />;
};

render(<App />);
