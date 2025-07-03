
// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  interval = 0,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}) => {
  const [duplicatedChildren, setDuplicatedChildren] = useState([]);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [currentDirection, setCurrentDirection] = useState(direction);
  const carouselRef = useRef(null);

  // Duplicate items to create seamless infinite scroll
  useEffect(() => {
    setDuplicatedChildren([...children, ...children, ...children]);
  }, [children]);

  // Update width when content changes
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3);
    }
  }, [duplicatedChildren]);

  const shouldAnimate = autoPlay && !(pauseOnHover && isHovered);

  const infiniteScrollVariants = {
    animate: {
      x: currentDirection === "left" ? -width : width,
      transition: {
        duration: width / currentSpeed,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  // Sample card component for demo
  const Card = ({ title, description, bgColor, textColor = 'white' }) => (
    <div className={`h-48 rounded-xl p-6 shadow-lg ${bgColor} text-${textColor} flex flex-col justify-between`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
      <button className="mt-4 self-start px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
        Learn more
      </button>
    </div>
  );

  // Default demo content if no children provided
  const defaultChildren = [
    <Card 
      key={1}
      title="Feature One"
      description="Discover amazing features that will transform your experience."
      bgColor="bg-gradient-to-br from-blue-500 to-purple-600"
    />,
    <Card 
      key={2}
      title="Premium Support"
      description="24/7 customer support to assist you anytime."
      bgColor="bg-gradient-to-br from-purple-500 to-pink-600"
    />,
    <Card 
      key={3}
      title="Easy Integration"
      description="Seamlessly connect with your favorite tools."
      bgColor="bg-gradient-to-br from-pink-500 to-red-500"
    />,
    <Card 
      key={4}
      title="Secure & Reliable"
      description="Your data is always safe with us."
      bgColor="bg-gradient-to-br from-green-500 to-teal-500"
    />,
    <Card 
      key={5}
      title="Lightning Fast"
      description="Experience blazing fast performance."
      bgColor="bg-gradient-to-br from-orange-500 to-amber-500"
    />,
  ];

  const displayChildren = children.length > 0 ? children : defaultChildren;
  const displayDuplicatedChildren = [...displayChildren, ...displayChildren, ...displayChildren];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Infinite Scrolling Carousel</h2>
        
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={carouselRef}
            className="flex py-2"
            variants={infiniteScrollVariants}
            animate={shouldAnimate ? "animate" : ""}
            initial={{ x: 0 }}
          >
            {displayDuplicatedChildren.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ minWidth: "300px" }}
              >
                <div className="transform transition-transform hover:scale-105">
                  {child}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-900 to-transparent pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Speed Controls */}
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <button
              onClick={() => setCurrentSpeed(prev => Math.max(10, prev - 5))}
              className="text-white hover:text-blue-300 transition-colors text-lg"
              aria-label="Decrease speed"
            >
              🐢
            </button>
            <span className="text-white/80 text-sm">Speed: {currentSpeed}</span>
            <button
              onClick={() => setCurrentSpeed(prev => Math.min(100, prev + 5))}
              className="text-white hover:text-blue-300 transition-colors text-lg"
              aria-label="Increase speed"
            >
              🐰
            </button>
          </div>

          {/* Direction Toggle */}
          <button
            onClick={() => setCurrentDirection(prev => prev === "left" ? "right" : "left")}
            className="bg-black/20 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/30 transition-colors text-sm flex items-center gap-2"
            aria-label="Toggle direction"
          >
            {currentDirection === "left" ? (
              <>
                <span>⟵</span>
                <span>Change Direction</span>
              </>
            ) : (
              <>
                <span>⟶</span>
                <span>Change Direction</span>
              </>
            )}
          </button>

          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsHovered(prev => !prev)}
            className="bg-black/20 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/30 transition-colors text-sm"
            aria-label={isHovered ? "Play animation" : "Pause animation"}
          >
            {isHovered ? "▶ Play" : "❚❚ Pause"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  return (
    <Carousel 
      autoPlay={true} 
      interval={4000} 
      speed={30} 
      direction="left" 
      pauseOnHover={true} 
    />
  );
};

// Render the component
render(<ExampleCarousel />);
