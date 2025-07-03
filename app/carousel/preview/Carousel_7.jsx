
// Main Carousel Component
const Carousel = ({
  children,
  autoPlay = true,
  interval = 5000,
  parallaxStrength = 100,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? parallaxStrength : -parallaxStrength,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -parallaxStrength : parallaxStrength,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    }),
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, isHovered]);

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
      'from-emerald-900 to-teal-900',
      'from-blue-900 to-indigo-900',
      'from-purple-900 to-pink-900',
      'from-rose-900 to-amber-900',
      'from-cyan-900 to-blue-900'
    ];
    return gradients[index % gradients.length];
  };

  // Arrow icon component
  const ArrowIcon = ({ direction }) => (
    <span className={`block transform transition-transform group-hover:${direction === 'left' ? '-translate-x-1' : 'translate-x-1'}`}>
      {direction === 'left' ? '←' : '→'}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Parallax Effect Carousel</h2>
      <div
        className={`relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl ${getBackgroundGradient(currentIndex)} bg-gradient-to-r`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
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

        {/* Side gradients */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ArrowIcon direction="left" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ArrowIcon direction="right" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1.5 transition-all duration-300 group ${
                currentIndex === index ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const slideContents = [
    'Smooth parallax effect on slide transitions',
    'Responsive design for all screen sizes',
    'Interactive navigation with hover tooltips',
    'Customizable animation parameters',
    'Elegant gradient overlays'
  ];

  return (
    <Carousel autoPlay={true} interval={4000} parallaxStrength={120}>
      {slideContents.map((text, index) => (
        <React.Fragment key={index}>{text}</React.Fragment>
      ))}
    </Carousel>
  );
};

// Render the component
render(<ExampleCarousel />);
