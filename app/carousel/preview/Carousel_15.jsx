
// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  speed = 50,
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

  // Sleek card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-80 w-72 rounded-2xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group`}>
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-xl ${color} bg-opacity-10 flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        <div className="text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300 -mr-2">
          0{Math.floor(Math.random() * 5) + 1}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">Learn more</span>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces designed for seamless user experiences",
      icon: "🎨",
      color: "bg-indigo-500"
    },
    {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
      icon: "💻",
      color: "bg-blue-500"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      icon: "📱",
      color: "bg-green-500"
    },
    {
      title: "Branding",
      description: "Create a memorable brand identity that stands out",
      icon: "✨",
      color: "bg-yellow-500"
    },
    {
      title: "SEO",
      description: "Improve your search engine rankings and visibility",
      icon: "🔍",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
        </div>
        
        <Carousel autoPlay={true} speed={50}>
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
