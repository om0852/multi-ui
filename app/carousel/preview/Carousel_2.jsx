
// Slider Pagination Component
const SliderPagination = ({ totalSlides, currentIndex, onDotClick }) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Main Carousel Component
const Carousel = ({ children, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: {
      x: "0",
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 }
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => 
      prevIndex + 1 === children.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => 
      prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
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
      style={{
        width: '1.5rem',
        height: '1.5rem',
      }}
    >
      {direction === 'left' ? (
        <polyline points="15 18 9 12 15 6"></polyline>
      ) : (
        <polyline points="9 18 15 12 9 6"></polyline>
      )}
    </svg>
  );

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center">
            {children[currentIndex]}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-md"
        aria-label="Previous slide"
      >
        <ArrowIcon direction="left" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-md"
        aria-label="Next slide"
      >
        <ArrowIcon direction="right" />
      </button>
      
      <SliderPagination
        totalSlides={children.length}
        currentIndex={currentIndex}
        onDotClick={(index) => setCurrentIndex(index)}
      />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const slides = [
    { id: 1, bg: 'bg-blue-500', text: 'Slide 1' },
    { id: 2, bg: 'bg-green-500', text: 'Slide 2' },
    { id: 3, bg: 'bg-purple-500', text: 'Slide 3' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Draggable Carousel</h2>
      <Carousel autoPlay={true} interval={3000}>
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`w-full h-64 ${slide.bg} flex items-center justify-center text-white text-3xl font-bold rounded-lg`}
          >
            {slide.text}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Render the component
render(<ExampleCarousel />);
