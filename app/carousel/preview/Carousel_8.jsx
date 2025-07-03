
// Main Carousel Component
const Carousel = ({
  items = [],
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: {
      scale: 1.2,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && items.length > 0) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, isHovered, items.length]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Sample images if none provided
  const defaultItems = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/800x500?nature,1',
      title: 'Beautiful Nature',
      description: 'Experience the beauty of nature in its purest form.'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/800x500?mountain,1',
      title: 'Mountain Peaks',
      description: 'Discover breathtaking mountain landscapes.'
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/800x500?ocean,1',
      title: 'Ocean Views',
      description: 'Relax with stunning ocean vistas.'
    },
    {
      id: 4,
      image: 'https://source.unsplash.com/random/800x500?forest,1',
      title: 'Enchanted Forest',
      description: 'Step into a magical forest adventure.'
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  // Arrow icon component
  const ArrowIcon = ({ direction }) => (
    <span>{direction === 'left' ? '←' : '→'}</span>
  );

  // Return null if no items to display
  if (displayItems.length === 0) {
    return (
      <div className="relative w-full max-w-5xl mx-auto p-8 text-center">
        <p>No items to display</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Thumbnail Gallery Carousel</h2>
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[500px] rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${displayItems[currentIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {displayItems[currentIndex].title}
                    </motion.h2>
                    {displayItems[currentIndex].description && (
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-200"
                      >
                        {displayItems[currentIndex].description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            aria-label="Previous Slide"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            aria-label="Next Slide"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex justify-center gap-2 px-4">
          {displayItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative group ${
                currentIndex === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    opacity: currentIndex === index ? 1 : 0.5,
                  }}
                  onMouseOver={(e) => {
                    if (currentIndex !== index) {
                      e.currentTarget.style.opacity = '0.75';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (currentIndex !== index) {
                      e.currentTarget.style.opacity = '0.5';
                    }
                  }}
                />
              </div>
              <div
                className={`absolute inset-0 border-2 rounded-lg transition-colors ${
                  currentIndex === index
                    ? "border-blue-500"
                    : "border-transparent group-hover:border-blue-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  // Using default items from the component
  return <Carousel autoPlay={true} interval={4000} />;
};

// Render the component
render(<ExampleCarousel />);
