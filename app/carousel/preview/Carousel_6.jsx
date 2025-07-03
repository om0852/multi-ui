d
// Main Carousel Component
const Carousel = ({
  children,
  autoPlay = true,
  interval = 5000,
  perspective = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const slideVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.8,
      opacity: 0,
      z: -perspective,
    }),
    center: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      z: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.2,
      },
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      scale: 0.8,
      opacity: 0,
      z: -perspective,
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
      'from-indigo-900 via-purple-900 to-pink-900',
      'from-blue-900 via-cyan-900 to-indigo-900',
      'from-emerald-900 via-teal-900 to-cyan-900',
      'from-rose-900 via-pink-900 to-red-900',
      'from-amber-900 via-orange-900 to-rose-900'
    ];
    return gradients[index % gradients.length];
  };

  // Arrow icon component
  const ArrowIcon = ({ direction }) => (
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
      className="w-5 h-5"
    >
      {direction === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">3D Flip Carousel</h2>
      <div
        className={`relative w-full h-96 overflow-hidden rounded-xl shadow-2xl ${getBackgroundGradient(currentIndex)} bg-gradient-to-br`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: `${perspective}px` }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full flex items-center justify-center p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Slide {currentIndex + 1}</h3>
              <p className="text-xl text-gray-200">{children[currentIndex]}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ArrowIcon direction="left" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <ArrowIcon direction="right" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80 w-2.5"
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
    'Experience stunning 3D flip animations',
    'Responsive design that works on all devices',
    'Interactive navigation with hover effects',
    'Smooth transitions between slides',
    'Beautiful gradient backgrounds'
  ];

  return (
    <Carousel autoPlay={true} interval={4000} perspective={1200}>
      {slideContents.map((text, index) => (
        <React.Fragment key={index}>{text}</React.Fragment>
      ))}
    </Carousel>
  );
};

// Render the component
render(<ExampleCarousel />);
