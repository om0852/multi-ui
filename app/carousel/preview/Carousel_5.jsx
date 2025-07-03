
// Main Carousel Component
const Carousel = ({ children, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 0.8 : 1.2,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 20,
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 1.2 : 0.8,
      transition: {
        duration: 0.6,
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

  // Get background gradient based on current index
  const getBackgroundGradient = (index) => {
    const gradients = [
      'from-indigo-900 via-purple-900 to-gray-900',
      'from-blue-900 via-cyan-900 to-gray-900',
      'from-emerald-900 via-teal-900 to-gray-900',
      'from-rose-900 via-pink-900 to-gray-900',
      'from-amber-900 via-orange-900 to-gray-900'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Zoom Transition Carousel</h2>
      <div className={`relative w-full h-96 overflow-hidden rounded-xl shadow-2xl ${getBackgroundGradient(currentIndex)} bg-gradient-to-br`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full flex items-center justify-center p-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Slide {currentIndex + 1}</h3>
              <p className="text-xl text-gray-200">{children[currentIndex]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600/90 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
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
            className="w-5 h-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600/90 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
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
            className="w-5 h-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white scale-125 shadow-lg" 
                  : "bg-gray-500 hover:bg-gray-300"
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
    'Smooth zoom transitions between slides',
    'Responsive design for all screen sizes',
    'Interactive navigation with hover effects',
    'Elegant dark theme with gradient backgrounds',
    'Accessible with keyboard navigation'
  ];

  return (
    <Carousel autoPlay={true} interval={5000}>
      {slideContents.map((text, index) => (
        <React.Fragment key={index}>{text}</React.Fragment>
      ))}
    </Carousel>
  );
};

// Render the component
render(<ExampleCarousel />);
