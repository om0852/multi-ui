
// Main Carousel Component
const Carousel = ({ children, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      scale: 0.9,
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prevIndex => 
      prevIndex + 1 === children.length ? 0 : prevIndex + 1
    );
  }, [children.length]);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, nextSlide]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Generate gradient background based on current index
  const getGradient = (index) => {
    const gradients = [
      'from-purple-500 via-pink-500 to-red-500',
      'from-blue-500 via-indigo-500 to-purple-500',
      'from-green-400 via-teal-500 to-blue-500',
      'from-yellow-400 via-orange-500 to-red-500',
      'from-pink-500 via-rose-500 to-amber-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Spring Animated Carousel</h2>
      <div className={`relative w-full h-72 overflow-hidden rounded-xl shadow-xl ${getGradient(currentIndex)} bg-gradient-to-r`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            className="absolute w-full h-full flex items-center justify-center text-white"
          >
            <div className="text-center p-6">
              <h3 className="text-3xl font-bold mb-2">Slide {currentIndex + 1}</h3>
              <p className="text-xl opacity-90">{children[currentIndex]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white scale-125 shadow-lg" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((currentIndex - 1 + children.length) % children.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button
          onClick={() => goToSlide((currentIndex + 1) % children.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const slideContents = [
    'Experience smooth spring animations',
    'Responsive design for all devices',
    'Auto-play and manual navigation',
    'Beautiful gradient backgrounds',
    'Interactive dot indicators'
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
