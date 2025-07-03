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

  // Minimalist card component
  const Card = ({ title, description, icon, color }) => (
    <div className={`h-96 w-80 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group`}>
      <div className="h-48 relative overflow-hidden">
        <div className={`absolute inset-0 ${color} opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
          <span className="text-5xl opacity-20">{icon}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-lg ${color} bg-opacity-10 flex items-center justify-center text-lg mr-3`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        
        <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
          Read more
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-20 bg-gray-50">
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
      title: "Minimal Design",
      description: "Clean and simple design that focuses on content and usability. Perfect for modern web applications.",
      icon: "✏️",
      color: "bg-blue-500"
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and smooth performance across all devices and connection speeds.",
      icon: "⚡",
      color: "bg-amber-500"
    },
    {
      title: "Responsive Layout",
      description: "Looks and works perfectly on any device, from mobile phones to large desktop screens.",
      icon: "📱",
      color: "bg-emerald-500"
    },
    {
      title: "Easy Customization",
      description: "Simple to customize and adapt to your brand's unique style and requirements.",
      icon: "🎨",
      color: "bg-purple-500"
    },
    {
      title: "SEO Friendly",
      description: "Built with search engine optimization in mind to help improve your online visibility.",
      icon: "🔍",
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Modern Web Solutions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Beautifully designed components for your next project</p>
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
