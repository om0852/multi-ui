
// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  interval = 5000,
  stackCount = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const wrap = (index, length) => {
    if (index < 0) return length - 1;
    if (index >= length) return 0;
    return index;
  };

  const getStackStyles = useCallback((index) => {
    const position = index - currentIndex;
    const isVisible = Math.abs(position) < stackCount;

    if (!isVisible) return { display: "none" };

    const scale = 1 - Math.abs(position) * 0.1;
    const zIndex = stackCount - Math.abs(position);

    return {
      scale,
      zIndex,
      y: Math.abs(position) * 20,
      opacity: 1 - Math.abs(position) * 0.2,
    };
  }, [currentIndex, stackCount]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => wrap(prev + 1, children.length));
  }, [children.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => wrap(prev - 1, children.length));
  }, [children.length]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && children.length > 0) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, isHovered, nextSlide, children.length]);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      controls.start({ x: 0 });
    }
  };

  // Sample slide content if no children provided
  const defaultSlides = [
    <div key={1} className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl font-bold p-8">
      <div className="text-center">
        <h3>Slide 1</h3>
        <p className="text-lg font-normal mt-2">Drag or use arrows to navigate</p>
      </div>
    </div>,
    <div key={2} className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold p-8">
      <div className="text-center">
        <h3>Slide 2</h3>
        <p className="text-lg font-normal mt-2">Interactive stack effect</p>
      </div>
    </div>,
    <div key={3} className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-2xl font-bold p-8">
      <div className="text-center">
        <h3>Slide 3</h3>
        <p className="text-lg font-normal mt-2">Smooth animations</p>
      </div>
    </div>,
    <div key={4} className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 text-white text-2xl font-bold p-8">
      <div className="text-center">
        <h3>Slide 4</h3>
        <p className="text-lg font-normal mt-2">Responsive design</p>
      </div>
    </div>,
  ];

  const displaySlides = children.length > 0 ? children : defaultSlides;

  // Arrow icon component
  const ArrowIcon = ({ direction }) => (
    <span className="text-xl">{direction === 'left' ? '←' : '→'}</span>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">3D Stack Carousel</h2>
      <div
        className="relative w-full h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence initial={false} mode="popLayout">
            {displaySlides.map((child, index) => {
              const stackStyle = getStackStyles(index);
              if (stackStyle.display === "none") return null;

              return (
                <motion.div
                  key={index}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    ...stackStyle,
                    transition: { duration: 0.5 },
                  }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  whileTap={{ cursor: "grabbing" }}
                  className="cursor-grab bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  {child}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {displaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-gray-400 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  // Using default slides from the component
  return <Carousel autoPlay={true} interval={4000} stackCount={3} />;
};

// Render the component
render(<ExampleCarousel />);
