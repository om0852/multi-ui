
// Main Carousel Component
const Carousel = ({ children, autoPlay = false, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 80,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get theme color based on current index
  const getThemeColor = (index) => {
    const colors = [
      'bg-gradient-to-r from-blue-900 to-indigo-800',
      'bg-gradient-to-r from-purple-900 to-pink-800',
      'bg-gradient-to-r from-cyan-900 to-blue-800',
      'bg-gradient-to-r from-rose-900 to-pink-800',
      'bg-gradient-to-r from-emerald-900 to-teal-800'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dark Themed Spring Carousel</h2>
      <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-2xl border-2 border-gray-700">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute w-full h-full ${getThemeColor(currentIndex)} flex items-center justify-center`}
          >
            <div className="text-center p-6 text-white">
              <h3 className="text-3xl font-bold mb-4">Slide {currentIndex + 1}</h3>
              <p className="text-xl opacity-90">{children[currentIndex]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600/90 text-white rounded-full p-3 transition-all duration-200 shadow-lg"
          aria-label="Previous Slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600/90 text-white rounded-full p-3 transition-all duration-200 shadow-lg"
          aria-label="Next Slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white border border-gray-900 scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const slideContents = [
    'Beautiful dark theme with smooth transitions',
    'Responsive design that works on all devices',
    'Interactive navigation with keyboard support',
    'Customizable animation timings',
    'Clean and modern UI components'
  ];

  return (
    <Carousel autoPlay={true} interval={4000}>
      {slideContents.map((text, index) => (
        <React.Fragment key={index}>{text}</React.Fragment>
      ))}
    </Carousel>
  );
};

// Render the component
render(<ExampleCarousel />);
