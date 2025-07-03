
// Main Carousel Component
const Carousel = ({
  children = [],
  autoPlay = true,
  speed = 45,
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

  // Modern card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-72 w-80 rounded-3xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden group`}>
      <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white text-xl`}>
          {icon}
        </div>
        <div className="text-4xl opacity-5 font-bold">0{Math.floor(Math.random() * 5) + 1}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
      <button className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center group-hover:translate-x-1 duration-200">
        Learn more
        <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-16 bg-gray-50">
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
    </div>
  );
};

// Example Usage
const ExampleCarousel = () => {
  const cards = [
    {
      title: "Modern Design",
      description: "Sleek and contemporary design that captures attention",
      icon: "🎯",
      color: "bg-indigo-500"
    },
    {
      title: "User Experience",
      description: "Intuitive interfaces that users love to interact with",
      icon: "✨",
      color: "bg-pink-500"
    },
    {
      title: "Performance",
      description: "Lightning fast loading and smooth animations",
      icon: "⚡",
      color: "bg-yellow-500"
    },
    {
      title: "Responsive",
      description: "Flawless experience across all devices",
      icon: "📱",
      color: "bg-green-500"
    },
    {
      title: "Customizable",
      description: "Easy to adapt to your brand's identity",
      icon: "🎨",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Modern UI Components</h1>
          <p className="text-lg text-gray-500">Beautifully designed, responsive components for your next project</p>
        </div>
        
        <Carousel autoPlay={true} speed={45}>
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
