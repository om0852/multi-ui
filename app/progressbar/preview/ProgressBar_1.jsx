const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar = ({
  progress = 75,
  height = "h-4",
  color = "bg-blue-500",
  backgroundColor = "bg-gray-200",
  rounded = true,
  animationDuration = 0.5,
  onStart = () => console.log("Animation started"),
  onComplete = () => console.log("Animation completed"),
  showCounter = true,
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let timer;
    if (showCounter && progress > 0) {
      const increment = progress / (animationDuration * 60);
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev + increment >= progress) {
            clearInterval(timer);
            return progress;
          }
          return prev + increment;
        });
      }, 1000 / 60);
    } else {
      setCounter(progress);
    }
    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Progress Bar</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Default</h3>
          <div className={`${backgroundColor} ${height} w-full ${rounded ? "rounded-full" : ""} overflow-hidden`}>
            <motion.div
              className={`${color} ${height} ${rounded ? "rounded-full" : ""}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: animationDuration }}
              onAnimationStart={onStart}
              onAnimationComplete={onComplete}
            />
          </div>
          {showCounter && (
            <div className="text-center text-sm font-medium mt-1">
              {Math.round(counter)}%
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Different Colors</h3>
          <div className="space-y-4">
            <div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-4 bg-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="text-center text-sm font-medium mt-1">65%</div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-4 bg-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="text-center text-sm font-medium mt-1">85%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ProgressBar />
    </div>
  );
};

render(<App />);
