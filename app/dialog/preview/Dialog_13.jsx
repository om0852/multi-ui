
const animationStyles = {
  rain: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  thunder: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  wind: {
    initial: { x: -300, rotate: -10, opacity: 0 },
    animate: { x: 0, rotate: 0, opacity: 1 },
    exit: { x: 300, rotate: 10, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  sun: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 360, opacity: 1 },
    exit: { scale: 0, rotate: 540, opacity: 0 },
    transition: { duration: 0.5 }
  }
};

function StyledDialog({ children, className }) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
  className,
}) {
  const animation = animationStyles[animationType];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-sky-900/50 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              {...animation}
              className={`relative bg-gradient-to-br from-sky-100 to-white 
                rounded-3xl shadow-2xl p-4 sm:p-6 w-full max-w-[90%] sm:max-w-md md:max-w-lg 
                overflow-hidden overflow-y-auto max-h-[90vh] ${className || ""}`}
            >
              {/* Weather effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,180,255,0.2),transparent_70%)]" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                  bg-sky-500/10 hover:bg-sky-500/20 rounded-full text-sky-700
                  transition-colors z-10 text-lg sm:text-xl"
              >
                ✕
              </motion.button>
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function StyledDialogTrigger({ children, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-sky-400 to-blue-500
        text-white font-medium rounded-full shadow-lg 
        hover:shadow-sky-400/50 transition-all duration-300 text-sm sm:text-base ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

function StyledDialogHeader({ children, className }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mb-3 sm:mb-5 ${className || ""}`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-900">
        {children}
      </h2>
    </motion.div>
  );
}

function StyledDialogDescription({ children, className }) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`text-xs sm:text-sm md:text-base text-sky-700 leading-relaxed ${className || ""}`}
    >
      {children}
    </motion.p>
  );
}

function StyledDialogFooter({ children, className }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

function getWeatherInfo(type) {
  switch(type) {
    case 'rain':
      return {
        title: 'Rainy Day',
        description: 'Don\'t forget your umbrella! Light to moderate rain expected throughout the day.',
        icon: '🌧️',
        temp: '18°C',
        bg: 'from-blue-400 to-blue-600',
        btn: 'bg-blue-500 hover:bg-blue-600'
      };
    case 'thunder':
      return {
        title: 'Thunderstorm',
        description: 'Heavy thunderstorm warning in effect. Stay indoors if possible.',
        icon: '⚡',
        temp: '16°C',
        bg: 'from-purple-600 to-indigo-800',
        btn: 'bg-purple-600 hover:bg-purple-700'
      };
    case 'wind':
      return {
        title: 'Windy',
        description: 'Strong winds expected. Secure any loose outdoor items.',
        icon: '💨',
        temp: '20°C',
        bg: 'from-cyan-400 to-blue-500',
        btn: 'bg-cyan-500 hover:bg-cyan-600'
      };
    case 'sun':
    default:
      return {
        title: 'Sunny',
        description: 'Clear skies and plenty of sunshine. Perfect day to be outside!',
        icon: '☀️',
        temp: '28°C',
        bg: 'from-yellow-400 to-orange-500',
        btn: 'bg-orange-500 hover:bg-orange-600'
      };
  }
}

function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("sun");
  
  const weather = getWeatherInfo(animationType);

  return (
    <div className={`p-4 sm:p-6 md:p-8 min-h-screen flex flex-col items-center justify-center space-y-6 sm:space-y-8 
      bg-gradient-to-br ${weather.bg} transition-colors duration-500`}>
      
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full shadow
              ${animationType === type 
                ? 'bg-white/30 backdrop-blur-sm' 
                : 'bg-white/20 hover:bg-white/30'} 
              transition-colors text-white`}
            onClick={() => setAnimationType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Check Weather
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <div className="text-center">
            <div className="text-6xl mb-2">{weather.icon}</div>
            <StyledDialogHeader>
              {weather.title}
            </StyledDialogHeader>
            <div className="text-4xl font-bold text-sky-900 mb-4">{weather.temp}</div>
            <StyledDialogDescription>
              {weather.description}
            </StyledDialogDescription>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full
                  transition-colors text-sm sm:text-base"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Weather alert set!");
                }}
                className={`px-4 py-2 text-white rounded-full transition-colors
                  ${weather.btn} text-sm sm:text-base`}
              >
                Set Alert
              </button>
            </StyledDialogFooter>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

render(<DialogExample />);
