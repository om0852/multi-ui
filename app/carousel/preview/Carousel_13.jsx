// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  speed = 60,
  direction = "left",
  pauseOnHover = true,
}) => {
  const [duplicatedChildren, setDuplicatedChildren] = useState([]);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
      x: direction === "left" ? -width : width,
      transition: {
        duration: width / speed,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  // Dark theme card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-80 w-72 rounded-2xl p-6 bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}>
      <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
      <button className="mt-6 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center">
        Get Started
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-16 bg-gray-900">
      <motion.div
        ref={carouselRef}
        className="flex gap-8 px-4"
        animate={shouldAnimate ? "animate" : "initial"}
        variants={infiniteScrollVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "Dark Theme",
      description: "Elegant dark interface that's easy on the eyes during long sessions",
      icon: "🌙",
      color: "bg-indigo-600/20 text-indigo-400"
    },
    {
      title: "Performance",
      description: "Optimized for speed and smooth animations",
      icon: "⚡",
      color: "bg-yellow-600/20 text-yellow-400"
    },
    {
      title: "Customization",
      description: "Fully customizable to match your brand identity",
      icon: "🎨",
      color: "bg-pink-600/20 text-pink-400"
    },
    {
      title: "Components",
      description: "Collection of beautifully designed UI components",
      icon: "🧩",
      color: "bg-purple-600/20 text-purple-400"
    },
    {
      title: "Responsive",
      description: "Looks amazing on all devices and screen sizes",
      icon: "📱",
      color: "bg-green-600/20 text-green-400"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Dark Theme UI</h1>
          <p className="text-xl text-gray-400">Beautiful components for your next project</p>
        </div>
        
        <Carousel autoPlay={true} speed={60}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// Render the component
render(<ExampleCarousel />, document.getElementById('root'));
